import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Rate limiting - simple in-memory store
const submissions = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX = 3 // 3 submissions per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const userSubmissions = submissions.get(ip) || []
  const recentSubmissions = userSubmissions.filter(
    (time) => now - time < RATE_LIMIT_WINDOW
  )
  submissions.set(ip, recentSubmissions)
  return recentSubmissions.length >= RATE_LIMIT_MAX
}

// Input validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  company: z.string().max(100).optional(),
  phone: z.string().max(30).optional(),
  budget: z.string().max(50).optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
})

// Basic spam detection
function isSpam(data: z.infer<typeof contactSchema>): boolean {
  const spamPatterns = [
    /\[url=/i,
    /\[link=/i,
    /viagra|cialis|casino|lottery|prize/i,
  ]

  const textToCheck = `${data.name} ${data.message}`
  return spamPatterns.some((pattern) => pattern.test(textToCheck))
}

// In-memory store for contact submissions (for Vercel serverless)
const contactStore: Array<Record<string, string | null>> = []

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse and validate input
    const body = await request.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const data = result.data

    // Spam check
    if (isSpam(data)) {
      return NextResponse.json(
        { error: 'Submission rejected' },
        { status: 422 }
      )
    }

    // Sanitize input
    const sanitized = {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      company: data.company?.trim() || null,
      phone: data.phone?.trim() || null,
      budget: data.budget?.trim() || null,
      message: data.message.trim(),
    }

    // Store submission in memory (for production, use a real database or email service)
    contactStore.push({
      ...sanitized,
      source: 'contact_form',
      submittedAt: new Date().toISOString(),
    })

    console.log('New contact submission:', sanitized.email, sanitized.company)

    return NextResponse.json(
      { message: 'Thank you! We\'ll be in touch within 24 hours.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    )
  }
}
