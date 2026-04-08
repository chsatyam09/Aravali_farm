'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'

export default function PartyPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <Navigation />
      
      {/* Hero Section */}
      <section style={{
        padding: '6rem 2rem 4rem',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Image Background */}
        <img 
          src="/Images/Aravali Farm Images/Pool-1.png"
          alt="Farmhouse for Party in Gurgaon with Private Pool - Premium Party Venue"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        />
        {/* Dark overlay for better text visibility */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }}></div>

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          padding: '0 1rem'
        }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '700',
            marginBottom: '1rem',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
          }}>
            Farmhouse for Party in Gurgaon | Luxury Venue with Private Pool & Party Setup
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: 0.95,
            textShadow: '0 1px 5px rgba(0, 0, 0, 0.3)'
          }}>
            Book the best farmhouse for party in Gurgaon. Perfect for birthday parties, weddings, corporate events, and weekend getaways. Private pool, spacious lawns, and premium amenities in Delhi NCR.
          </p>
        </div>
      </section>

      {/* Why Choose Aravali Farm Section */}
      <section style={{
        padding: '4rem 1rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#1a202c'
          }}>
            Why Choose Our Farmhouse for Party in Gurgaon?
          </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 1.5rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem'
            }}>
              🎉
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#1a202c'
            }}>
              Spacious Venue
            </h3>
            <p style={{
              color: '#4a5568',
              lineHeight: '1.7',
              fontSize: '1rem'
            }}>
              Our farmhouse for party in Gurgaon can accommodate up to 50 guests with a beautiful 5000+ sq ft lawn area perfect for birthday parties, weddings, and family celebrations. Ideal for farmhouse for rent in Gurgaon.
            </p>
          </div>

          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 1.5rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem'
            }}>
              🏊
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#1a202c'
            }}>
              Private Pool
            </h3>
            <p style={{
              color: '#4a5568',
              lineHeight: '1.7',
              fontSize: '1rem'
            }}>
              Enjoy a private swimming pool – perfect for pool parties and creating memorable moments. Our farmhouse with pool in Gurgaon is ideal for pool party farmhouse near Delhi.
            </p>
          </div>

          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 1.5rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem'
            }}>
              🎵
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#1a202c'
            }}>
              Music & Sound
            </h3>
            <p style={{
              color: '#4a5568',
              lineHeight: '1.7',
              fontSize: '1rem'
            }}>
              Play music loud until 4 AM with our premium sound system – ideal for night parties and celebrations. Farmhouse with music system perfect for farmhouse for birthday party in Gurgaon.
            </p>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section style={{
        background: '#f8fafc',
        padding: '4rem 1rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#1a202c'
          }}>
            Perfect for Every Celebration
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { icon: '🎂', title: 'Birthday Parties', desc: 'Farmhouse for birthday party in Gurgaon - Make birthdays memorable with our luxury venue perfect for celebrations' },
              { icon: '🏢', title: 'Corporate Events', desc: 'Farmhouse for corporate party in Gurgaon - Professional atmosphere perfect for team building and meetings' },
              { icon: '💝', title: 'Wedding Functions', desc: 'Farmhouse for wedding in Gurgaon - Beautiful venue for intimate weddings and receptions' },
              { icon: '🎊', title: 'Weekend Getaways', desc: 'Farmhouse near Delhi for weekend stay - Perfect escape from city life with all modern amenities' },
              { icon: '🍾', title: 'Pool Parties', desc: 'Farmhouse with pool in Gurgaon - Splash into fun with our private pool and party setup' },
              { icon: '👨‍👩‍👧‍👦', title: 'Family Gatherings', desc: 'Farmhouse for family get-together in Gurgaon - Perfect space for reunions and celebrations' }
            ].map((item, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 2px 15px rgba(0, 0, 0, 0.08)',
                transition: 'transform 0.3s ease',
                cursor: 'default'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  color: '#1a202c'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: '#4a5568',
                  lineHeight: '1.6',
                  fontSize: '0.95rem'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        padding: '4rem 1rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '1rem',
          color: '#1a202c'
        }}>
          Features That Make Us the Best Farmhouse for Party in Gurgaon
        </h2>
        <div style={{
          width: '100px',
          height: '4px',
          background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
          margin: '0 auto 3rem',
          borderRadius: '2px'
        }}></div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {[
            'Private Swimming Pool',
            'Lush Green Lawn (5000+ sq ft)',
            'Modern Air-Conditioned Rooms',
            'Premium Sound System',
            'BBQ & Bonfire Setup',
            'Fully Equipped Kitchen',
            'Ample Parking (6+ cars)',
            'Projector for Screenings',
            'Indoor Games & Entertainment',
            'WiFi Throughout',
            'Security & Privacy',
            'Pet-Friendly Venue'
          ].map((feature, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              background: '#f8fafc',
              borderRadius: '8px',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#edf2f7';
              e.currentTarget.style.transform = 'translateX(5px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#f8fafc';
              e.currentTarget.style.transform = 'translateX(0)';
            }}>
              <div style={{
                color: '#10b981',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>✓</div>
              <span style={{ fontSize: '1rem', color: '#2d3748' }}>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{
        background: '#f8fafc',
        padding: '4rem 1rem'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#1a202c'
          }}>
            Frequently Asked Questions
          </h2>

          <div style={{
            display: 'grid',
            gap: '1.5rem'
          }}>
            {[
              {
                q: 'Is the farm suitable for night parties?',
                a: 'Yes! Our farm in Gurgaon - My Farm is perfect for night celebrations and farm stay experiences. You can play loud music until 4 AM without any restrictions.'
              },
              {
                q: 'Does it have music permission?',
                a: 'Yes, we have complete permission for music and entertainment. No noise complaints or restrictions during your party.'
              },
              {
                q: 'How many guests can it accommodate?',
                a: 'Our farmhouse can comfortably host up to 40-50 guests for celebrations, with sleeping arrangements for up to 15 people.'
              },
              {
                q: 'What makes Aravali Farm the best farmhouse for party in Gurgaon?',
                a: 'We offer a perfect combination of a private pool, spacious lawns, modern amenities, and complete privacy – making us the top choice for farmhouse for party in Gurgaon, farmhouse for wedding in Gurgaon, and farmhouse for rent in Gurgaon. Located near Delhi NCR, we provide farmhouse with pool, farmhouse with music system, and all amenities for memorable celebrations.'
              },
              {
                q: 'Do you provide catering services?',
                a: 'Yes, we can arrange professional catering services for your event. Please contact us in advance to discuss menu options and requirements.'
              },
              {
                q: 'Is there parking available?',
                a: 'Absolutely! We provide free parking for 6+ vehicles inside the farmhouse premises, with additional arrangements available for larger groups.'
              }
            ].map((faq, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  color: '#1a202c'
                }}>
                  {faq.q}
                </h3>
                <p style={{
                  color: '#4a5568',
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  margin: 0
                }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '5rem 1rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: '700',
          marginBottom: '1.5rem'
        }}>
          Ready to Host Your Dream Party?
        </h2>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.3rem)',
          marginBottom: '2.5rem',
          maxWidth: '700px',
          margin: '0 auto 2.5rem'
        }}>
          Book Aravali Farm – The Best Farmhouse for Party in Gurgaon, Farmhouse for Wedding in Gurgaon, and Farmhouse for Rent in Gurgaon. Perfect for weekend getaways near Delhi NCR.
        </p>
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link href="/contact">
            <button style={{
              background: 'white',
              color: '#667eea',
              padding: '1rem 2.5rem',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
            }}>
              Book Now
            </button>
          </Link>
          <Link href="/Gallery">
            <button style={{
              background: 'transparent',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: '600',
              border: '2px solid white',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.color = '#667eea';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'white';
            }}>
              View Gallery
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

