# Western Jobs Premium Website

A modern, premium recruitment website for Western Jobs built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features
- Beautiful premium design (Randstad-level quality)
- Fully responsive
- Animated counters and smooth interactions
- Working contact forms (ready for Resend integration)
- Job search modal
- Multi-page structure (Home, About, Services, Employers, Job Seekers, Contact)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Resend Email Setup (Same as your old site)

1. Install Resend:
```bash
npm install resend
```

2. Add your Resend API key to `.env.local`:
```
RESEND_API_KEY=re_xxxxxxxx
```

3. Create an API route at `app/api/contact/route.ts`:
```ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, email, message, type } = await request.json()

  await resend.emails.send({
    from: 'Western Jobs <noreply@westernjobs.ca>',
    to: 'hr@westernjobs.ca',
    subject: `New ${type} inquiry from ${name}`,
    html: `<p>${message}</p><p>From: ${email}</p>`
  })

  return Response.json({ success: true })
}
```

4. Update the contact forms to call this API route.

## Deployment

Push to GitHub and connect to Vercel. Everything is already configured for production.

---

**Note:** Replace placeholder images with your real photos and update the logo in `public/logo.png`.