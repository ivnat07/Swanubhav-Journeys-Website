import { NextRequest, NextResponse } from 'next/server'
import { ContactRequest } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const body: ContactRequest = await request.json()

    // Basic validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // Log the request
    console.log('Contact form submission:', body)

    return NextResponse.json(
      { success: true, message: 'We received your inquiry' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { success: false, message: 'An error occurred' },
      { status: 500 }
    )
  }
}
