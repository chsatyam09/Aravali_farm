'use client'

import React, { useState } from 'react'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
// Success Modal Component
function SuccessModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const phoneNumbers = [
    { number: '+91 7903962473', whatsapp: '917903962473' },
    { number: '+91 9211255393', whatsapp: '919211255393' }
  ]

  // Auto-close after 10 seconds
  React.useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose()
      }, 10000)
      
      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '1rem'
    }} onClick={onClose}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '1.75rem 1.75rem 1.75rem 1.75rem',
        maxWidth: '500px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        animation: 'slideIn 0.3s ease',
        position: 'relative',
        margin: 'auto'
      }} onClick={(e) => e.stopPropagation()}>
        {/* Close Button Icon - Top Right */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            color: '#6b7280',
            transition: 'all 0.2s ease',
            zIndex: 10
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#f3f4f6'
            e.currentTarget.style.color = '#1f2937'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.color = '#6b7280'
          }}
          onTouchStart={(e) => {
            e.currentTarget.style.backgroundColor = '#f3f4f6'
            e.currentTarget.style.color = '#1f2937'
          }}
        >
          ✕
        </button>
        {/* Success Icon */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '1rem'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-sage) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            color: 'white'
          }}>
            ✓
          </div>
        </div>

        {/* Success Message */}
        <h2 style={{
          textAlign: 'center',
          fontSize: '1.5rem',
          fontWeight: '700',
          color: '#1a202c',
          marginBottom: '0.25rem'
        }}>
          Message Sent Successfully!
        </h2>
        <p style={{
          textAlign: 'center',
          color: '#4a5568',
          fontSize: '0.9rem',
          marginBottom: '1.25rem'
        }}>
          Thank you for contacting us! We'll get back to you soon.
        </p>

        {/* Mobile Numbers and WhatsApp Buttons */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          marginBottom: '1rem'
        }} className="phone-numbers-container">
          {phoneNumbers.map((phone, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem',
              background: '#f8fafc',
              borderRadius: '10px',
              border: '1px solid #e5e7eb'
            }} className="phone-number-item">
              <div style={{
                width: '35px',
                height: '35px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #25D366 0%, #20BA5A 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                flexShrink: 0
              }}>
                📱
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{
                  margin: 0,
                  fontSize: '0.875rem',
                  color: '#374151',
                  fontWeight: '600',
                  wordBreak: 'break-word'
                }}>
                  {phone.number}
                </p>
              </div>
              <a
                href={`https://wa.me/${phone.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #25D366 0%, #20BA5A 100%)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.3)'
                }}
                onTouchStart={(e) => {
                  e.currentTarget.style.transform = 'scale(0.95)'
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                <span style={{ marginRight: '0.4rem', fontSize: '0.95rem' }}>💬</span>
                WhatsApp
              </a>
            </div>
          ))}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            width: '100%',
            padding: '0.75rem 1.25rem',
            background: 'var(--color-accent)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '0.95rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.background = 'var(--color-accent-hover)'
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(166, 124, 91, 0.35)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.background = 'var(--color-accent)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Close
        </button>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @media (max-width: 768px) {
          div[style*="maxWidth: 500px"] {
            max-width: 90% !important;
            max-height: 85vh !important;
          }
          
          div[style*="padding: 1.75rem"] {
            padding: 1.25rem 1.25rem 1.25rem 1.25rem !important;
          }
          
          div[class*="phone-numbers-container"] {
            gap: 0.75rem !important;
          }
          
          div[class*="phone-number-item"] {
            padding: 0.875rem !important;
            gap: 0.75rem !important;
          }
          
          h2 {
            font-size: 1.5rem !important;
          }
          
          p {
            font-size: 0.9rem !important;
          }
          
          button {
            padding: 0.75rem 1rem !important;
            font-size: 0.95rem !important;
          }
          
          a {
            padding: 0.5rem 1rem !important;
            font-size: 0.85rem !important;
          }
          
          span {
            margin-right: 0.4rem !important;
            font-size: 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="maxWidth: 500px"] {
            max-width: 92% !important;
            max-height: 88vh !important;
          }
          
          div[style*="padding: 1.75rem"] {
            padding: 1rem 0.875rem 1rem 0.875rem !important;
          }
          
          div[class*="phone-number-item"] {
            flex-direction: column !important;
            align-items: stretch !important;
            padding: 1rem !important;
          }
          
          div[class*="phone-number-item"] > div:first-child {
            width: 35px !important;
            height: 35px !important;
            align-self: flex-start !important;
          }
          
          div[class*="phone-number-item"] > div:nth-child(2) {
            margin: 0.5rem 0 !important;
          }
          
          div[class*="phone-number-item"] > a {
            width: 100% !important;
            padding: 0.75rem 1rem !important;
            justify-content: center !important;
          }
          
          h2 {
            font-size: 1.25rem !important;
          }
          
          h2:first-of-type {
            padding-top: 2rem !important;
          }
          
          p {
            font-size: 0.85rem !important;
            line-height: 1.5 !important;
          }
          
          button {
            padding: 0.7rem 1rem !important;
            font-size: 0.9rem !important;
          }
          
          a {
            font-size: 0.8rem !important;
          }
        }
        
        @media (max-width: 360px) {
          div[style*="maxWidth: 500px"] {
            max-width: 95% !important;
            max-height: 90vh !important;
          }
          
          div[style*="padding: 1.75rem"] {
            padding: 0.875rem 0.75rem 0.875rem 0.75rem !important;
          }
          
          div {
            padding: 1rem !important;
          }
          
          button[style*="position: absolute"] {
            top: 0.5rem !important;
            right: 0.5rem !important;
            width: 28px !important;
            height: 28px !important;
            font-size: 1.3rem !important;
          }
          
          h2 {
            font-size: 1.1rem !important;
            padding-top: 1.5rem !important;
          }
          
          p {
            font-size: 0.8rem !important;
          }
          
          button {
            padding: 0.65rem 0.9rem !important;
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </div>
  )
}

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      border: '1px solid rgba(0, 0, 0, 0.05)',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
    }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      <div style={{
        width: '100%',
        padding: '1.5rem',
        background: isHovered 
          ? 'linear-gradient(135deg, #f5f5f5 0%, #eeeeee 100%)' 
          : 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        cursor: 'default'
      }}>
        <h3 style={{
          fontSize: '1.1rem',
                      color: '#000000',
          margin: 0,
          fontWeight: '600',
          textAlign: 'left',
          flex: 1
        }}>
          {question}
        </h3>
        <span style={{
          fontSize: '1.2rem',
                      color: '#000000',
          transition: 'transform 0.3s ease',
          transform: isHovered ? 'rotate(180deg)' : 'rotate(0deg)'
        }}>
          ▼
        </span>
      </div>
      <div style={{
        maxHeight: isHovered ? '200px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease, padding 0.3s ease',
        padding: isHovered ? '0 1.5rem 1.5rem' : '0 1.5rem 0',
        background: 'white',
        borderTop: isHovered ? '1px solid rgba(0, 0, 0, 0.05)' : 'none'
      }}>
        <p style={{
          margin: 0,
          color: '#4a4a4a',
          lineHeight: '1.6',
          fontSize: '1rem'
        }}>
          {answer}
        </p>
      </div>
    </div>
  )
}


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    numberOfGuests: '',
    checkInDate: '',
    checkOutDate: '',
    message: '',
  })
  const [bookingSearch, setBookingSearch] = useState({
    checkInDate: '',
    checkOutDate: '',
    numberOfPeople: '',
    phone: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    checkInDate: '',
    checkOutDate: '',
  })
  const [bookingErrors, setBookingErrors] = useState({
    checkInDate: '',
    checkOutDate: '',
    numberOfPeople: '',
    phone: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // Clear error when user starts typing
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const handleBookingSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBookingSearch({ ...bookingSearch, [e.target.name]: e.target.value })
    // Clear error when user starts typing
    if (bookingErrors[e.target.name as keyof typeof bookingErrors]) {
      setBookingErrors({ ...bookingErrors, [e.target.name]: '' })
    }
  }

  const handleBookingSearch = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newErrors = {
      checkInDate: '',
      checkOutDate: '',
      numberOfPeople: '',
      phone: '',
    }
    
    let hasErrors = false

    if (!bookingSearch.checkInDate) {
      newErrors.checkInDate = 'Check-in date is required'
      hasErrors = true
    }

    if (!bookingSearch.checkOutDate) {
      newErrors.checkOutDate = 'Check-out date is required'
      hasErrors = true
    } else if (bookingSearch.checkInDate && bookingSearch.checkOutDate) {
      const checkIn = new Date(bookingSearch.checkInDate)
      const checkOut = new Date(bookingSearch.checkOutDate)
      if (checkOut <= checkIn) {
        newErrors.checkOutDate = 'Check-out date must be after check-in date'
        hasErrors = true
      }
    }

    if (!bookingSearch.numberOfPeople) {
      newErrors.numberOfPeople = 'Number of people is required'
      hasErrors = true
    }

    if (!bookingSearch.phone.trim()) {
      newErrors.phone = 'Phone number is required'
      hasErrors = true
    } else if (!/^[0-9]{10}$/.test(bookingSearch.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Phone number must be exactly 10 digits'
      hasErrors = true
    }

    setBookingErrors(newErrors)
    
    if (!hasErrors) {
      // Here you can handle the booking search submission
      console.log('Booking search:', bookingSearch)
      // You can navigate to a booking page or show results
      alert('Search functionality will be implemented here!')
    }
  }

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      checkInDate: '',
      checkOutDate: '',
    }

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Validate phone (must be exactly 10 digits)
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Phone number must be exactly 10 digits'
    }

    // Validate check-in date
    if (!formData.checkInDate) {
      newErrors.checkInDate = 'Check-in date is required'
    }

    // Validate check-out date
    if (!formData.checkOutDate) {
      newErrors.checkOutDate = 'Check-out date is required'
    } else if (formData.checkInDate && formData.checkOutDate) {
      const checkIn = new Date(formData.checkInDate)
      const checkOut = new Date(formData.checkOutDate)
      if (checkOut <= checkIn) {
        newErrors.checkOutDate = 'Check-out date must be after check-in date'
      }
    }

    setErrors(newErrors)
    return Object.values(newErrors).every(error => error === '')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Prepare form data for web3forms
      const formDataToSend = new FormData()
      formDataToSend.append('access_key', '505625ac-de77-4afc-8da0-3ebf5c632d45')
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('numberOfGuests', formData.numberOfGuests)
      formDataToSend.append('checkInDate', formData.checkInDate)
      formDataToSend.append('checkOutDate', formData.checkOutDate)
      formDataToSend.append('message', formData.message || 'No additional message')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      })

      const data = await response.json()

      if (data.success) {
        console.log('Form submitted successfully:', data)
        setSubmitStatus('success')
        setShowSuccessModal(true)
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          numberOfGuests: '', 
          checkInDate: '', 
          checkOutDate: '', 
          message: '' 
        })
        setErrors({
          name: '',
          email: '',
          phone: '',
          checkInDate: '',
          checkOutDate: '',
        })
      } else {
        console.error('Form submission failed:', data)
        setSubmitStatus('error')
        alert('Failed to send message. Please try again later.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      alert('An error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="contact-hero-section" style={{
        padding: 'clamp(3rem, 8vw, 6rem) 0',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--color-sage-dark)',
        background: 'linear-gradient(135deg, var(--color-sage-dark) 0%, var(--color-sage) 100%)',
        minHeight: 'clamp(250px, 35vh, 350px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="contact-hero-container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: 'clamp(1rem, 3vw, 2rem)',
          position: 'relative',
          zIndex: 2,
          width: '100%',
          textAlign: 'center'
        }}>
          {/* Main Title */}
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: '#ffffff',
            margin: '0 0 1rem 0',
            fontWeight: '700',
            letterSpacing: '0.02em',
            lineHeight: '1.2'
          }}>
            Book your next stay
          </h1>
          
          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: '#ffffff',
            margin: '0',
            fontWeight: '400',
            opacity: '0.95',
            lineHeight: '1.5',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            
          </p>
        </div>
      </section>

      {/* Success Modal */}
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />

      {/* Booking Search Section */}
      <section style={{
        padding: '0',
        position: 'relative',
        marginTop: '-80px',
        marginBottom: '4rem',
        zIndex: 10
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <form onSubmit={handleBookingSearch} style={{
            background: 'var(--color-card)',
            borderRadius: '12px',
            border: '3px solid var(--color-accent)',
            boxShadow: '0 20px 60px rgba(45, 42, 38, 0.12)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            gap: '0',
            position: 'relative',
            zIndex: 10,
            maxWidth: '100%'
          }} className="booking-search-form">
            {/* Check-in Date Field */}
            <div style={{
              flex: '1',
              padding: '0.75rem 1rem',
              borderRight: '1px solid #e5e7eb',
              background: '#ffffff',
              position: 'relative',
              minWidth: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <label style={{
                fontSize: '0.8125rem',
                color: '#374151',
                marginBottom: '0.25rem',
                fontWeight: '500',
                display: 'block'
              }}>
                Check-in Date *
              </label>
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                width: '100%'
              }}>
                {!bookingSearch.checkInDate && (
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '0.95rem',
                    color: '#9ca3af',
                    pointerEvents: 'none',
                    zIndex: 0
                  }}>
                    dd/mm/yyyy
                  </span>
                )}
                <input
                  type="date"
                  name="checkInDate"
                  value={bookingSearch.checkInDate}
                  onChange={handleBookingSearchChange}
                  min={new Date().toISOString().split('T')[0]}
                  style={{
                    width: '100%',
                    border: 'none',
                    outline: 'none',
                    background: 'transparent',
                    fontSize: '0.95rem',
                    color: '#111827',
                    padding: '0.35rem 0.5rem 0.35rem 0',
                    fontFamily: 'inherit',
                    cursor: 'pointer',
                    flex: 1,
                    position: 'relative',
                    zIndex: 1,
                    opacity: bookingSearch.checkInDate ? 1 : 0
                  }}
                />
                <span style={{
                  fontSize: '1.25rem',
                  color: '#6b7280',
                  marginLeft: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  flexShrink: 0,
                  pointerEvents: 'none',
                  position: 'relative',
                  zIndex: 2
                }}>📅</span>
              </div>
              {bookingErrors.checkInDate && (
                <div style={{
                  color: '#ef4444',
                  fontSize: '0.75rem',
                  marginTop: '0.25rem'
                }}>{bookingErrors.checkInDate}</div>
              )}
            </div>

            {/* Check-out Date Field */}
            <div style={{
              flex: '1',
              padding: '0.75rem 1rem',
              borderRight: '1px solid #e5e7eb',
              background: '#ffffff',
              position: 'relative',
              minWidth: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <label style={{
                fontSize: '0.8125rem',
                color: '#374151',
                marginBottom: '0.25rem',
                fontWeight: '500',
                display: 'block'
              }}>
                Check-out Date *
              </label>
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                width: '100%'
              }}>
                {!bookingSearch.checkOutDate && (
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '0.95rem',
                    color: '#9ca3af',
                    pointerEvents: 'none',
                    zIndex: 0
                  }}>
                    dd/mm/yyyy
                  </span>
                )}
                <input
                  type="date"
                  name="checkOutDate"
                  value={bookingSearch.checkOutDate}
                  onChange={handleBookingSearchChange}
                  min={bookingSearch.checkInDate || new Date().toISOString().split('T')[0]}
                  style={{
                    width: '100%',
                    border: 'none',
                    outline: 'none',
                    background: 'transparent',
                    fontSize: '0.95rem',
                    color: '#111827',
                    padding: '0.35rem 0.5rem 0.35rem 0',
                    fontFamily: 'inherit',
                    cursor: 'pointer',
                    flex: 1,
                    position: 'relative',
                    zIndex: 1,
                    opacity: bookingSearch.checkOutDate ? 1 : 0
                  }}
                />
                <span style={{
                  fontSize: '1.25rem',
                  color: '#6b7280',
                  marginLeft: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  flexShrink: 0,
                  pointerEvents: 'none',
                  position: 'relative',
                  zIndex: 2
                }}>📅</span>
              </div>
              {bookingErrors.checkOutDate && (
                <div style={{
                  color: '#ef4444',
                  fontSize: '0.75rem',
                  marginTop: '0.25rem'
                }}>{bookingErrors.checkOutDate}</div>
              )}
            </div>

            {/* Number of Guests Field */}
            <div style={{
              flex: '1',
              padding: '0.75rem 1rem',
              borderRight: '1px solid #e5e7eb',
              background: '#ffffff',
              position: 'relative',
              minWidth: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <label style={{
                fontSize: '0.8125rem',
                color: '#374151',
                marginBottom: '0.25rem',
                fontWeight: '500',
                display: 'block'
              }}>
                Number of Guests
              </label>
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                width: '100%'
              }}>
                <select
                  name="numberOfPeople"
                  value={bookingSearch.numberOfPeople}
                  onChange={handleBookingSearchChange}
                  style={{
                    width: '100%',
                    border: 'none',
                    outline: 'none',
                    background: 'transparent',
                    fontSize: '0.95rem',
                    color: bookingSearch.numberOfPeople ? '#111827' : '#9ca3af',
                    padding: '0.35rem 2rem 0.35rem 0',
                    fontFamily: 'inherit',
                    appearance: 'none',
                    cursor: 'pointer',
                    flex: 1
                  }}
                >
                  <option value="" disabled style={{ color: '#9ca3af' }}>Select guests</option>
                  <option value="1-5">1-5</option>
                  <option value="6-8">6-8</option>
                  <option value="9-12">9-12</option>
                  <option value="13-17">13-17</option>
                  <option value="18-25">18-25</option>
                  <option value="25-30">25-30</option>
                  <option value="30+">30+</option>
                  <option value="50+">50+</option>
                  <option value="100+">100+</option>
                </select>
                <span style={{
                  position: 'absolute',
                  right: '0.5rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                  color: '#6b7280',
                  fontSize: '0.875rem'
                }}>▼</span>
              </div>
              {bookingErrors.numberOfPeople && (
                <div style={{
                  color: '#ef4444',
                  fontSize: '0.75rem',
                  marginTop: '0.25rem'
                }}>{bookingErrors.numberOfPeople}</div>
              )}
            </div>

            {/* Phone Number Field */}
            <div style={{
              flex: '1',
              padding: '0.75rem 1rem',
              borderRight: '1px solid #e5e7eb',
              background: '#ffffff',
              position: 'relative',
              minWidth: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <label style={{
                fontSize: '0.8125rem',
                color: '#374151',
                marginBottom: '0.25rem',
                fontWeight: '500',
                display: 'block'
              }}>
                Phone Number
              </label>
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                width: '100%'
              }}>
                <input
                  type="tel"
                  name="phone"
                  value={bookingSearch.phone}
                  onChange={handleBookingSearchChange}
                  maxLength={10}
                  placeholder="Enter phone number"
                  style={{
                    width: '100%',
                    border: 'none',
                    outline: 'none',
                    background: 'transparent',
                    fontSize: '0.95rem',
                    color: '#111827',
                    padding: '0.35rem 0',
                    fontFamily: 'inherit',
                    flex: 1
                  }}
                />
              </div>
              {bookingErrors.phone && (
                <div style={{
                  color: '#ef4444',
                  fontSize: '0.75rem',
                  marginTop: '0.25rem'
                }}>{bookingErrors.phone}</div>
              )}
            </div>

            {/* Search Button */}
            <div style={{
              display: 'flex',
              alignItems: 'stretch',
              background: 'var(--color-card)'
            }}>
              <button
                type="submit"
                style={{
                  padding: '0.75rem 3.25rem',
                  minWidth: '120px',
                  background: 'var(--color-accent)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '0',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  fontFamily: 'inherit',
                  alignSelf: 'stretch',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'var(--color-accent-hover)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'var(--color-accent)'
                }}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{
        padding: '4rem 0',
        background: 'var(--color-cream-section)'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: 'var(--color-text)',
              marginBottom: '1rem',
              fontWeight: '700'
            }}>
              Send us a Message 
            </h2>
            <div style={{
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, var(--color-accent) 0%, var(--color-sage) 100%)',
              borderRadius: '2px',
              margin: '0 auto 1.5rem'
            }}></div>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--color-text-muted)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Have questions or want to book your stay ? Fill out the form below and we'll get back to you within 2-4 hours.
            </p>
          </div>

          <div style={{
            background: 'var(--color-card)',
            borderRadius: '16px',
            padding: '3rem',
            boxShadow: '0 10px 30px rgba(45, 42, 38, 0.08)',
            border: '1px solid var(--color-border)'
          }}>
            {submitStatus === 'success' && (
              <div style={{
                background: '#d4edda',
                color: '#155724',
                padding: '1rem 1.5rem',
                borderRadius: '8px',
                marginBottom: '2rem',
                border: '1px solid #c3e6cb'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    background: '#28a745',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>✓</div>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem', fontWeight: '600' }}>Message Sent Successfully!</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem' }}>Thank you! We'll get back to you soon.</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>Full Name *</label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: errors.name ? '2px solid #ef4444' : '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      background: '#ffffff'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--color-accent)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(166, 124, 91, 0.2)';
                    }}
                    onBlur={(e) => {
                      if (errors.name) {
                        e.target.style.borderColor = '#ef4444';
                        e.target.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
                      } else {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                      }
                    }}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <div style={{
                      color: '#ef4444',
                      fontSize: '0.875rem',
                      marginTop: '0.5rem'
                    }}>{errors.name}</div>
                  )}
                </div>
                
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>Phone Number *</label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: errors.phone ? '2px solid #ef4444' : '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      background: '#ffffff'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--color-accent)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(166, 124, 91, 0.2)';
                    }}
                    onBlur={(e) => {
                      if (errors.phone) {
                        e.target.style.borderColor = '#ef4444';
                        e.target.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
                      } else {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                      }
                    }}
                    placeholder="Enter 10-digit phone number"
                  />
                  {errors.phone && (
                    <div style={{
                      color: '#ef4444',
                      fontSize: '0.875rem',
                      marginTop: '0.5rem'
                    }}>{errors.phone}</div>
                  )}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: errors.email ? '2px solid #ef4444' : '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      background: '#ffffff'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--color-accent)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(166, 124, 91, 0.2)';
                    }}
                    onBlur={(e) => {
                      if (errors.email) {
                        e.target.style.borderColor = '#ef4444';
                        e.target.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
                      } else {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                      }
                    }}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <div style={{
                      color: '#ef4444',
                      fontSize: '0.875rem',
                      marginTop: '0.5rem'
                    }}>{errors.email}</div>
                  )}
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>Number of Guests</label>
                  <select
                    name="numberOfGuests"
                    value={formData.numberOfGuests}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      background: '#ffffff',
                      cursor: 'pointer'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--color-accent)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(166, 124, 91, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">Select guests</option>
                    <option value="1-5">1-5</option>
                    <option value="6-8">6-8</option>
                    <option value="9-12">9-12</option>
                    <option value="13-17">13-17</option>
                    <option value="18-25">18-25</option>
                    <option value="25-30">25-30</option>
                    <option value="30+">30+</option>
                    <option value="50+">50+</option>
                    <option value="100+">100+</option>
                  </select>
                </div>
              </div>

              {/* Date Fields */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>Check-in Date *</label>
                  <input
                    name="checkInDate"
                    type="date"
                    value={formData.checkInDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: errors.checkInDate ? '2px solid #ef4444' : '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      background: '#ffffff'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--color-accent)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(166, 124, 91, 0.2)';
                    }}
                    onBlur={(e) => {
                      if (errors.checkInDate) {
                        e.target.style.borderColor = '#ef4444';
                        e.target.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
                      } else {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                      }
                    }}
                  />
                  {errors.checkInDate && (
                    <div style={{
                      color: '#ef4444',
                      fontSize: '0.875rem',
                      marginTop: '0.5rem'
                    }}>{errors.checkInDate}</div>
                  )}
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>Check-out Date *</label>
                  <input
                    name="checkOutDate"
                    type="date"
                    value={formData.checkOutDate}
                    onChange={handleChange}
                    min={formData.checkInDate}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: errors.checkOutDate ? '2px solid #ef4444' : '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      background: '#ffffff'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--color-accent)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(166, 124, 91, 0.2)';
                    }}
                    onBlur={(e) => {
                      if (errors.checkOutDate) {
                        e.target.style.borderColor = '#ef4444';
                        e.target.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
                      } else {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                      }
                    }}
                  />
                  {errors.checkOutDate && (
                    <div style={{
                      color: '#ef4444',
                      fontSize: '0.875rem',
                      marginTop: '0.5rem'
                    }}>{errors.checkOutDate}</div>
                  )}
                </div>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>Message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    resize: 'vertical',
                    background: '#ffffff',
                    lineHeight: '1.5'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--color-accent)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(166, 124, 91, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Tell us about your requirements, number of guests, or any special requests (optional)..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: isSubmitting 
                    ? 'var(--color-border)' 
                    : 'var(--color-accent)',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: isSubmitting 
                    ? '0 4px 15px rgba(92, 107, 90, 0.2)' 
                    : '0 4px 15px rgba(166, 124, 91, 0.35)',
                  border: 'none',
                  alignSelf: 'center',
                  minWidth: '200px'
                }}
                onMouseOver={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.background = 'var(--color-accent-hover)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(166, 124, 91, 0.4)';
                  }
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = isSubmitting ? 'var(--color-border)' : 'var(--color-accent)';
                  e.currentTarget.style.boxShadow = isSubmitting 
                    ? '0 4px 15px rgba(92, 107, 90, 0.2)' 
                    : '0 4px 15px rgba(166, 124, 91, 0.35)';
                }}
              >
                {isSubmitting ? (
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                    <span style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderTop: '2px solid #fff',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></span>
                    Sending Message...
                  </span>
                ) : (
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.1rem' }}>📧</span>
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section style={{
        padding: '4rem 0',
        background: '#ffffff'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#000000',
            textAlign: 'center',
            marginBottom: '1rem',
            fontWeight: '700'
          }}>
            Frequently Asked Questions
          </h2>
          <div style={{
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, #000000 0%, #666666 100%)',
            borderRadius: '2px',
            margin: '0 auto 3rem'
          }}></div>
          
          <div style={{
            display: 'grid',
            gap: '1rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              {
                question: "What are the check-in and check-out times?",
                answer: "Check-in time is 1:00 PM and check-out time is 10:00 AM. Early check-in or late check-out may be available if there is no prior-day booking, with no additional charges."
              },
              {
  question: "Are there any restrictions at the property, such as loud music at night ?",
  answer: "No, there are no restrictions at our property. You can play loud music until 4 AM."
},
                 {
                question: "Is the property pet-friendly?",
                answer: "Yes, we welcome well-behaved pets at our farmhouse. Please inform us in advance."
              },
                            {
                question: "Is there parking available?",
                answer: "Yes, we provide free parking space for up to 6 vehicles inside the FarmHouse. Additional parking arrangements can be made upon request for larger groups."
              },
                 {
                question: "Is WiFi available throughout the property?",
                answer: "Yes, we provide complimentary WiFi throughout the farmhouse. The connection is reliable and suitable for both leisure and business needs."
              },
              {
                question: "What is the maximum number of guests allowed?",
                answer: "Our farmhouse has a sleeping capacity of up to 15 guests Comfortably. We provide all essentials, including blankets, bed sheets, and pillows. However, 40–50 guests can still enjoy their time at the farmhouse. Please contact us to discuss special arrangements and availability.."
              },
                     {
                question: "What amenities are included in the farmhouse?",
                answer: "Our farmhouse includes a swimming pool, bonfire, barbecue, fully equipped kitchen, air-conditioned rooms, Wi-Fi, parking, outdoor seating areas, and access to a beautiful garden. All basic amenities are provided for your comfort.."
              },
              {
                question: "Do you provide catering services?",
                answer: "We can arrange catering services for your events and celebrations. Please discuss your requirements with us in advance, and we'll help you plan the perfect menu."
              },
              {
                question: "What activities are available nearby?",
                answer: "The area offers various activities including nature walks, local sightseeing, adventure sports, and cultural experiences. We can help you plan activities based on your interests."
              },
          
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Cancellation Policy Section */}
      <section style={{
        padding: '4rem 0',
        background: '#f8fafc'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#000000',
            textAlign: 'center',
            marginBottom: '3rem',
            fontWeight: '700'
          }}>
            Cancellation Policy
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {/* Free Cancellation Card */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.12)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                color: '#000000',
                marginBottom: '1rem',
                fontWeight: '600',
                margin: '0 0 1rem 0'
              }}>
                Free Cancellation
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#4a4a4a',
                lineHeight: '1.5',
                margin: 0
              }}>
                Cancel up to 7 days before check-in for a full refund
              </p>
            </div>

            {/* Partial Refund Card */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.12)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                color: '#000000',
                marginBottom: '1rem',
                fontWeight: '600',
                margin: '0 0 1rem 0'
              }}>
                Partial Refund
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#4a4a4a',
                lineHeight: '1.5',
                margin: 0
              }}>
                50% refund for cancellations 3-7 days before check-in
              </p>
            </div>

            {/* No Refund Card */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.12)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                color: '#000000',
                marginBottom: '1rem',
                fontWeight: '600',
                margin: '0 0 1rem 0'
              }}>
                No Token Refund
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#4a4a4a',
                lineHeight: '1.5',
                margin: 0
              }}>
                The token amount is non-refundable, but you can check in on another day completely free of charge.
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'white',
            borderRadius: '12px',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            maxWidth: '700px',
            margin: '2rem auto 0'
          }}>
            <h3 style={{
              fontSize: '1.1rem',
              color: '#000000',
              marginBottom: '0.75rem',
              fontWeight: '600',
              textAlign: 'center'
            }}>
              Important Notes
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#666',
              lineHeight: '1.6',
              margin: 0,
              textAlign: 'center'
            }}>
              After receiving the token amount, we always share an official booking confirmation with all the details through our official email ID: aravalifarm21@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{
        padding: '4rem 0',
        background: '#ffffff'
      }}>
        <div style={{
          padding: '0 2rem',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#000000',
            textAlign: 'center',
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Find Us Here
          </h2>
          <div style={{
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, #000000 0%, #666666 100%)',
            borderRadius: '2px',
            margin: '0 auto 3rem'
          }}></div>
          <div 
            className="maps-container"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem',
              width: '100%'
            }}>
            {/* Aravali Farm Gurgaon */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <h3 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: '#000000',
                textAlign: 'center',
                fontWeight: '600',
                margin: 0
              }}>
                Aravali Farm Gurgaon
              </h3>
              <div 
                className="map-wrapper"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  height: '530px',
                  border: '2px solid rgba(0, 0, 0, 0.05)',
                  width: '100%'
                }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4446.41228342973!2d76.92335707633261!3d28.291821375852507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3bd8d81db18d%3A0x289dc2edc4500c5f!2sAravali%20Farm!5e1!3m2!1sen!2sin!4v1760944508029!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Aravali Farm Noida */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <h3 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: '#000000',
                textAlign: 'center',
                fontWeight: '600',
                margin: 0
              }}>
                Aravali Farm Noida
              </h3>
              <div 
                className="map-wrapper"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  height: '530px',
                  border: '2px solid rgba(0, 0, 0, 0.05)',
                  width: '100%'
                }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.9369393994575!2d77.37895689999999!3d28.481445700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce909b005f63b%3A0x19d28b6b87a3e525!2sAravali%20Farm%20Noida!5e0!3m2!1sen!2sin!4v1768080435913!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      {/* Simplified Animations and Responsive Design */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        /* Prevent horizontal overflow */
        * {
          box-sizing: border-box;
        }
        
        body {
          overflow-x: hidden;
        }

        /* Booking search form styling */
        .booking-search-form input[type="date"] {
          position: relative;
        }

        .booking-search-form input[type="date"]::-webkit-calendar-picker-indicator {
          opacity: 0;
          position: absolute;
          right: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
          z-index: 1;
        }

        .booking-search-form input[type="date"]::-webkit-inner-spin-button,
        .booking-search-form input[type="date"]::-webkit-clear-button {
          display: none;
        }

        .booking-search-form input[type="date"]:not([value]):before {
          content: attr(placeholder);
          position: absolute;
          color: #9ca3af;
          pointer-events: none;
        }

        .booking-search-form input[type="tel"]::placeholder {
          color: #9ca3af;
          opacity: 1;
        }

        .booking-search-form input[type="tel"]::-webkit-input-placeholder {
          color: #9ca3af;
        }

        .booking-search-form input[type="tel"]:-ms-input-placeholder {
          color: #9ca3af;
        }

        .booking-search-form input[type="tel"]::-moz-placeholder {
          color: #9ca3af;
          opacity: 1;
        }

        .booking-search-form select {
          cursor: pointer;
        }

        .booking-search-form select:focus {
          outline: none;
        }

        .booking-search-form input:focus {
          outline: none;
        }
        
        /* Tablet and Small Laptop */
        @media (max-width: 1024px) {
          .contact-hero-section {
            padding: clamp(2.5rem, 6vw, 5rem) 0 !important;
            min-height: clamp(220px, 30vh, 300px) !important;
          }
          
          .contact-hero-container {
            padding: clamp(0.75rem, 2vw, 1.5rem) !important;
          }
        }
        
        @media (max-width: 768px) {
          .contact-hero-section {
            padding: clamp(2rem, 5vw, 4rem) 0 !important;
            min-height: clamp(200px, 28vh, 280px) !important;
          }
          
          .contact-hero-container {
            padding: clamp(0.5rem, 2vw, 1rem) !important;
          }

          .booking-search-form {
            flex-direction: column !important;
            margin-top: -40px !important;
            border-radius: 12px !important;
          }

          .booking-search-form > div {
            border-right: none !important;
            border-bottom: 1px solid #e5e7eb !important;
            min-width: 100% !important;
          }

          .booking-search-form > div:last-of-type {
            border-bottom: none !important;
          }

          .booking-search-form > div:last-of-type button {
            width: 100% !important;
            border-radius: 0 0 9px 9px !important;
            padding: 1.25rem 2rem !important;
          }

          .booking-search-form label {
            font-size: 0.8rem !important;
          }

          .booking-search-form input,
          .booking-search-form select {
            font-size: 0.9rem !important;
          }
          
          .maps-container {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .map-wrapper {
            height: 400px !important;
          }
          
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          div[style*="height: 280px"] {
            height: 200px !important;
          }
          
          div[style*="height: 250px"] {
            height: 180px !important;
          }
          
          div[style*="height: 600px"] {
            height: 400px !important;
          }
          
          div[style*="borderRadius: 25px 60px 25px 60px"] {
            border-radius: 15px 40px 15px 40px !important;
            transform: rotate(0deg) !important;
            padding: 12px !important;
          }
          
          div[style*="borderRadius: 15px 40px 15px 40px"] {
            border-radius: 10px 30px 10px 30px !important;
          }
          
          div[style*="maxWidth: 400px"] {
            max-width: 300px !important;
          }
          
          div[style*="maxWidth: 350px"] {
            max-width: 280px !important;
          }
          
          h1[style*="fontSize: clamp(2rem, 4vw, 3rem)"] {
            font-size: clamp(1.5rem, 3vw, 2.5rem) !important;
          }
          
          h2[style*="fontSize: clamp(2rem, 5vw, 3rem)"] {
            font-size: clamp(1.5rem, 4vw, 2.5rem) !important;
          }
          
          div[style*="padding: 2rem 0"] {
            padding: 1.5rem 0 !important;
          }
          
          div[style*="padding: 3rem"] {
            padding: 2rem !important;
          }
          
          div[style*="padding: 2rem"] {
            padding: 1.5rem !important;
          }
          
          div[style*="maxWidth: 1000px"] {
            max-width: 100% !important;
            padding: 0 0.5rem !important;
          }
          
          div[style*="maxWidth: 900px"] {
            max-width: 100% !important;
            padding: 0 0.5rem !important;
          }
          
          div[style*="maxWidth: 800px"] {
            max-width: 100% !important;
            padding: 0 0.5rem !important;
          }
          
          div[style*="padding: 0 2rem"] {
            padding: 0 1rem !important;
          }
          
          h3[style*="fontSize: 1.2rem"] {
            font-size: 1.1rem !important;
          }
          
          h3[style*="fontSize: 1.1rem"] {
            font-size: 1rem !important;
          }
          
          /* Floating elements mobile adjustments */
          div[style*="width: 40px"] {
            width: 35px !important;
            height: 35px !important;
            font-size: 1rem !important;
          }
          
          div[style*="gap: 0.75rem"] {
            gap: 0.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .contact-hero-section {
            padding: clamp(1.5rem, 4vw, 3rem) 0 !important;
            min-height: clamp(180px, 25vh, 250px) !important;
          }
          
          .contact-hero-container {
            padding: clamp(0.5rem, 2vw, 1rem) !important;
          }
          
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          div[style*="height: 280px"] {
            height: 150px !important;
          }
          
          div[style*="height: 250px"] {
            height: 130px !important;
          }
          
          div[style*="height: 200px"] {
            height: 120px !important;
          }
          
          div[style*="height: 180px"] {
            height: 100px !important;
          }
          
          div[style*="height: 600px"] {
            height: 300px !important;
          }
          
          div[style*="height: 400px"] {
            height: 250px !important;
          }
          
          div[style*="borderRadius: 30px 70px 30px 70px"] {
            border-radius: 15px 35px 15px 35px !important;
            transform: rotate(0deg) !important;
            padding: 12px !important;
          }
          
          div[style*="borderRadius: 20px 50px 20px 50px"] {
            border-radius: 10px 25px 10px 25px !important;
          }
          
          div[style*="padding: 2rem 0"] {
            padding: 1rem 0 !important;
          }
          
          div[style*="padding: 3rem 0"] {
            padding: 2rem 0 !important;
          }
          
          div[style*="padding: 2rem"] {
            padding: 1rem !important;
          }
          
          div[style*="padding: 1.5rem"] {
            padding: 1rem !important;
          }
          
          div[style*="padding: 0 2rem"] {
            padding: 0 0.75rem !important;
          }
          
          h1[style*="fontSize: clamp(2.5rem, 5vw, 4rem)"] {
            font-size: clamp(1.5rem, 3vw, 2.5rem) !important;
          }
          
          h2[style*="fontSize: clamp(2rem, 5vw, 3rem)"] {
            font-size: clamp(1.25rem, 3vw, 2rem) !important;
          }
          
          p[style*="fontSize: 1.1rem"] {
            font-size: 1rem !important;
          }
          
          p[style*="fontSize: 0.95rem"] {
            font-size: 0.9rem !important;
          }
          
          h4[style*="fontSize: 1rem"] {
            font-size: 0.9rem !important;
          }
          
          /* Fix card layout for mobile */
          div[style*="display: flex"] {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          
          div[style*="marginBottom: 1.5rem"] {
            margin-bottom: 1rem !important;
          }
          
          div[style*="width: 50px"] {
            width: 45px !important;
            height: 45px !important;
          }
          
          div[style*="marginRight: 1rem"] {
            margin-right: 0 !important;
            margin-bottom: 0.75rem !important;
          }
          
          /* Floating elements mobile */
          div[style*="width: 40px"] {
            width: 30px !important;
            height: 30px !important;
            font-size: 0.9rem !important;
          }
          
          div[style*="gap: 0.75rem"] {
            gap: 0.4rem !important;
          }
          
          div[style*="bottom: 20px"] {
            bottom: 15px !important;
          }
          
          div[style*="left: 20px"] {
            left: 15px !important;
          }
          
          div[style*="top: 15px"] {
            top: 12px !important;
          }
          
          div[style*="right: 15px"] {
            right: 12px !important;
          }
        }
        
        @media (max-width: 360px) {
          .contact-hero-section {
            padding: clamp(1.25rem, 3vw, 2.5rem) 0 !important;
            min-height: clamp(160px, 22vh, 220px) !important;
          }
          
          .contact-hero-container {
            padding: 0.5rem !important;
          }
          
          div[style*="gridTemplateColumns: repeat(auto-fit, minmax(280px, 1fr))"] {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            padding: 0 0.5rem !important;
            max-width: 100% !important;
            width: 100% !important;
          }
          
          div[style*="padding: 3rem"] {
            padding: 1rem !important;
          }
          
          div[style*="padding: 2rem"] {
            padding: 1rem !important;
          }
          
          div[style*="padding: 1.5rem"] {
            padding: 0.75rem !important;
          }
          
          div[style*="padding: 0 2rem"] {
            padding: 0 0.5rem !important;
          }
          
          h1[style*="fontSize: clamp(2rem, 5vw, 3rem)"] {
            font-size: clamp(1.25rem, 3vw, 2rem) !important;
          }
          
          h2[style*="fontSize: clamp(2rem, 5vw, 3rem)"] {
            font-size: clamp(1.25rem, 3vw, 2rem) !important;
          }
          
          /* Extra small mobile fixes */
          div[style*="display: flex"] {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          
          div[style*="width: 50px"] {
            width: 40px !important;
            height: 40px !important;
          }
          
          div[style*="marginRight: 1rem"] {
            margin-right: 0 !important;
            margin-bottom: 0.5rem !important;
          }
          
          div[style*="marginBottom: 1.5rem"] {
            margin-bottom: 0.75rem !important;
          }
        }
      `}</style>
    </div>
  )
}
