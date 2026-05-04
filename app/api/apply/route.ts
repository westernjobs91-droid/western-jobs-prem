import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const position = formData.get('position') as string
    const message = formData.get('message') as string
    const resume = formData.get('resume') as File

    // Convert file to base64 for email attachment
    const bytes = await resume.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const base64File = buffer.toString('base64')

    await resend.emails.send({
      from: 'Western Jobs <onboarding@resend.dev>',
      to: 'westernjobs91@gmail.com',
      reply_to: email,
      subject: `New Job Application from ${name}`,
      html: `
        <h2>New Job Application</h2>
        
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Position:</strong> ${position}</p>
        
        <h3>Message:</h3>
        <p>${message || 'No additional message'}</p>
        
        <hr>
        <p><em>Resume attached as PDF/DOC file.</em></p>
      `,
      attachments: [
        {
          filename: resume.name,
          content: base64File,
        },
      ],
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Apply API Error:', error)
    return NextResponse.json(
      { error: 'Failed to send application. Please try again.' },
      { status: 500 }
    )
  }
}