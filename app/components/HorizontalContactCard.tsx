'use client'

const HorizontalContactCard = () => {

  return (
    <>
      <style jsx>{`
        /* Large Desktop */
        @media (min-width: 1440px) {
          .contact-card-container h2 {
            font-size: clamp(7rem, 12vw, 10rem) !important;
            letter-spacing: clamp(6px, 1vw, 10px) !important;
          }
        }
        
        /* Laptop and Desktop Optimizations */
        @media (min-width: 1024px) and (max-width: 1440px) {
          .contact-card-container {
            padding: clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.5rem) !important;
          }
          .contact-card-container h2 {
            font-size: clamp(5rem, 8vw, 7rem) !important;
            letter-spacing: clamp(4px, 0.8vw, 8px) !important;
          }
        }
        
        /* Tablet and Small Laptop */
        @media (max-width: 1024px) {
          .contact-card-container {
            padding: clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2.5vw, 2rem) !important;
          }
          .contact-card-container h2 {
            font-size: clamp(3.5rem, 7vw, 5.5rem) !important;
            letter-spacing: clamp(3px, 0.6vw, 6px) !important;
          }
        }
        
        /* Mobile - Standard */
        @media (max-width: 768px) {
          .contact-card-container {
            padding: clamp(1.25rem, 3vw, 2rem) clamp(0.75rem, 2vw, 1.5rem) !important;
          }
          .contact-card-container h2 {
            font-size: clamp(2.5rem, 8vw, 4rem) !important;
            letter-spacing: clamp(2px, 0.5vw, 4px) !important;
          }
        }
        
        /* Small Mobile */
        @media (max-width: 480px) {
          .contact-card-container {
            padding: clamp(1rem, 2.5vw, 1.75rem) clamp(0.5rem, 1.5vw, 1rem) !important;
          }
          .contact-card-container h2 {
            font-size: clamp(2rem, 7vw, 3.5rem) !important;
            letter-spacing: clamp(1.5px, 0.4vw, 3px) !important;
          }
        }
        
        /* Extra Small Mobile */
        @media (max-width: 360px) {
          .contact-card-container {
            padding: 0.75rem 0.5rem !important;
          }
          .contact-card-container h2 {
            font-size: clamp(1.75rem, 6vw, 2.75rem) !important;
            letter-spacing: 1px !important;
          }
        }
      `}</style>
      <div className="contact-card-container" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)',
      fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      width: '100%',
      height: '100%',
      minHeight: '200px',
      position: 'relative',
      margin: '0 auto'
    }}>

      {/* Contact Us Heading - Centered Horizontally and Vertically */}
      <h2 style={{
        fontSize: 'clamp(3rem, 10vw, 8rem)',
        color: '#ffffff',
        margin: '0 auto',
        fontWeight: '800',
        textShadow: '0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 6px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 255, 255, 0.2)',
        letterSpacing: 'clamp(3px, 1.5vw, 8px)',
        textTransform: 'uppercase',
        fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        lineHeight: '1',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        display: 'block'
      }}>
        Contact Us
      </h2>


    </div>
    </>
  )
}

export default HorizontalContactCard
