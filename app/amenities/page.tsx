'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'

export default function AmenitiesPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <Navigation />
      
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '6rem 2rem 4rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: '700',
          marginBottom: '1rem',
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
        }}>
          Amenities That Make Every Farm Stay Special in Gurgaon
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
          maxWidth: '800px',
          margin: '0 auto',
          opacity: 0.95
        }}>
          Discover premium amenities at our luxury farm in Gurgaon – perfect for farm stay, farm rental, and farm vacation experiences
        </p>
      </section>

      {/* Main Amenities Section */}
      <section style={{
        padding: '4rem 1rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {[
            {
              icon: '🏊',
              title: 'Private Swimming Pool',
              description: 'Enjoy a crystal-clear private pool perfect for swimming, pool parties, and creating unforgettable memories with family and friends.'
            },
            {
              icon: '🌳',
              title: 'Lush Green Lawn',
              description: 'Spacious 5000+ sq ft lawn area ideal for outdoor activities, games, celebrations, and enjoying the scenic beauty of nature.'
            },
            {
              icon: '❄️',
              title: 'Air-Conditioned Rooms',
              description: 'Modern, fully air-conditioned bedrooms with premium furnishings for a comfortable and luxurious stay.'
            },
            {
              icon: '🍖',
              title: 'BBQ & Bonfire Area',
              description: 'Perfect setup for evening gatherings with a dedicated BBQ area and cozy bonfire for making s\'mores and stories.'
            },
            {
              icon: '🍳',
              title: 'Fully Equipped Kitchen',
              description: 'Modern kitchen with all cooking essentials, gas connection, refrigerator, and utensils for your home-cooked meals.'
            },
            {
              icon: '📡',
              title: 'High-Speed WiFi',
              description: 'Complimentary high-speed internet throughout the property to stay connected and entertain guests.'
            }
          ].map((amenity, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '2.5rem',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                {amenity.icon}
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: '#1a202c',
                textAlign: 'center'
              }}>
                {amenity.title}
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.7',
                fontSize: '1rem',
                textAlign: 'center'
              }}>
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Features Section */}
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
            marginBottom: '1rem',
            color: '#1a202c'
          }}>
            Additional Features & Facilities
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {[
              'Ample Parking Space (6+ vehicles)',
              'Premium Sound System',
              'Projector for Screenings',
              'Indoor Games & Entertainment',
              'Outdoor Seating Areas',
              'Security & Privacy',
              'Pet-Friendly Venue',
              '24/7 Caretaker Service',
              'Power Backup',
              'Water Cooler',
              'First Aid Kit',
              'Fire Safety Equipment'
            ].map((feature, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.25rem 1.5rem',
                background: 'white',
                borderRadius: '10px',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateX(5px)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.background = '#f0f4f8';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.background = 'white';
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span style={{ color: 'white', fontSize: '1.2rem' }}>✓</span>
                </div>
                <span style={{ fontSize: '1rem', color: '#2d3748', fontWeight: '500' }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features by Category */}
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
          Amenities by Category
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {/* Luxury & Comfort */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: '#667eea'
            }}>
              ✨ Luxury & Comfort
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {['Private Pool', 'Air Conditioning', 'Premium Beddings', 'Modern Furnishings', 'Hot Water 24/7'].map((item, i) => (
                <li key={i} style={{
                  padding: '0.75rem 0',
                  borderBottom: i < 4 ? '1px solid #e5e7eb' : 'none',
                  color: '#4a5568',
                  fontSize: '1rem'
                }}>
                  ✓ {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Entertainment */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: '#667eea'
            }}>
              🎮 Entertainment
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {['Sound System', 'Projector Setup', 'Indoor Games', 'TV with Cable', 'WiFi Internet'].map((item, i) => (
                <li key={i} style={{
                  padding: '0.75rem 0',
                  borderBottom: i < 4 ? '1px solid #e5e7eb' : 'none',
                  color: '#4a5568',
                  fontSize: '1rem'
                }}>
                  ✓ {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Outdoor Activities */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: '#667eea'
            }}>
              🌳 Outdoor Activities
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {['Large Lawn Area', 'BBQ Setup', 'Bonfire Pit', 'Outdoor Seating', 'Garden View'].map((item, i) => (
                <li key={i} style={{
                  padding: '0.75rem 0',
                  borderBottom: i < 4 ? '1px solid #e5e7eb' : 'none',
                  color: '#4a5568',
                  fontSize: '1rem'
                }}>
                  ✓ {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Safety & Security */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: '#667eea'
            }}>
              🔒 Safety & Security
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {['Security Guard', 'CCTV Surveillance', 'First Aid Kit', 'Fire Safety', 'Power Backup'].map((item, i) => (
                <li key={i} style={{
                  padding: '0.75rem 0',
                  borderBottom: i < 4 ? '1px solid #e5e7eb' : 'none',
                  color: '#4a5568',
                  fontSize: '1rem'
                }}>
                  ✓ {item}
                </li>
              ))}
            </ul>
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
          Experience Luxury at Our Farm in Gurgaon - My Farm Stay
        </h2>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.3rem)',
          marginBottom: '2.5rem',
          maxWidth: '700px',
          margin: '0 auto 2.5rem'
        }}>
          Book your stay today and enjoy all these premium amenities designed for your comfort and entertainment
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
              View Photos
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

