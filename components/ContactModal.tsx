'use client'

import { useState } from 'react'
import { useModal } from '@/app/context/ModalContext'

export default function ContactModal() {
  const { isContactOpen, closeContact } = useModal()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        }),
      })

      if (response.ok) {
        alert("Thank you! We'll contact you within 24 hours.")
        closeContact()
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          message: '',
        })
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isContactOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center p-6"
      onClick={closeContact}
    >
      <div 
        className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="px-8 pt-8 pb-5">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-semibold text-3xl tracking-tight">Let's Talk</div>
              <div className="text-sm text-slate-500 mt-1">Tell us how we can help you</div>
            </div>
            <button 
              onClick={closeContact} 
              className="text-slate-400 hover:text-slate-600 text-3xl leading-none"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5">FIRST NAME</label>
                <input 
                  type="text" 
                  name="firstName" 
                  value={formData.firstName}
                  onChange={handleChange}
                  required 
                  className="w-full border border-slate-300 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#00C9A7]" 
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5">LAST NAME</label>
                <input 
                  type="text" 
                  name="lastName" 
                  value={formData.lastName}
                  onChange={handleChange}
                  required 
                  className="w-full border border-slate-300 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#00C9A7]" 
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1.5">EMAIL ADDRESS</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
                className="w-full border border-slate-300 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#00C9A7]" 
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1.5">COMPANY NAME (OPTIONAL)</label>
              <input 
                type="text" 
                name="company" 
                value={formData.company}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#00C9A7]" 
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1.5">HOW CAN WE HELP?</label>
              <textarea 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows={4} 
                required 
                className="w-full border border-slate-300 rounded-3xl px-4 py-3 text-sm focus:outline-none focus:border-[#00C9A7]" 
                placeholder="Tell us about your staffing needs or job search..."
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#0A2540] hover:bg-black transition-all text-white font-semibold py-[17px] rounded-3xl text-sm mt-2 disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Submit Request"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}