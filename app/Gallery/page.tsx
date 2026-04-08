'use client'

import Navigationforgallery from '@/app/components/Navigationforgallery'
import PropertyGallery from '@/app/components/PropertyGallery'
import Footer from '@/app/components/Footer'
export default function GalleryPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      {/* Hero Section with Background Image */}
      <div style={{
        position: 'relative',
        height: '50vh',
        width: '100%',
        overflow: 'hidden'
      }}>
        {/* Background Image */}
<div
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url("/Images/Aravali Farm Images/Born_FIre-1.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    paddingLeft: '40px',      // left padding
    paddingRight: '40px',     // right padding
    // borderBottomLeftRadius: '20px',  // curve bottom-left
    // borderBottomRightRadius: '20px', // curve bottom-right
    overflow: 'hidden'        // ensures image respects the curve
    
  }}
>

          {/* Dark overlay for better text readability */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.4)'
          }}></div>
        </div>

        {/* Navigation - positioned absolutely on top */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50
        }}>
          <Navigationforgallery />
        </div>

        {/* Hero Content - centered */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10
        }}>
          <div style={{
            textAlign: 'center',
            color: 'white',
            padding: '0 1rem'
          }}>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '600',
              marginBottom: '1rem',
              textShadow: '2px 2px 4px rgba(255, 255, 255, 0.7)'
            }}>
               Luxury Farmhouse in Gurgaon
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              opacity: 0.9,
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
            }}>
              Explore our luxury farmhouse with pool, lush lawns, and premium amenities for your perfect getaway
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main style={{ background: 'white' }}>
        <PropertyGallery />
        <Footer />
        
      </main>
    </div>
  )
}
