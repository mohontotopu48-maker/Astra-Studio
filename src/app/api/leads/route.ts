import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// In-memory store for leads (for Vercel serverless)
const leadsStore: Array<Record<string, string | null>> = []

// GET /api/leads - List leads
export async function GET() {
  try {
    return NextResponse.json({
      leads: leadsStore,
      total: leadsStore.length,
    })
  } catch (error) {
    console.error('Get leads error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    )
  }
}

// POST /api/leads - Create a new lead
const leadSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().max(100).optional(),
  phone: z.string().max(30).optional(),
  budget: z.string().max(50).optional(),
  projectDetails: z.string().max(5000).optional(),
  source: z.string().max(50).optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const result = leadSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const lead = {
      ...result.data,
      status: 'new',
      createdAt: new Date().toISOString(),
    }

    leadsStore.push(lead)

    return NextResponse.json({ lead }, { status: 201 })
  } catch (error) {
    console.error('Create lead error:', error)
    return NextResponse.json(
      { error: 'Failed to create lead' },
      { status: 500 }
    )
  }
}
