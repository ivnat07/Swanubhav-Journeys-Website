import { NextRequest, NextResponse } from 'next/server'
import { ContactRequest } from '@/types'

interface ContactResponse {
  success: boolean
  message?: string
  error?: string
}

export async function POST(request: NextRequest): Promise<NextResponse<ContactResponse>> {
  try {
    const body: ContactRequest = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.message || !body.phone) {
      return NextResponse.json<ContactResponse>(
        {
          success: false,
          error: 'Missing required fields. Name, email, phone, and message are required.',
        },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json<ContactResponse>(
        {
          success: false,
          error: 'Please provide a valid email address.',
        },
        { status: 400 }
      )
    }

    // Validate combined phone contains a 10-digit number
    const digitsOnly = body.phone.replace(/\D/g, '')
    const lastTen = digitsOnly.slice(-10)
    if (lastTen.length !== 10) {
      return NextResponse.json<ContactResponse>(
        {
          success: false,
          error: 'Phone must contain a valid 10-digit number',
        },
        { status: 400 }
      )
    }

    // Validate name length
    if (body.name.trim().length < 2) {
      return NextResponse.json<ContactResponse>(
        {
          success: false,
          error: 'Name must be at least 2 characters long.',
        },
        { status: 400 }
      )
    }

    // Validate message length
    if (body.message.trim().length < 10) {
      return NextResponse.json<ContactResponse>(
        {
          success: false,
          error: 'Message must be at least 10 characters long.',
        },
        { status: 400 }
      )
    }

    // Log customer data to server console
    console.log('=== Contact Form Submission ===')
    console.log('Timestamp:', new Date().toISOString())
    console.log('Name:', body.name)
    console.log('Email:', body.email)
    console.log('New lead phone:', body.phone)
    console.log('Preferred Destination:', body.preferredDestination || 'Not specified')
    console.log('Travel Dates:', body.travelDates || 'Not specified')
    console.log('Message:', body.message)
    console.log('================================')

    // In production, you would save this to a database here
    // Example: await saveContactSubmission(body)

    return NextResponse.json<ContactResponse>(
      {
        success: true,
        message: 'We received your inquiry! Our team will get back to you soon.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    
    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return NextResponse.json<ContactResponse>(
        {
          success: false,
          error: 'Invalid request format. Please try again.',
        },
        { status: 400 }
      )
    }

    return NextResponse.json<ContactResponse>(
      {
        success: false,
        error: 'An error occurred while processing your request. Please try again later.',
      },
      { status: 500 }
    )
  }
}
