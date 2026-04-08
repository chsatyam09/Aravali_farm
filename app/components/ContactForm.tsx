'use client'

import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Prepare form data for web3forms
      const formDataToSend = new FormData()
      formDataToSend.append('access_key', '505625ac-de77-4afc-8da0-3ebf5c632d45')
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('eventType', formData.eventType)
      formDataToSend.append('eventDate', formData.eventDate)
      formDataToSend.append('guests', formData.guests)
      formDataToSend.append('message', formData.message || 'No additional message')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      })

      const data = await response.json()

      if (data.success) {
        console.log('Form submitted successfully:', data)
        alert('Thank you for your inquiry! We will contact you soon.')
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          guests: '',
          message: ''
        })
      } else {
        console.error('Form submission failed:', data)
        alert('Failed to send message. Please try again later.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An error occurred. Please try again later.')
    }
  }

  return (
    <section id="contact" style={{
      padding: '4rem 0',
      background: 'var(--color-card)',
      color: 'var(--color-text)'
    }}>
      <div style={{
        maxWidth: '1200px',
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
            letterSpacing: '0.05em'
          }}>
            Contact Us
          </h2>
          <div style={{
            width: '6rem',
            height: '2px',
            background: 'var(--color-accent)',
            margin: '0 auto 1rem',
          }}></div>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--color-text-muted)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Ready to book your event? Get in touch with us and let's make your celebration unforgettable.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start'
        }} className="contact-grid">
          {/* Contact Info */}
          <div>
            <h3 style={{
              fontSize: '1.1rem',
              marginBottom: '1.5rem',
              color: 'var(--color-text)',
              fontWeight: '600'
            }}>
              Get in Touch
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ fontSize: '1.5rem' }}>📞</div>
                <div>
                  <h4 style={{ margin: 0, marginBottom: '0.25rem', color: 'var(--color-text)' }}>Phone</h4>
                  <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>+91 98765 43210</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ fontSize: '1.5rem' }}>📧</div>
                <div>
                  <h4 style={{ margin: 0, marginBottom: '0.25rem', color: 'var(--color-text)' }}>Email</h4>
                  <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>info@aravalifarm.com</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ fontSize: '1.5rem' }}>📍</div>
                <div>
                  <h4 style={{ margin: 0, marginBottom: '0.25rem', color: 'var(--color-text)' }}>Location</h4>
                  <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>Aravali Hills, Gurgaon, Haryana</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ fontSize: '1.5rem' }}>🕒</div>
                <div>
                  <h4 style={{ margin: 0, marginBottom: '0.25rem', color: 'var(--color-text)' }}>Hours</h4>
                  <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            background: 'var(--color-cream)',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid var(--color-border)',
            boxShadow: '0 8px 16px rgba(45, 42, 38, 0.06)'
          }}>
            <form onSubmit={handleSubmit}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginBottom: '1rem'
              }} className="form-grid">
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--color-text-muted)',
                    fontSize: '0.9rem'
                  }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '6px',
                      border: '1px solid var(--color-border)',
                      background: 'var(--color-card)',
                      color: 'var(--color-text)',
                      fontSize: '1rem'
                    }}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--color-text-muted)',
                    fontSize: '0.9rem'
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '6px',
                      border: '1px solid var(--color-border)',
                      background: 'var(--color-card)',
                      color: 'var(--color-text)',
                      fontSize: '1rem'
                    }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginBottom: '1rem'
              }} className="form-grid">
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--color-text-muted)',
                    fontSize: '0.9rem'
                  }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '6px',
                      border: '1px solid var(--color-border)',
                      background: 'var(--color-card)',
                      color: 'var(--color-text)',
                      fontSize: '1rem'
                    }}
                    placeholder="Your Phone"
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--color-text-muted)',
                    fontSize: '0.9rem'
                  }}>
                    Event Type
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '6px',
                      border: '1px solid var(--color-border)',
                      background: 'var(--color-card)',
                      color: 'var(--color-text)',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="" style={{color: 'var(--color-text)'}}>Select Event Type</option>
                    <option value="birthday" style={{color: 'var(--color-text)'}}>Birthday Party</option>
                    <option value="corporate" style={{color: 'var(--color-text)'}}>Corporate Event</option>
                    <option value="wedding" style={{color: 'var(--color-text)'}}>Wedding Function</option>
                    <option value="bachelor" style={{color: 'var(--color-text)'}}>Bachelor Party</option>
                    <option value="family" style={{color: 'var(--color-text)'}}>Family Gathering</option>
                    <option value="other" style={{color: 'var(--color-text)'}}>Other</option>
                  </select>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginBottom: '1rem'
              }} className="form-grid">
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--color-text-muted)',
                    fontSize: '0.9rem'
                  }}>
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '6px',
                      border: '1px solid var(--color-border)',
                      background: 'var(--color-card)',
                      color: 'var(--color-text)',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--color-text-muted)',
                    fontSize: '0.9rem'
                  }}>
                    Expected Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '6px',
                      border: '1px solid var(--color-border)',
                      background: 'var(--color-card)',
                      color: 'var(--color-text)',
                      fontSize: '1rem',
                      cursor: 'pointer'
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

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'var(--color-text-muted)',
                  fontSize: '0.9rem'
                }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    border: '1px solid var(--color-border)',
                    background: 'var(--color-card)',
                    color: 'var(--color-text)',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                  placeholder="Tell us about your event..."
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  background: 'var(--color-accent)',
                  color: 'white',
                  padding: '1rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
                onMouseOver={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.background = 'var(--color-accent-hover)';
                  target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.background = 'var(--color-accent-hover)';
                  target.style.transform = 'translateY(0)';
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm