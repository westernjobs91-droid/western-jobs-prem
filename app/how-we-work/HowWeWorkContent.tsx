'use client'

import { useState } from 'react'

export default function HowWeWorkContent() {
  const [showContactModal, setShowContactModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Paste your existing modal + form logic here
  // (the part that uses useState, handleSubmit, etc.)

  return (
    <>
      {/* Your existing page content goes here */}
      {/* Keep everything except the metadata export */}

      {/* Contact Modal */}
      {showContactModal && (
        // Your modal code here
      )}
    </>
  )
}