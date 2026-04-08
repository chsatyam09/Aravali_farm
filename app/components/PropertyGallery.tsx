"use client";

import { useRouter } from 'next/navigation'

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: "2 BHK Crystal Farmhouse in Noida Sector 135 with Pool - FVB 116",
    location: "Noida · Sector 135",
    price: "₹16,000 / night",
    bedrooms: 2,
    bathrooms: 3,
    image: "/images/noida1.jpg",
  },
  {
    id: 2,
    title: "2 BHK Farmhouse Noida Sector 135 - FVB 101",
    location: "Noida · Sector 135",
    price: "₹18,000 / night",
    bedrooms: 2,
    bathrooms: 3,
    image: "/images/noida2.jpg",
  },
  {
    id: 3,
    title: "2 BHK Green Beauty Farmhouse Noida Sector 135 - FVB 103",
    location: "Noida · Sector 135",
    price: "₹18,000 / night",
    bedrooms: 2,
    bathrooms: 2,
    image: "/images/noida3.jpg",
  },
  {
    id: 4,
    title: "3 BHK Luxury Farmhouse Noida Sector 135 - FVB 104",
    location: "Noida · Sector 135",
    price: "₹22,000 / night",
    bedrooms: 3,
    bathrooms: 3,
    image: "/images/noida1.jpg",
  },
  {
    id: 5,
    title: "2 BHK Premium Farmhouse with Garden - FVB 105",
    location: "Noida · Sector 135",
    price: "₹20,000 / night",
    bedrooms: 2,
    bathrooms: 2,
    image: "/images/noida2.jpg",
  },
  {
    id: 6,
    title: "4 BHK Grand Farmhouse with Pool & Lawn - FVB 106",
    location: "Noida · Sector 135",
    price: "₹35,000 / night",
    bedrooms: 4,
    bathrooms: 4,
    image: "/images/noida3.jpg",
  },
  {
    id: 7,
    title: "3 BHK Executive Farmhouse with Modern Amenities - FVB 107",
    location: "Noida · Sector 135",
    price: "₹25,000 / night",
    bedrooms: 3,
    bathrooms: 3,
    image: "/images/noida1.jpg",
  },
];

export default function PropertyGallery() {
  const router = useRouter()

  const handleCheckAvailability = (propertyId: number) => {
    router.push(`/property/${propertyId}`)
  }

  return (
    <section 
      id="gallery" 
      style={{
        padding: '4rem 1.5rem',
        background: '#ffffff',
        position: 'relative',
        zIndex: 10,
        minHeight: 'auto'
      }}
    >

      <div 
        style={{
          display: 'grid',
          gap: '2.5rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          padding: '0 1rem',
          boxSizing: 'border-box'
        }}
      >
        {properties.map((property) => (
          <div
            key={property.id}
            onClick={() => handleCheckAvailability(property.id)}
            style={{
              background: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '1px solid #f3f4f6',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 25px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Image Section */}
            <div 
              style={{
                position: 'relative',
                width: '100%',
                height: '250px',
                overflow: 'hidden',
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px'
              }}
            >
              <img
                src={property.image}
                alt={property.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div 
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  background: 'rgba(0, 0, 0, 0.8)',
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}
              >
                {property.price}
              </div>
            </div>

            {/* Details */}
            <div style={{ padding: '1.25rem' }}>
              <h3 
                style={{
                  fontWeight: '600',
                  fontSize: '1.125rem',
                  marginBottom: '0.25rem',
                  color: '#111827',
                  lineHeight: '1.4',
                  fontFamily: 'sans-serif'
                }}
              >
                {property.title}
              </h3>
              <p 
                style={{
                  color: '#6B7280',
                  fontSize: '0.875rem',
                  marginBottom: '0.75rem',
                  fontFamily: 'sans-serif'
                }}
              >
                {property.location}
              </p>

              <div 
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                  flexWrap: 'wrap'
                }}
              >
                <span 
                  style={{
                    padding: '4px 12px',
                    background: '#f3f4f6',
                    borderRadius: '4px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    fontFamily: 'sans-serif'
                  }}
                >
                  {property.bedrooms} bedrooms
                </span>
                <span 
                  style={{
                    padding: '4px 12px',
                    background: '#f3f4f6',
                    borderRadius: '4px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    fontFamily: 'sans-serif'
                  }}
                >
                  {property.bathrooms} bathrooms
                </span>
              </div>

            <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleCheckAvailability(property.id);
                }}
                style={{
                  width: '100%',
                  border: '1px solid #D1D5DB',
                  borderRadius: '8px',
                  padding: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                color: '#111111',
                background: 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'sans-serif'
                }}
                onMouseOver={(e) => {
                e.currentTarget.style.background = '#111111';
                e.currentTarget.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#111111';
                }}
              >
                Check Availability
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Responsive Design */}
      <style jsx>{`
        /* Gallery page responsive styles */
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns: repeat(auto-fit, minmax(280px, 1fr))"] {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
            gap: 2rem !important;
            padding: 0 1rem !important;
          }
          
          div[style*="padding: 8rem 1.5rem 4rem"] {
            padding: 6rem 1rem 3rem !important;
          }
        }
        
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: repeat(auto-fit, minmax(280px, 1fr))"] {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding: 0 0.75rem !important;
            max-width: 100% !important;
            width: 100% !important;
          }
          
          div[style*="padding: 8rem 1.5rem 4rem"] {
            padding: 4rem 0.75rem 2rem !important;
          }
          
          h2[style*="fontSize: clamp(2rem, 5vw, 3rem)"] {
            font-size: clamp(1.5rem, 4vw, 2.5rem) !important;
          }
          
          div[style*="height: 250px"] {
            height: 200px !important;
          }
          
          div[style*="padding: 1.25rem"] {
            padding: 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="gridTemplateColumns: repeat(auto-fit, minmax(280px, 1fr))"] {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            padding: 0 0.5rem !important;
            max-width: 100% !important;
            width: 100% !important;
          }
          
          div[style*="padding: 8rem 1.5rem 4rem"] {
            padding: 3rem 0.5rem 1.5rem !important;
          }
          
          h2[style*="fontSize: clamp(2rem, 5vw, 3rem)"] {
            font-size: clamp(1.25rem, 3vw, 2rem) !important;
          }
          
          div[style*="height: 250px"] {
            height: 180px !important;
          }
          
          div[style*="padding: 1.25rem"] {
            padding: 0.75rem !important;
          }
          
          h3[style*="fontSize: 1.125rem"] {
            font-size: 1rem !important;
          }
          
          p[style*="fontSize: 0.875rem"] {
            font-size: 0.8rem !important;
          }
          
          span[style*="fontSize: 0.875rem"] {
            font-size: 0.75rem !important;
          }
          
          button[style*="fontSize: 0.875rem"] {
            font-size: 0.8rem !important;
          }
        }
        
        @media (max-width: 360px) {
          div[style*="gridTemplateColumns: repeat(auto-fit, minmax(280px, 1fr))"] {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
            padding: 0 0.25rem !important;
            max-width: 100% !important;
            width: 100% !important;
          }
          
          div[style*="padding: 8rem 1.5rem 4rem"] {
            padding: 2rem 0.25rem 1rem !important;
          }
          
          h2[style*="fontSize: clamp(2rem, 5vw, 3rem)"] {
            font-size: clamp(1rem, 3vw, 1.5rem) !important;
          }
          
          div[style*="height: 250px"] {
            height: 160px !important;
          }
          
          div[style*="padding: 1.25rem"] {
            padding: 0.5rem !important;
          }
          
          h3[style*="fontSize: 1.125rem"] {
            font-size: 0.9rem !important;
            line-height: 1.3 !important;
          }
          
          p[style*="fontSize: 0.875rem"] {
            font-size: 0.75rem !important;
          }
          
          span[style*="fontSize: 0.875rem"] {
            font-size: 0.7rem !important;
            padding: 2px 8px !important;
          }
          
          button[style*="fontSize: 0.875rem"] {
            font-size: 0.75rem !important;
            padding: 0.4rem !important;
          }
          
          div[style*="padding: 6px 12px"] {
            padding: 4px 8px !important;
            font-size: 0.7rem !important;
          }
        }
      `}</style>
    </section>
  );
}
