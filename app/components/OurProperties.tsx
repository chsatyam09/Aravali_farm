'use client'

import { useState, useEffect, useRef } from 'react'

type PropertyTab = 'gurgaon' | 'noida'

export default function OurProperties() {
  // Images for Aravali Farm (Gurgaon)
  const gurgaonImages = [
    '/Images/Aravali Farm Images/Property-1.png',
    '/Images/Aravali Farm Images/property-2.jpg',
    '/Images/Aravali Farm Images/Pool-1.png',
    '/Images/Aravali Farm Images/Living Room 2.jpg',
    '/Images/Aravali Farm Images/Graden-1.png',
    '/Images/Aravali Farm Images/Garden-3.jpg',
  ]

  // Images for Aravali Farm (Noida)
  const noidaImages = [
    '/Images/Aravali Farm Images/Pool-2.png',
    '/Images/Aravali Farm Images/Living Room 3.jpg',
    '/Images/Aravali Farm Images/Serprate_Sitting_Area-1.png',
    '/Images/Aravali Farm Images/Garden-2.jpg',
    '/Images/Aravali Farm Images/pool_Sitting-3.jpg',
    '/Images/Aravali Farm Images/Serprate_Sitting_Area-2.jpg',
  ]

  // Slider states
  const [gurgaonCurrent, setGurgaonCurrent] = useState(0)
  const [noidaCurrent, setNoidaCurrent] = useState(0)
  // Mobile: active property tab (one property visible at a time)
  const [activeTab, setActiveTab] = useState<PropertyTab>('gurgaon')
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)
  
  // Modal states
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [selectedImages, setSelectedImages] = useState<string[]>([])
  const [selectedProperty, setSelectedProperty] = useState<'gurgaon' | 'noida' | null>(null)

  const currentIndex = activeTab === 'gurgaon' ? gurgaonCurrent : noidaCurrent
  const currentImages = activeTab === 'gurgaon' ? gurgaonImages : noidaImages

  // Auto-slide effect for Gurgaon (2.5 seconds) – only when Gurgaon is visible
  useEffect(() => {
    const timer = setInterval(() => {
      setGurgaonCurrent((prev) => (prev + 1) % gurgaonImages.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [gurgaonImages.length])

  // Auto-slide effect for Noida (2.5 seconds) – only when Noida is visible
  useEffect(() => {
    const timer = setInterval(() => {
      setNoidaCurrent((prev) => (prev + 1) % noidaImages.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [noidaImages.length])

  const nextSlide = (property: 'gurgaon' | 'noida') => {
    if (property === 'gurgaon') {
      setGurgaonCurrent((prev) => (prev + 1) % gurgaonImages.length)
    } else {
      setNoidaCurrent((prev) => (prev + 1) % noidaImages.length)
    }
  }

  const prevSlide = (property: 'gurgaon' | 'noida') => {
    if (property === 'gurgaon') {
      setGurgaonCurrent((prev) => (prev === 0 ? gurgaonImages.length - 1 : prev - 1))
    } else {
      setNoidaCurrent((prev) => (prev === 0 ? noidaImages.length - 1 : prev - 1))
    }
  }

  // Touch swipe handlers for mobile carousel
  const handleTouchStart = (e: React.TouchEvent, property: PropertyTab) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (property: PropertyTab) => {
    const diff = touchStartX.current - touchEndX.current
    const minSwipe = 50
    if (diff > minSwipe) nextSlide(property)
    else if (diff < -minSwipe) prevSlide(property)
  }

  const openModal = (property: 'gurgaon' | 'noida', imageIndex: number) => {
    setSelectedProperty(property)
    const images = property === 'gurgaon' ? gurgaonImages : noidaImages
    setSelectedImages(images)
    setSelectedImageIndex(imageIndex)
  }

  const closeModal = () => {
    setSelectedImageIndex(null)
    setSelectedImages([])
    setSelectedProperty(null)
  }

  const nextModalImage = () => {
    if (selectedImageIndex !== null && selectedImages.length > 0) {
      const nextIndex = (selectedImageIndex + 1) % selectedImages.length
      setSelectedImageIndex(nextIndex)
    }
  }

  const prevModalImage = () => {
    if (selectedImageIndex !== null && selectedImages.length > 0) {
      const prevIndex = selectedImageIndex === 0 ? selectedImages.length - 1 : selectedImageIndex - 1
      setSelectedImageIndex(prevIndex)
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex !== null) {
        if (e.key === 'ArrowRight') {
          nextModalImage()
        } else if (e.key === 'ArrowLeft') {
          prevModalImage()
        } else if (e.key === 'Escape') {
          closeModal()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImageIndex, selectedImages.length])

  return (
    <>
      <section style={{ 
        padding: '4rem 0', 
        background: 'var(--color-cream)'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 1rem' 
        }}>
          {/* Section Header */}
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '3rem' 
          }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              color: 'var(--color-text)',
              marginBottom: '0.5rem',
              letterSpacing: '0.15em',
              fontFamily: "'Dancing Script', cursive",
              fontWeight: 300,
            }}>
              Our Properties
            </h2>

            <div style={{
              width: '100%',
              height: '2px',
              background: 'var(--color-accent)',
              marginBottom: '1rem'
            }}></div>
          </div>

          {/* Mobile: Tab switcher + single swipeable carousel */}
          <div className="our-properties-mobile">
            <div className="property-tabs">
              <button
                type="button"
                className={`property-tab ${activeTab === 'gurgaon' ? 'active' : ''}`}
                onClick={() => setActiveTab('gurgaon')}
                aria-pressed={activeTab === 'gurgaon'}
                aria-label="View Aravali Farm Gurgaon"
              >
                Aravali Farm (Gurgaon)
              </button>
              <button
                type="button"
                className={`property-tab ${activeTab === 'noida' ? 'active' : ''}`}
                onClick={() => setActiveTab('noida')}
                aria-pressed={activeTab === 'noida'}
                aria-label="View Aravali Farm Noida"
              >
                Aravali Farm (Noida)
              </button>
            </div>
            <div
              className="mobile-carousel-wrap"
              onTouchStart={(e) => handleTouchStart(e, activeTab)}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => handleTouchEnd(activeTab)}
            >
              <div
                className="mobile-carousel-inner"
                onClick={() => openModal(activeTab, activeTab === 'gurgaon' ? gurgaonCurrent : noidaCurrent)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    openModal(activeTab, activeTab === 'gurgaon' ? gurgaonCurrent : noidaCurrent)
                  }
                }}
                aria-label="Open gallery"
              >
                {currentImages.map((image, index) => (
                  <div
                    key={`${activeTab}-${index}`}
                    className="mobile-carousel-slide"
                    style={{ opacity: index === currentIndex ? 1 : 0 }}
                  >
                    <img src={image} alt={`${activeTab === 'gurgaon' ? 'Gurgaon' : 'Noida'} property ${index + 1}`} />
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="carousel-nav carousel-prev"
                onClick={(e) => { e.stopPropagation(); prevSlide(activeTab) }}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                type="button"
                className="carousel-nav carousel-next"
                onClick={(e) => { e.stopPropagation(); nextSlide(activeTab) }}
                aria-label="Next image"
              >
                ›
              </button>
              <div className="carousel-dots" role="tablist" aria-label="Image dots">
                {currentImages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === currentIndex}
                    aria-label={`Image ${i + 1}`}
                    className={`dot ${i === currentIndex ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      if (activeTab === 'gurgaon') setGurgaonCurrent(i)
                      else setNoidaCurrent(i)
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Two-column grid */}
          <div className="our-properties-desktop" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '3rem',
            width: '100%'
          }}>
            {/* Aravali Farm (Gurgaon) Slider */}
            <div style={{
              position: 'relative',
              width: '100%',
            }}>
              <h3 style={{
                fontSize: '1.75rem',
                color: 'var(--color-text)',
                marginBottom: '1.25rem',
                textAlign: 'center',
                fontFamily: '"Poppins", cursive',
                fontWeight: 600,
                letterSpacing: '0.02em',
              }}>
                Aravali Farm (Gurgaon)
              </h3>
              
              <div style={{
                position: 'relative',
                width: '100%',
                height: '400px',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
              onClick={() => openModal('gurgaon', gurgaonCurrent)}
              onMouseEnter={(e) => {
                const target = e.currentTarget
                target.style.transform = 'scale(1.02)'
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget
                target.style.transform = 'scale(1)'
              }}
              >
                {gurgaonImages.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      opacity: index === gurgaonCurrent ? 1 : 0,
                      transition: 'opacity 0.8s ease-in-out',
                    }}
                  >
                    <img
                      src={image}
                      alt={`Gurgaon Property ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                ))}

                {/* Previous Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevSlide('gurgaon')
                  }}
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    fontSize: '2rem',
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    backdropFilter: 'blur(5px)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.35)'
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
                  }}
                >
                  ‹
                </button>

                {/* Next Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextSlide('gurgaon')
                  }}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    fontSize: '2rem',
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    backdropFilter: 'blur(5px)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.35)'
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
                  }}
                >
                  ›
                </button>
              </div>
            </div>

            {/* Aravali Farm (Noida) Slider */}
            <div style={{
              position: 'relative',
              width: '100%',
            }}>
              <h3 style={{
                fontSize: '1.75rem',
                color: 'var(--color-text)',
                marginBottom: '1.25rem',
                textAlign: 'center',
                fontFamily: '"Poppins", cursive',
                fontWeight: 600,
                letterSpacing: '0.02em',
              }}>
                Aravali Farm (Noida)
              </h3>
              
              <div style={{
                position: 'relative',
                width: '100%',
                height: '400px',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
              onClick={() => openModal('noida', noidaCurrent)}
              onMouseEnter={(e) => {
                const target = e.currentTarget
                target.style.transform = 'scale(1.02)'
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget
                target.style.transform = 'scale(1)'
              }}
              >
                {noidaImages.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      opacity: index === noidaCurrent ? 1 : 0,
                      transition: 'opacity 0.8s ease-in-out',
                    }}
                  >
                    <img
                      src={image}
                      alt={`Noida Property ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                ))}

                {/* Previous Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevSlide('noida')
                  }}
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    fontSize: '2rem',
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    backdropFilter: 'blur(5px)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.35)'
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
                  }}
                >
                  ‹
                </button>

                {/* Next Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextSlide('noida')
                  }}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    fontSize: '2rem',
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    backdropFilter: 'blur(5px)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.35)'
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
                  }}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal - Full Screen Gallery (similar to PropertyPhotos) */}
      {selectedImageIndex !== null && selectedImages.length > 0 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.98)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'pointer'
          }}
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              closeModal()
            }}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              fontSize: '2rem',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10001
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
              e.currentTarget.style.transform = 'rotate(90deg) scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
              e.currentTarget.style.transform = 'rotate(0deg) scale(1)'
            }}
          >
            ×
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevModalImage()
            }}
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              fontSize: '3rem',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10001
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
              e.currentTarget.style.transform = 'translateY(-50%) translateX(-5px) scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
            }}
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              nextModalImage()
            }}
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              fontSize: '3rem',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10001
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
              e.currentTarget.style.transform = 'translateY(-50%) translateX(5px) scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
            }}
          >
            ›
          </button>

          {/* Image Counter */}
          <div style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0, 0, 0, 0.6)',
            padding: '10px 25px',
            borderRadius: '30px',
            color: 'white',
            fontSize: '1.1rem',
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '500',
            zIndex: 10001
          }}>
            {selectedImageIndex + 1} / {selectedImages.length}
          </div>

          {/* Image - Max Screen Size */}
          <img
            src={selectedImages[selectedImageIndex]}
            alt={`Property ${selectedImageIndex + 1}`}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              padding: '2rem'
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Mobile-first & responsive styles */}
      <style jsx>{`
        /* Mobile: show tabbed single carousel; Desktop: show two columns */
        .our-properties-mobile {
          display: none;
        }
        .our-properties-desktop {
          display: grid;
        }

        @media (max-width: 900px) {
          .our-properties-mobile {
            display: block;
            width: 100%;
          }
          .our-properties-desktop {
            display: none !important;
          }

          .property-tabs {
            display: flex;
            gap: 0.5rem;
            justify-content: center;
            margin-bottom: 1.25rem;
            padding: 0 0.25rem;
          }
          .property-tab {
            flex: 1;
            max-width: 180px;
            min-height: 48px;
            padding: 0.75rem 1rem;
            border: 2px solid var(--color-accent, #8b7355);
            background: var(--color-cream);
            color: var(--color-text);
            font-family: "Poppins", sans-serif;
            font-size: 0.9rem;
            font-weight: 600;
            border-radius: 999px;
            cursor: pointer;
            transition: background 0.2s, color 0.2s, transform 0.15s;
            -webkit-tap-highlight-color: transparent;
          }
          .property-tab:active {
            transform: scale(0.98);
          }
          .property-tab.active {
            background: var(--color-accent, #8b7355);
            color: #fff;
          }

          .mobile-carousel-wrap {
            position: relative;
            width: 100%;
            height: 320px;
            border-radius: 12px;
            overflow: hidden;
            touch-action: pan-y pinch-zoom;
          }
          .mobile-carousel-inner {
            position: relative;
            width: 100%;
            height: 100%;
            cursor: pointer;
          }
          .mobile-carousel-slide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: opacity 0.5s ease-in-out;
          }
          .mobile-carousel-slide img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .mobile-carousel-wrap .carousel-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 44px;
            height: 44px;
            min-width: 44px;
            min-height: 44px;
            border-radius: 50%;
            background: rgba(255,255,255,0.25);
            border: 1px solid rgba(255,255,255,0.4);
            color: #fff;
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 10;
            transition: background 0.2s, transform 0.15s;
            -webkit-tap-highlight-color: transparent;
          }
          .mobile-carousel-wrap .carousel-prev { left: 8px; }
          .mobile-carousel-wrap .carousel-next { right: 8px; }
          .mobile-carousel-wrap .carousel-nav:active {
            transform: translateY(-50%) scale(0.95);
          }
          .carousel-dots {
            position: absolute;
            bottom: 12px;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
            gap: 8px;
            z-index: 10;
          }
          .carousel-dots .dot {
            width: 10px;
            height: 10px;
            min-width: 10px;
            min-height: 10px;
            padding: 0;
            border-radius: 50%;
            border: none;
            background: rgba(255,255,255,0.5);
            cursor: pointer;
            transition: background 0.2s, transform 0.2s;
            -webkit-tap-highlight-color: transparent;
          }
          .carousel-dots .dot.active {
            background: #fff;
            transform: scale(1.2);
          }
          .carousel-dots .dot:active {
            transform: scale(1.1);
          }
        }

        @media (max-width: 768px) {
          div[style*='height: 400px'] {
            height: 300px !important;
          }
          h3 {
            font-size: 1.5rem !important;
            margin-bottom: 1rem !important;
          }
          button[style*='left: 20px'][style*='top: 50%'] {
            left: 10px !important;
            width: 45px !important;
            height: 45px !important;
            font-size: 2rem !important;
          }
          button[style*='right: 20px'][style*='top: 50%'] {
            right: 10px !important;
            width: 45px !important;
            height: 45px !important;
            font-size: 2rem !important;
          }
          button[style*='top: 20px'][style*='right: 20px'] {
            top: 10px !important;
            right: 10px !important;
            width: 40px !important;
            height: 40px !important;
            font-size: 1.5rem !important;
          }
          div[style*='bottom: 30px'][style*='font-size: 1.1rem'] {
            font-size: 0.9rem !important;
            padding: 8px 20px !important;
          }
        }

        @media (min-width: 901px) {
          .our-properties-desktop {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </>
  )
}

