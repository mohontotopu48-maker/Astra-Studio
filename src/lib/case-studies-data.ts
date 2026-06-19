export interface CaseStudyMetric {
  label: string
  value: string
}

export interface CaseStudyFeature {
  title: string
  description: string
  icon: string // lucide icon name
}

export interface CaseStudyResult {
  value: string
  label: string
  description: string
}

export interface CaseStudyPhase {
  phase: string
  title: string
  description: string
  duration: string
}

export interface CaseStudyTestimonial {
  quote: string
  name: string
  role: string
  avatar: string
}

export interface CaseStudy {
  slug: string
  route: string
  title: string
  tagline: string
  description: string
  category: string
  client: {
    name: string
    role: string
    avatar: string
    company: string
    location: string
  }
  image: string
  bgColor: string
  tagColor: string
  accentColor: string
  gradient: string
  tags: string[]
  // Detail page content
  overview: string
  challenge: {
    title: string
    description: string
    points: string[]
  }
  solution: {
    title: string
    description: string
    points: string[]
  }
  features: CaseStudyFeature[]
  process: CaseStudyPhase[]
  results: CaseStudyResult[]
  metrics: CaseStudyMetric[]
  testimonial: CaseStudyTestimonial
  gallery: string[]
  nextCaseSlug?: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'triply',
    route: 'case-triply',
    title: 'Easy Booking for Dream Trips',
    tagline: 'A hassle-free tour solution for modern travelers',
    description:
      "Triply is a hassle-free & effective tour solution for travelers. It's an all-inclusive booking and planning website that helps people make their dream trips easier.",
    category: 'Travel',
    client: {
      name: 'Shubho Al-Faroque',
      role: 'Triply CEO',
      avatar: 'SA',
      company: 'Triply',
      location: 'Dhaka, Bangladesh',
    },
    image: '/images/case-travel.jpg',
    bgColor: 'bg-[#C6CFFF]',
    tagColor: 'text-[#1a1a2e]',
    accentColor: '#3B4BDB',
    gradient: 'from-[#3B4BDB] to-[#773DF2]',
    tags: ['Web Design', 'UX Research', 'Booking System', 'Travel Tech', 'Mobile-First'],
    overview:
      'Triply approached Design Nuvio to redesign their end-to-end travel booking platform. The goal was to simplify trip planning, increase booking conversions, and create a delightful experience that turns the chaos of travel research into a smooth, inspiring journey. Over the course of 14 weeks, we delivered a complete design system, a redesigned booking flow, and a mobile-responsive experience that now serves travelers across 40+ countries.',
    challenge: {
      title: 'Turning travel chaos into a seamless journey',
      description:
        'Triply\'s legacy platform suffered from a fragmented booking flow, overwhelming information architecture, and a 68% drop-off rate at the payment step. Travelers were abandoning trips mid-booking, and customer support was drowning in repeat inquiries about itinerary changes.',
      points: [
        '68% drop-off rate at checkout — travelers abandoned trips mid-booking',
        'Fragmented information architecture across 12+ disconnected screens',
        'Mobile users struggled with a desktop-first layout built in 2018',
        'Customer support overwhelmed by repeat itinerary-change inquiries',
        'No clear visual hierarchy — users couldn\'t tell what to do next',
      ],
    },
    solution: {
      title: 'A guided, mobile-first booking experience',
      description:
        'We rebuilt Triply around a single guiding principle: every screen should answer one question and lead naturally to the next. Through user interviews with 24 frequent travelers, we mapped the real journey — from dreaming about a trip to stepping off the plane — and re-architected the entire flow around it.',
      points: [
        'Designed a 4-step progressive booking flow with persistent progress indicator',
        'Built a modular design system with 60+ reusable components in Figma',
        'Introduced "Smart Itinerary" — auto-generated day-by-day trip plans',
        'Reimagined mobile UX with thumb-friendly navigation and bottom sheets',
        'Added real-time price tracking and flexible date selection to reduce friction',
      ],
    },
    features: [
      {
        title: 'Smart Itinerary Builder',
        description:
          'AI-assisted day-by-day trip planner that suggests activities, restaurants, and transit based on traveler preferences and trip duration.',
        icon: 'Map',
      },
      {
        title: 'Progressive Booking Flow',
        description:
          'A 4-step checkout with persistent progress bar, smart defaults, and one-tap payment that cut drop-off by 36%.',
        icon: 'CreditCard',
      },
      {
        title: 'Flexible Date Matrix',
        description:
          'Calendar grid showing the cheapest dates around a traveler\'s selected window, with price heatmap visualization.',
        icon: 'Calendar',
      },
      {
        title: 'Collaborative Trip Planning',
        description:
          'Real-time multi-user editing so travel groups can plan together, vote on activities, and split costs inline.',
        icon: 'Users',
      },
      {
        title: 'Offline Trip Access',
        description:
          'PWA architecture lets travelers access full itineraries, maps, and tickets even without connectivity abroad.',
        icon: 'WifiOff',
      },
      {
        title: 'Localized Experience',
        description:
          'Dynamic content and currency switching across 40+ countries with culturally relevant imagery and copy.',
        icon: 'Globe',
      },
    ],
    process: [
      {
        phase: '01',
        title: 'Discovery & Research',
        description:
          'Conducted 24 user interviews, analyzed 6 months of booking funnel analytics, and audited 7 competitor platforms.',
        duration: '3 weeks',
      },
      {
        phase: '02',
        title: 'Information Architecture',
        description:
          'Re-architected the entire site map, consolidating 12 fragmented screens into a cohesive 4-step journey.',
        duration: '2 weeks',
      },
      {
        phase: '03',
        title: 'Design System & UI',
        description:
          'Built a modular design system in Figma with 60+ components, then designed all key screens in high fidelity.',
        duration: '5 weeks',
      },
      {
        phase: '04',
        title: 'Prototype & Validation',
        description:
          'Interactive Figma prototype tested with 12 travelers; iterated based on 47 usability findings.',
        duration: '2 weeks',
      },
      {
        phase: '05',
        title: 'Handoff & Launch',
        description:
          'Developer handoff with annotated specs, design tokens, and a living component library. Ongoing iteration post-launch.',
        duration: '2 weeks',
      },
    ],
    results: [
      {
        value: '36%',
        label: 'Retention Growth',
        description: 'Repeat bookings from existing users grew by 36% within 3 months of launch.',
      },
      {
        value: '40+',
        label: 'Pages in Projects',
        description: 'A complete, documented design system spanning 40+ production-ready pages.',
      },
      {
        value: '52%',
        label: 'Checkout Conversion',
        description: 'Checkout drop-off fell from 68% to 33% — a 52% relative improvement.',
      },
      {
        value: '4.8',
        label: 'App Store Rating',
        description: 'User reviews praised the new flow; rating climbed from 3.6 to 4.8 stars.',
      },
    ],
    metrics: [
      { label: 'Pages in Projects', value: '40+' },
      { label: 'Retention Growth', value: '36%' },
    ],
    testimonial: {
      quote:
        'Design Nuvio didn\'t just redesign our booking flow — they reframed how we think about the traveler\'s journey. The new Triply feels effortless, and our retention numbers prove it. They\'re the rare team that pairs beautiful design with real business impact.',
      name: 'Shubho Al-Faroque',
      role: 'Triply CEO',
      avatar: 'SA',
    },
    gallery: [
      '/images/case-travel.jpg',
      '/images/case-travel.png',
    ],
    nextCaseSlug: 'plate',
  },
  {
    slug: 'plate',
    route: 'case-plate',
    title: 'Transform Your Dining',
    tagline: 'Handpicked premium restaurants, memorable experiences',
    description:
      "At Plate, we bring you a handpicked selection of premium restaurants that offer not just meals, but memorable dining experiences you'll cherish.",
    category: 'Restaurant',
    client: {
      name: 'Neil Saidi',
      role: 'Plate CEO',
      avatar: 'NS',
      company: 'Plate',
      location: 'Paris, France',
    },
    image: '/images/case-restaurant.png',
    bgColor: 'bg-[#FFB8B0]',
    tagColor: 'text-[#1a1a2e]',
    accentColor: '#E5594F',
    gradient: 'from-[#E5594F] to-[#FF8A75]',
    tags: ['Brand Identity', 'Web Design', 'Reservation System', 'Hospitality', 'Editorial'],
    overview:
      'Plate is a curated dining platform connecting discerning diners with France\'s most exceptional restaurants. Design Nuvio crafted the entire digital identity — from brand system to reservation flow — over a 5-month engagement. The result is an editorial, cinematic experience that treats every restaurant as a story worth telling, not just a listing.',
    challenge: {
      title: 'Standing out in a saturated reservation market',
      description:
        'The restaurant reservation space is dominated by utility-first platforms that treat dining as a transaction. Plate wanted to differentiate by treating every restaurant as a story — but their existing MVP felt generic, and diners weren\'t connecting emotionally with the curated venues.',
      points: [
        'Generic MVP failed to convey the premium, curated nature of the platform',
        'Restaurants felt reduced to listings — no storytelling, no personality',
        'Reservation flow had 41% drop-off due to unnecessary friction',
        'No brand system to unify the experience across marketing and product',
        'Mobile experience was an afterthought — 73% of diners browse on phone',
      ],
    },
    solution: {
      title: 'An editorial, story-first dining experience',
      description:
        'We positioned Plate as the " Criterion Collection of restaurants" — a curated, editorial platform where every venue gets a story. A custom typographic system, cinematic photography direction, and a frictionless 3-step reservation flow brought the vision to life.',
      points: [
        'Created a complete brand identity: custom wordmark, editorial type system, warm palette',
        'Designed immersive restaurant "stories" with full-bleed photography and chef interviews',
        'Rebuilt reservation flow into a frictionless 3-step process with smart time suggestions',
        'Built a "Discover" feed with editorial curation, seasonal collections, and chef spotlights',
        'Crafted a mobile-first experience with thumb-zone optimized booking and Apple Wallet passes',
      ],
    },
    features: [
      {
        title: 'Editorial Restaurant Stories',
        description:
          'Each venue gets a full-bleed editorial page with photography, chef interview, signature dishes, and the story behind the kitchen.',
        icon: 'BookOpen',
      },
      {
        title: 'Frictionless Reservations',
        description:
          'A 3-step booking flow with smart time suggestions, party-size awareness, and instant confirmation. Drop-off fell from 41% to 12%.',
        icon: 'CalendarCheck',
      },
      {
        title: 'Curated Discover Feed',
        description:
          'Editorial collections like "Spring in Provence" and "Hidden Bistros of Lyon" replace generic search results.',
        icon: 'Sparkles',
      },
      {
        title: 'Chef Spotlights',
        description:
          'Video-rich profiles letting chefs tell their own story, building emotional connection before the diner ever arrives.',
        icon: 'UtensilsCrossed',
      },
      {
        title: 'Apple Wallet Integration',
        description:
          'Every reservation generates a Wallet pass with venue details, directions, and one-tap modification.',
        icon: 'Smartphone',
      },
      {
        title: 'Seasonal Collections',
        description:
          'Quarterly editorial drops featuring 8-12 restaurants around a theme — driving discovery and repeat visits.',
        icon: 'Leaf',
      },
    ],
    process: [
      {
        phase: '01',
        title: 'Brand Strategy',
        description:
          'Workshops with the Plate founding team to define positioning, voice, and the "editorial curation" north star.',
        duration: '3 weeks',
      },
      {
        phase: '02',
        title: 'Identity & Type System',
        description:
          'Designed a custom wordmark, paired serif/sans typographic system, and warm editorial color palette.',
        duration: '4 weeks',
      },
      {
        phase: '03',
        title: 'Product Design',
        description:
          'Designed the full product: restaurant stories, reservation flow, discover feed, and chef profiles.',
        duration: '8 weeks',
      },
      {
        phase: '04',
        title: 'Photography Direction',
        description:
          'Art-directed a 2-week photoshoot across 18 restaurants, producing 400+ editorial-grade images.',
        duration: '2 weeks',
      },
      {
        phase: '05',
        title: 'Handoff & Launch',
        description:
          'Developer handoff with full design system, brand guidelines, and a living style guide.',
        duration: '3 weeks',
      },
    ],
    results: [
      {
        value: '12%',
        label: 'Booking Drop-off',
        description: 'Reservation flow drop-off fell from 41% to 12% — a 71% relative reduction.',
      },
      {
        value: '5 mo',
        label: 'Project Duration',
        description: 'End-to-end brand and product design delivered in 5 focused months.',
      },
      {
        value: '3.2x',
        label: 'Time on Page',
        description: 'Diners now spend 3.2x longer on restaurant pages, reading the editorial stories.',
      },
      {
        value: '94%',
        label: 'Restaurateur NPS',
        description: '94% of partner restaurants rated the new profiles "significantly better" than before.',
      },
    ],
    metrics: [
      { label: 'Location', value: 'France' },
      { label: 'Project Duration', value: '5 Months' },
    ],
    testimonial: {
      quote:
        'Design Nuvio understood that Plate isn\'t a reservation app — it\'s a love letter to French dining. They gave every restaurant a voice and every diner a reason to fall in love before they ever sat down. The numbers speak for themselves, but the magic is in the stories.',
      name: 'Neil Saidi',
      role: 'Plate CEO',
      avatar: 'NS',
    },
    gallery: ['/images/case-restaurant.png'],
    nextCaseSlug: 'yenex',
  },
  {
    slug: 'yenex',
    route: 'case-yenex',
    title: 'Reducing Carbon Footprints',
    tagline: 'A smart, sustainable energy platform for everyone',
    description:
      'Yenex is a smart and sustainable energy platform. It empowers users with distributed energy solutions to reduce carbon footprints effortlessly.',
    category: 'SaaS',
    client: {
      name: 'Ted Nash',
      role: 'Yenex CEO',
      avatar: 'TN',
      company: 'Yenex',
      location: 'Berlin, Germany',
    },
    image: '/images/case-saas.png',
    bgColor: 'bg-[#FBE8A4]',
    tagColor: 'text-[#1a1a2e]',
    accentColor: '#C99700',
    gradient: 'from-[#C99700] to-[#592DB5]',
    tags: ['SaaS Dashboard', 'Data Visualization', 'Sustainability', 'B2B', 'Design System'],
    overview:
      'Yenex is a distributed energy platform helping households and small businesses track, optimize, and reduce their carbon footprint. Design Nuvio partnered with Yenex for a 2.5-month sprint to redesign their core analytics dashboard, simplify onboarding, and build a scalable design system. The new platform now serves 18,000+ active users across Germany and Austria.',
    challenge: {
      title: 'Making complex energy data feel approachable',
      description:
        'Yenex\'s original dashboard was built by engineers, for engineers. It packed 40+ metrics onto a single screen, used jargon like "kWh LCI coefficient," and overwhelmed the casual user. Onboarding took 18 minutes and 42% of new signups never finished it.',
      points: [
        'Dashboard packed 40+ metrics on one screen — overwhelming for non-technical users',
        'Onboarding took 18 minutes; 42% of new users never completed it',
        'Energy jargon ("kWh LCI coefficient") alienated the target audience',
        'No clear visual hierarchy — users couldn\'t find their most important data',
        'Mobile experience was effectively unusable — yet 38% of users tried',
      ],
    },
    solution: {
      title: 'A progressive, story-driven energy dashboard',
      description:
        'We rebuilt Yenex around a "progressive disclosure" principle — start with one number that matters (your carbon impact this month), then let users dig deeper as they\'re ready. A modular card system, plain-language labels, and a clean dark/light theme transformed the experience.',
      points: [
        'Replaced 40-metric dashboard with a 3-tier progressive card system',
        'Redesigned onboarding into a 4-step wizard — completion time fell from 18 min to 3 min',
        'Translated all jargon into plain language with helpful tooltips and a glossary',
        'Built a unified design system with 80+ tokens and 45+ components',
        'Designed a fully responsive mobile experience with offline-first data caching',
      ],
    },
    features: [
      {
        title: 'Carbon Impact Score',
        description:
          'A single, monthly score that summarizes a user\'s carbon footprint — the one number that matters most, front and center.',
        icon: 'Leaf',
      },
      {
        title: 'Progressive Card System',
        description:
          'Three tiers of depth: summary, detail, and raw data. Users see what they need, dig deeper only when they want.',
        icon: 'Layers',
      },
      {
        title: '4-Step Onboarding Wizard',
        description:
          'Connects utility accounts, sets goals, and personalizes the dashboard in under 3 minutes — up from 18.',
        icon: 'Rocket',
      },
      {
        title: 'Energy Mix Visualizer',
        description:
          'Interactive sankey diagram showing where your energy comes from and where it goes, with carbon intensity overlay.',
        icon: 'BarChart3',
      },
      {
        title: 'Goal Tracking & Streaks',
        description:
          'Monthly reduction goals with streak tracking, gentle nudges, and shareable achievement cards.',
        icon: 'Target',
      },
      {
        title: 'Smart Recommendations',
        description:
          'Personalized suggestions ("Shift dishwasher to 9pm to save 2.1kg CO₂") with one-tap implementation.',
        icon: 'Lightbulb',
      },
    ],
    process: [
      {
        phase: '01',
        title: 'User Research & Audit',
        description:
          'Interviewed 15 existing users, audited the legacy dashboard, and mapped the energy data hierarchy.',
        duration: '1.5 weeks',
      },
      {
        phase: '02',
        title: 'Information Architecture',
        description:
          'Re-architected 40+ metrics into a 3-tier progressive card system with clear hierarchy.',
        duration: '1 week',
      },
      {
        phase: '03',
        title: 'Design System & Dashboard',
        description:
          'Built the design system, then designed the dashboard, onboarding, and mobile experience in parallel.',
        duration: '4 weeks',
      },
      {
        phase: '04',
        title: 'Prototype & Validate',
        description:
          'Clickable prototype tested with 8 users; iterated based on 23 usability findings.',
        duration: '1 week',
      },
      {
        phase: '05',
        title: 'Handoff & Launch',
        description:
          'Annotated specs, design tokens in JSON, and a 2-week post-launch iteration sprint.',
        duration: '1 week',
      },
    ],
    results: [
      {
        value: '40%',
        label: 'Customer Acquisition',
        description: 'Onboarding completion jumped from 58% to 81% — a 40% relative lift in activation.',
      },
      {
        value: '2.5 mo',
        label: 'Project Timeline',
        description: 'Full dashboard redesign, design system, and onboarding delivered in 2.5 months.',
      },
      {
        value: '15 min',
        label: 'Faster Onboarding',
        description: 'Onboarding time dropped from 18 minutes to under 3 — a 15-minute improvement.',
      },
      {
        value: '18k+',
        label: 'Active Users',
        description: 'The redesigned platform now serves 18,000+ monthly active users across DACH.',
      },
    ],
    metrics: [
      { label: 'Project Timeline', value: '2.5 Months' },
      { label: 'Customer Acquisition', value: '40%' },
    ],
    testimonial: {
      quote:
        'Design Nuvio took a dashboard that scared people away and turned it into something my parents could use. They have a rare gift for making complex data feel human. Our activation rate is the highest it\'s ever been, and support tickets are down 60%.',
      name: 'Ted Nash',
      role: 'Yenex CEO',
      avatar: 'TN',
    },
    gallery: ['/images/case-saas.png'],
    nextCaseSlug: 'fitmate',
  },
  {
    slug: 'fitmate',
    route: 'case-fitmate',
    title: 'Revolutionize Fitness Goals',
    tagline: 'Flexible gym access, personalized schedules, AI insights',
    description:
      'Fitmate transforms fitness in Australia with flexible gym access, personalized schedules, and AI-driven insights to solve common workout limitations for users.',
    category: 'Healthcare',
    client: {
      name: 'Omar',
      role: 'Fitmate CEO',
      avatar: 'OM',
      company: 'Fitmate',
      location: 'Sydney, Australia',
    },
    image: '/images/case-healthcare.png',
    bgColor: 'bg-[#ABF5FF]',
    tagColor: 'text-[#1a1a2e]',
    accentColor: '#0EA5C7',
    gradient: 'from-[#0EA5C7] to-[#773DF2]',
    tags: ['Mobile App', 'Health & Fitness', 'AI Insights', 'iOS & Android', 'Gamification'],
    overview:
      'Fitmate is Australia\'s first truly flexible gym access app — one membership, 600+ gyms, no contracts. Design Nuvio designed the entire mobile experience over a 2-month sprint: from onboarding to workout tracking, gamified streaks, and AI-driven personalized plans. The app launched to a 4.8-star rating on both stores within the first month.',
    challenge: {
      title: 'Solving the "gym anxiety" problem at scale',
      description:
        'Fitmate\'s research showed that 67% of Australians who sign up for a gym never go past week 3. The reasons: rigid schedules, gym anxiety, lack of personalized guidance, and the friction of switching between 600+ partner gyms. The original beta app felt like a directory — not a coach.',
      points: [
        '67% of new gym members quit within 3 weeks — the "week-3 cliff"',
        'No personalization — every user got the same generic workout suggestions',
        'Gym anxiety: users didn\'t know what to expect at unfamiliar partner gyms',
        'Switching between 600+ partner gyms was confusing and inconsistent',
        'No motivation loop — nothing pulled users back after a missed session',
      ],
    },
    solution: {
      title: 'A coach in your pocket, not a directory',
      description:
        'We repositioned Fitmate from a "gym pass" to a "fitness companion." Personalized AI plans, gym previews, gamified streaks with friends, and gentle re-engagement after missed sessions turned the app into something users actually open daily.',
      points: [
        'Designed a personalized onboarding that builds a custom plan in 90 seconds',
        'Built "Gym Preview" — photo tours, crowd levels, and equipment lists for every partner gym',
        'Created a gamified streak system with friend challenges and weekly leaderboards',
        'Added AI-driven adaptive plans that adjust based on completed sessions and feedback',
        'Designed gentle re-engagement flows that turn missed sessions into comebacks',
      ],
    },
    features: [
      {
        title: '90-Second Personalized Onboarding',
        description:
          'Quick-fire questions about goals, schedule, and preferences generate a fully personalized plan in under 2 minutes.',
        icon: 'Zap',
      },
      {
        title: 'Gym Preview & Crowd Levels',
        description:
          'Photo tours, equipment lists, and real-time crowd predictions for every partner gym — killing gym anxiety.',
        icon: 'Eye',
      },
      {
        title: 'Adaptive AI Plans',
        description:
          'Workout plans that adjust weekly based on completed sessions, fatigue feedback, and progress toward goals.',
        icon: 'BrainCircuit',
      },
      {
        title: 'Friend Streaks & Challenges',
        description:
          'Weekly leaderboards, shared streaks, and head-to-head challenges with friends — the social hook that drives retention.',
        icon: 'Flame',
      },
      {
        title: 'Smart Re-engagement',
        description:
          'After a missed session, gentle nudges suggest a shorter "comeback workout" — not a guilt trip. Reactivation rate: 47%.',
        icon: 'HeartHandshake',
      },
      {
        title: 'Universal Check-In',
        description:
          'One-tap QR check-in works across all 600+ partner gyms with automatic session logging and equipment tracking.',
        icon: 'QrCode',
      },
    ],
    process: [
      {
        phase: '01',
        title: 'Research & Strategy',
        description:
          'Surveyed 220 Australian gym-goers, interviewed 15 quitters, and mapped the "week-3 cliff" drop-off journey.',
        duration: '1 week',
      },
      {
        phase: '02',
        title: 'App Architecture',
        description:
          'Designed the information architecture across 32 screens — onboarding, home, plans, gyms, social, profile.',
        duration: '1 week',
      },
      {
        phase: '03',
        title: 'UI & Interaction Design',
        description:
          'Designed all 32 screens in high fidelity with motion specs, gesture patterns, and a complete design system.',
        duration: '4 weeks',
      },
      {
        phase: '04',
        title: 'Prototype & Test',
        description:
          'Interactive prototype tested with 10 target users; iterated based on 31 usability findings.',
        duration: '1 week',
      },
      {
        phase: '05',
        title: 'Handoff & Launch',
        description:
          'Developer handoff with motion specs, asset exports, and a 4-week post-launch iteration sprint.',
        duration: '1 week',
      },
    ],
    results: [
      {
        value: '2 mo',
        label: 'Project Duration',
        description: 'Complete mobile app design — 32 screens, design system, motion specs — in 2 months.',
      },
      {
        value: '4.8★',
        label: 'App Store Rating',
        description: 'Launched to 4.8 stars on both iOS and Android within the first month.',
      },
      {
        value: '58%',
        label: 'Week-3 Retention',
        description: 'Week-3 retention jumped from 33% to 58% — the "week-3 cliff" was largely solved.',
      },
      {
        value: '47%',
        label: 'Reactivation Rate',
        description: '47% of lapsed users returned after a smart re-engagement nudge — industry avg is 12%.',
      },
    ],
    metrics: [
      { label: 'Project Scope', value: 'Mobile App' },
      { label: 'Project Duration', value: '2 Months' },
    ],
    testimonial: {
      quote:
        'Design Nuvio didn\'t just design an app — they designed a habit. The week-3 retention numbers are the proof. They understood that fitness is emotional, not transactional, and built an experience that makes people want to come back. Genuinely the best design partner we\'ve worked with.',
      name: 'Omar',
      role: 'Fitmate CEO',
      avatar: 'OM',
    },
    gallery: ['/images/case-healthcare.png'],
    nextCaseSlug: 'zantrik',
  },
  {
    slug: 'zantrik',
    route: 'case-zantrik',
    title: 'Simplifying Vehicle Care',
    tagline: 'An innovative vehicle maintenance app, reimagined',
    description:
      'Zantrik is an innovative vehicle maintenance app. We revamped it with a fresh design, gamification, and intuitive features to boost user engagement.',
    category: 'Automotive',
    client: {
      name: 'Shubho Al-Farooque',
      role: 'Zantrik CEO',
      avatar: 'SA',
      company: 'Zantrik',
      location: 'Dhaka, Bangladesh',
    },
    image: '/images/case-vehicle.png',
    bgColor: 'bg-[#C9FFF7]',
    tagColor: 'text-[#1a1a2e]',
    accentColor: '#0DA68C',
    gradient: 'from-[#0DA68C] to-[#773DF2]',
    tags: ['Mobile App', 'Automotive', 'Gamification', 'Service Booking', 'Loyalty'],
    overview:
      'Zantrik connects vehicle owners with trusted service centers across Bangladesh. Design Nuvio led an 8-week redesign of the entire mobile experience — replacing a dated, utility-first app with a fresh, gamified, trust-building companion. The redesign drove a 3x lift in monthly active users and a 64% increase in repeat service bookings.',
    challenge: {
      title: 'Turning a chore into a habit',
      description:
        'Vehicle maintenance is something every car or bike owner dreads — opaque pricing, untrustworthy mechanics, and the constant fear of being overcharged. Zantrik\'s original app worked, but felt like a utility bill: used only when absolutely necessary, never loved.',
      points: [
        'App felt like a chore — users opened it only when something broke',
        'Pricing opacity eroded trust — users assumed they were being overcharged',
        'No reason to return between services — zero engagement loop',
        'Dated 2019 visual design made the brand feel untrustworthy',
        'Mechanic reviews were buried — users couldn\'t vet service centers',
      ],
    },
    solution: {
      title: 'A trusted, gamified vehicle companion',
      description:
        'We repositioned Zantrik from "book a service" to "care for your vehicle." Transparent pricing, verified mechanic reviews, a vehicle health score, and a gamified loyalty program turned a dreaded chore into a rewarding habit.',
      points: [
        'Introduced a "Vehicle Health Score" — a single number summarizing your vehicle\'s condition',
        'Built transparent pricing with upfront quotes and a "fair price" badge for verified centers',
        'Designed a gamified loyalty program with tiers, badges, and redeemable "Care Points"',
        'Rebuilt mechanic reviews with verified-customer tags and photo evidence',
        'Created a "Service History Timeline" — every vehicle gets a beautiful, shareable logbook',
      ],
    },
    features: [
      {
        title: 'Vehicle Health Score',
        description:
          'A single 0-100 score summarizing your vehicle\'s condition based on service history, mileage, and diagnostics.',
        icon: 'Gauge',
      },
      {
        title: 'Transparent Pricing',
        description:
          'Upfront quotes for every service with a "fair price" badge — killing the fear of being overcharged.',
        icon: 'BadgeDollarSign',
      },
      {
        title: 'Gamified Loyalty Program',
        description:
          'Tiers (Bronze → Platinum), badges, and redeemable Care Points that turn maintenance into a rewarding game.',
        icon: 'Trophy',
      },
      {
        title: 'Verified Mechanic Reviews',
        description:
          'Only verified customers can review, with optional photo evidence — building real trust in the network.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Service History Timeline',
        description:
          'A beautiful, shareable logbook of every service, part replacement, and expense — your vehicle\'s biography.',
        icon: 'History',
      },
      {
        title: 'Smart Service Reminders',
        description:
          'Predictive reminders based on mileage, time, and driving patterns — never miss an oil change again.',
        icon: 'BellRing',
      },
    ],
    process: [
      {
        phase: '01',
        title: 'Research & Audit',
        description:
          'Interviewed 18 vehicle owners, audited the legacy app, and benchmarked 5 regional competitors.',
        duration: '1 week',
      },
      {
        phase: '02',
        title: 'Strategy & Architecture',
        description:
          'Defined the "vehicle companion" positioning and re-architected the app around 4 core tabs.',
        duration: '1 week',
      },
      {
        phase: '03',
        title: 'Design System & UI',
        description:
          'Built a fresh design system with a trustworthy teal/purple palette, then designed all 28 screens.',
        duration: '4 weeks',
      },
      {
        phase: '04',
        title: 'Prototype & Test',
        description:
          'Interactive prototype tested with 12 vehicle owners; iterated based on 27 usability findings.',
        duration: '1 week',
      },
      {
        phase: '05',
        title: 'Handoff & Launch',
        description:
          'Developer handoff with motion specs, gamification rules doc, and a 3-week post-launch sprint.',
        duration: '1 week',
      },
    ],
    results: [
      {
        value: '8 wk',
        label: 'Project Duration',
        description: 'Full app redesign — 28 screens, design system, gamification system — in 8 weeks.',
      },
      {
        value: '3x',
        label: 'Monthly Active Users',
        description: 'MAU tripled within 4 months of the redesigned app launching.',
      },
      {
        value: '64%',
        label: 'Repeat Bookings',
        description: 'Repeat service bookings grew 64% — the loyalty program is working.',
      },
      {
        value: '4.7★',
        label: 'App Store Rating',
        description: 'Rating climbed from 3.4 to 4.7 stars — users now love, not just use, the app.',
      },
    ],
    metrics: [
      { label: 'Project Duration', value: '8 Weeks' },
      { label: 'Work Scope', value: 'Mobile App' },
    ],
    testimonial: {
      quote:
        'Design Nuvio understood that vehicle care is about trust, not transactions. They rebuilt our app around transparency and reward — and the numbers prove it. We went from a utility people tolerated to a companion they actually open weekly. The gamification system alone doubled our retention.',
      name: 'Shubho Al-Farooque',
      role: 'Zantrik CEO',
      avatar: 'SA',
    },
    gallery: ['/images/case-vehicle.png'],
    nextCaseSlug: 'triply',
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}

export function getCaseStudyByRoute(route: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.route === route)
}

export function getNextCaseStudy(slug: string): CaseStudy | undefined {
  const current = getCaseStudyBySlug(slug)
  if (!current?.nextCaseSlug) return undefined
  return getCaseStudyBySlug(current.nextCaseSlug)
}
