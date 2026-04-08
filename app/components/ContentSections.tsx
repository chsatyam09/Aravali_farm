'use client'

const ContentSections = () => {
  return (
    <>
      {/* Overview Section */}
      <section id="overview" style={{
        padding: '4rem 0',
        background: 'var(--color-card)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: 'var(--color-text)',
            marginBottom: '2rem',
            textAlign: 'center',
            letterSpacing: '0.05em'
          }}>
            About Our Luxury Farmhouse in Gurgaon
          </h2>
          <div style={{
            width: '6rem',
            height: '2px',
            background: 'var(--color-accent)',
            margin: '0 auto 3rem',
          }}></div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }} className="content-grid">
            <div>
              <h3 style={{ color: 'var(--color-text)', marginBottom: '1rem', fontSize: '1.5rem' }}>Best Farmhouse Near Gurgaon for Parties & Weekend Stays</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', fontSize: '1.1rem' }}>
                Nestled in the serene beauty of nature, Aravali Farm is the best farmhouse near Gurgaon offering the perfect escape from city life. 
                Our luxury farmhouse in Gurgaon combines modern amenities with rustic charm, creating an ideal venue for farmhouse for party in Gurgaon, 
                farmhouse for wedding in Gurgaon, and farmhouse near Delhi for weekend stay. Located in Delhi NCR, we provide farmhouse with pool in Gurgaon, 
                spacious lawns, and all amenities for memorable celebrations.
              </p>
            </div>
            <div>
              <h3 style={{ color: 'var(--color-text)', marginBottom: '1rem', fontSize: '1.5rem' }}>Private Farmhouse Near Delhi NCR</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', fontSize: '1.1rem' }}>
                We strive to provide exceptional hospitality in a natural setting, creating memorable experiences 
                for our guests. Our farmhouse for rent in Gurgaon is perfect for farmhouse for birthday party in Gurgaon, 
                farmhouse for corporate party in Gurgaon, and farmhouse for family get-together in Gurgaon. Every event is crafted with attention 
                to detail and personalized service, making us the top choice for affordable farmhouse in Delhi NCR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" style={{
        padding: '4rem 0',
        background: 'var(--color-cream-section)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: 'var(--color-text)',
            marginBottom: '2rem',
            textAlign: 'center',
            letterSpacing: '0.05em'
          }}>
            Amenities
          </h2>
          <div style={{
            width: '6rem',
            height: '2px',
            background: 'var(--color-accent)',
            margin: '0 auto 3rem',
          }}></div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }} className="amenities-grid">
            {[
              { title: 'Private Swimming Pool', icon: '🏊', description: 'Farmhouse with pool in Gurgaon - Large swimming pool perfect for pool parties and relaxation' },
              { title: 'Lush Green Garden', icon: '🌿', description: 'Beautiful 5000+ sq ft landscaped garden area for outdoor events and relaxation' },
              { title: 'Spacious Event Spaces', icon: '🎉', description: 'Multiple venues perfect for farmhouse for party in Gurgaon, weddings, and corporate events' },
              { title: 'Ample Parking', icon: '🚗', description: 'Free parking space for 6+ vehicles, ideal for farmhouse booking in Gurgaon' },
              { title: 'Professional Catering', icon: '🍽️', description: 'Catering services available for farmhouse for wedding in Gurgaon and celebrations' },
              { title: 'Premium Sound System', icon: '🎵', description: 'Farmhouse with music system - High-quality audio equipment for events until 4 AM' }
            ].map((amenity, index) => (
              <div key={index} style={{
                background: 'var(--color-card)',
                padding: '2rem',
                borderRadius: '8px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(45, 42, 38, 0.08)',
                transition: 'transform 0.3s ease',
                border: '1px solid var(--color-border)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{amenity.icon}</div>
                <h3 style={{ color: 'var(--color-text)', marginBottom: '0.5rem', fontSize: '1.25rem' }}>{amenity.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" style={{
        padding: '4rem 0',
        background: 'var(--color-card)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: 'var(--color-text)',
            marginBottom: '2rem',
            textAlign: 'center',
            letterSpacing: '0.05em'
          }}>
            Reviews
          </h2>
          <div style={{
            width: '6rem',
            height: '2px',
            background: 'var(--color-accent)',
            margin: '0 auto 3rem',
          }}></div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }} className="reviews-grid">
            {[
              {
                name: 'Priya Sharma',
                rating: 5,
                review: 'Amazing venue for our family function! The staff was incredibly helpful and the location is breathtaking.',
                event: 'Birthday Party'
              },
              {
                name: 'Rajesh Kumar',
                rating: 5,
                review: 'Perfect for our corporate retreat. Great facilities, peaceful environment, and excellent service.',
                event: 'Corporate Event'
              },
              {
                name: 'Anita Gupta',
                rating: 4,
                review: 'Beautiful farm house with all modern amenities. Our wedding celebration was memorable here.',
                event: 'Wedding Function'
              }
            ].map((review, index) => (
              <div key={index} style={{
                background: 'var(--color-cream-section)',
                padding: '2rem',
                borderRadius: '8px',
                border: '1px solid var(--color-border)'
              }}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.5rem'
                  }}>
                    <h4 style={{ color: 'var(--color-text)', fontSize: '1.1rem', margin: 0 }}>{review.name}</h4>
                    <div style={{ color: 'var(--color-accent)' }}>{'★'.repeat(review.rating)}</div>
                  </div>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0 }}>{review.event}</p>
                </div>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontStyle: 'italic' }}>
                  "{review.review}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" style={{
        padding: '4rem 0',
        background: 'var(--color-cream-section)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: 'var(--color-text)',
            marginBottom: '2rem',
            textAlign: 'center',
            letterSpacing: '0.05em'
          }}>
            Frequently Asked Questions
          </h2>
          <div style={{
            width: '6rem',
            height: '2px',
            background: 'var(--color-accent)',
            margin: '0 auto 3rem',
          }}></div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              {
                question: 'What is the capacity of the venue?',
                answer: 'Our venue can accommodate up to 200 guests for events, with flexible seating arrangements available.'
              },
              {
                question: 'Do you provide catering services?',
                answer: 'Yes, we have professional catering partners who can provide a variety of cuisines to suit your preferences.'
              },
              {
                question: 'Is parking available?',
                answer: 'Yes, we have ample parking space that can accommodate cars and buses for your guests.'
              },
              {
                question: 'Can we bring our own decorations?',
                answer: 'Absolutely! We encourage personalized decorations to make your event unique and memorable.'
              },
              {
                question: 'What are the booking terms?',
                answer: 'We require 50% advance payment to confirm booking, with the balance due before the event date.'
              }
            ].map((faq, index) => (
              <div key={index} style={{
                background: 'var(--color-card)',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(45, 42, 38, 0.08)',
                border: '1px solid var(--color-border)'
              }}>
                <h4 style={{ 
                  color: 'var(--color-text)', 
                  marginBottom: '1rem',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  {faq.question}
                </h4>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', margin: 0 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ContentSections