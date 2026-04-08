'use client'

import { useState, useEffect, useRef } from 'react'

// Guest photo slideshow for a single review card
const CardPhotoSlideshow = ({
  photos,
  reviewId,
  currentPhotoIndex,
  onPhotoChange,
  isCenter,
}: {
  photos: string[]
  reviewId: number
  currentPhotoIndex: number
  onPhotoChange: (reviewId: number, index: number) => void
  isCenter: boolean
}) => {
  if (!photos?.length) return null
  const index = currentPhotoIndex % photos.length
  const size = isCenter ? { height: '200px' } : { height: '160px' }

  return (
    <div className="review-card-slideshow" style={{
      width: '100%',
      borderRadius: '16px',
      overflow: 'hidden',
      marginBottom: '1rem',
      background: '#f8fafc',
      position: 'relative',
    }}>
      <div style={{ ...size, position: 'relative', overflow: 'hidden' }}>
        {photos.map((src, i) => (
          <div
            key={i}
            role="img"
            aria-label={`Guest photo ${i + 1} of ${photos.length}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: i === index ? 1 : 0,
              transition: 'opacity 0.4s ease',
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>
      {/* Dots */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '6px',
        padding: '8px',
      }}>
        {photos.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to photo ${i + 1}`}
            onClick={(e) => { e.stopPropagation(); onPhotoChange(reviewId, i); }}
            style={{
              width: i === index ? 20 : 8,
              height: 8,
              borderRadius: 4,
              border: 'none',
              background: i === index ? '#64748b' : '#cbd5e1',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
          />
        ))}
      </div>
    </div>
  )
}

const ClientReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [photoIndices, setPhotoIndices] = useState<Record<number, number>>({})
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Random guest placeholder images (picsum.photos – replace with real guest photos later)
  const guestPhoto = (reviewId: number, photoIndex: number) =>
    `https://picsum.photos/seed/guest-${reviewId}-${photoIndex}/400/300`

  const reviews = [
    {
      id: 1,
      source: "Google",
      reviewer: "Dhruv Sharma",
      reviewText: "Rooms were super clean, beds comfy, and the vibe felt like our own home. Excellent value for money and great hospitality.",
      stars: "🌟 🌟 🌟 🌟 🌟",
      image: "/Images/Aravali Farm Images/Hotel Images/google-1.jpeg",
      rating: 5,
      photos: [guestPhoto(1, 0), guestPhoto(1, 1), guestPhoto(1, 2), guestPhoto(1, 3)],
    },
    {
      id: 2,
      source: "MakeMyTrip",
      reviewer: "Rohan Anand",
      reviewText: "It's a wonderful place to stay with family. Nice ambience and greenery. Will definitely suggest this place to enjoy.",
      stars: "🌟 🌟 🌟 🌟 🌟",
      image: "/Images/Aravali Farm Images/Hotel Images/Make my trip.png",
      rating: 5,
      photos: [guestPhoto(2, 0), guestPhoto(2, 1), guestPhoto(2, 2)],
    },
    {
      id: 4,
      source: "Agoda",
      reviewer: "Priya Mehta",
      reviewText: "Amazing property with excellent facilities. The pool area is fantastic and the staff is very accommodating. Perfect for celebrations.",
      stars: "🌟 🌟 🌟 🌟 🌟",
      image: "/Images/Aravali Farm Images/Hotel Images/Agoda_Logo_1.png",
      rating: 5,
      photos: [guestPhoto(4, 0), guestPhoto(4, 1), guestPhoto(4, 2), guestPhoto(4, 3)],
    },
    {
      id: 3,
      source: "Booking.com",
      reviewer: "Sihka Tyagi",
      reviewText: "Best farm-stay experience. Lots of greenery, a beautiful swimming pool, and a large spacious area. Everything is great about the place.",
      stars: "🌟 🌟 🌟 🌟 🌟",
      image: "/Images/Aravali Farm Images/Hotel Images/Booking-1.png",
      rating: 5,
      photos: [guestPhoto(3, 0), guestPhoto(3, 1), guestPhoto(3, 2)],
    },
    {
      id: 5,
      source: "Airbnb",
      reviewer: "Amit Kumar",
      reviewText: "Exceptional service and beautiful location. Great for family outings and corporate events. Highly recommended for weekend getaways.",
      stars: "🌟 🌟 🌟 🌟 🌟",
      image: "/Images/Aravali Farm Images/Hotel Images/Airbnb2.png",
      rating: 5,
      photos: [guestPhoto(5, 0), guestPhoto(5, 1), guestPhoto(5, 2), guestPhoto(5, 3)],
    },
    {
      id: 6,
      source: "MakeMyTrip",
      reviewer: "Neha Singh",
      reviewText: "Lovely farmhouse with all modern amenities. The kids enjoyed the pool and lawn area. Will definitely come back again.",
      stars: "🌟 🌟 🌟 🌟 🌟",
      image: "/Images/Aravali Farm Images/Hotel Images/Make my trip-2.png",
      rating: 5,
      photos: [guestPhoto(6, 0), guestPhoto(6, 1), guestPhoto(6, 2)],
    },
  ]

  // Star component for better visual appeal
  const StarRating = ({ rating, size = '1.2rem' }: { rating: number; size?: string }) => {
    return (
      <div style={{ display: 'flex', gap: '0.25rem', justifyContent: 'center' }}>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={i < rating ? '#FFB800' : '#E5E7EB'}
            style={{ transition: 'all 0.3s ease' }}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
    )
  }

  // Generate structured data for SEO (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Aravali Farm",
    "description": "Luxury farmhouse in Gurgaon with private pool, perfect for parties, weddings, and weekend getaways",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": reviews.length.toString(),
      "bestRating": "5",
      "worstRating": "5"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.reviewer
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": review.reviewText,
      "publisher": {
        "@type": "Organization",
        "name": review.source
      }
    }))
  }

  // Auto-advance photo slideshow in visible review cards
  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoIndices((prev) => {
        const next = { ...prev }
        const L = reviews.length
        ;[-1, 0, 1].forEach((offset) => {
          const r = reviews[(currentIndex + offset + L) % L]
          if (!r?.photos?.length) return
          const id = r.id
          const current = prev[id] ?? 0
          next[id] = (current + 1) % r.photos.length
        })
        return next
      })
    }, 3500)
    return () => clearInterval(interval)
  }, [currentIndex, reviews])

  const handlePhotoChange = (reviewId: number, index: number) => {
    setPhotoIndices((prev) => ({ ...prev, [reviewId]: index }))
  }

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % reviews.length
        return nextIndex
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay, reviews.length])

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  return (
    <section 
      id="client-reviews" 
      aria-label="Customer reviews and testimonials for Aravali Farm"
      style={{
        padding: '5rem 0',
        background: '#f5f1eb',
        position: 'relative',
        overflow: 'hidden'
      }}
    >

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
        position: 'relative',
        zIndex: 1
      }}>

        {/* Section Header */}
       
       <header
  className="reviews-header"
  style={{
    width: '100%',
    textAlign: 'center',
    padding: 'clamp(2.5rem, 6vw, 4rem) 1.25rem',
    backgroundColor: '#f5f1eb',
  }}
>
  <h2
    className="reviews-title"
    style={{
      fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
      fontWeight: 800,
      background: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 50%, #1a1a1a 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '1.5rem',
      fontFamily: '"Montserrat", "Arial", sans-serif',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      position: 'relative',
      display: 'inline-block',
    }}
  >
    What Our Guests Say
  </h2>

  {/* Full-width horizontal line */}
  <div
    className="reviews-divider"
    style={{
      width: '100%',
      height: '2px',
      backgroundColor: '#000000',
      marginBottom: '1.75rem',
    }}
  />

  <p
    className="reviews-subtitle"
    style={{
      fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
      color: 'rgb(74, 85, 104)',
      maxWidth: '1100px',
      margin: '0 auto',
      lineHeight: 1.8,
      fontFamily: '"Poppins", "Helvetica Neue", Arial, sans-serif',
      fontWeight: 400,
      letterSpacing: '0.03em',
      fontStyle: 'normal',
      padding: '0 1rem',
    }}
  >
    Hear authentic stories and experiences shared by our happy guests.
    Their words reflect the memorable moments we strive to create every day.
  </p>
</header>


        {/* Horizontal Carousel */}
        <div 
          role="region" 
          aria-label="Customer reviews carousel"
          className="carousel-wrapper"
          style={{
            position: 'relative',
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 1rem'
          }}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setTimeout(() => setIsAutoPlay(true), 2000)}
            className="carousel-arrow carousel-arrow-prev"
            aria-label="Previous review"
            type="button"
            style={{
              position: 'absolute',
              left: '-40px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'white',
              color: '#1a1a1a',
              border: '2px solid #e2e8f0',
              borderRadius: '50%',
              width: '56px',
              height: '56px',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              zIndex: 20,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1.5rem'
            }}
          >
            <span aria-hidden="true">‹</span>
          </button>

          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setTimeout(() => setIsAutoPlay(true), 2000)}
            className="carousel-arrow carousel-arrow-next"
            aria-label="Next review"
            type="button"
            style={{
              position: 'absolute',
              right: '-40px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'white',
              color: '#1a1a1a',
              border: '2px solid #e2e8f0',
              borderRadius: '50%',
              width: '56px',
              height: '56px',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              zIndex: 20,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1.5rem'
            }}
          >
            <span aria-hidden="true">›</span>
          </button>

          {/* Carousel Container */}
          <div className="carousel-container" style={{
            overflow: 'visible',
            position: 'relative',
            minHeight: '720px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div className="carousel-inner" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              width: '100%',
              maxWidth: '1000px'
            }}>
              {/* Show 3 cards on desktop, 1 card on mobile */}
              {[-1, 0, 1].map((offset) => {
                const reviewIndex = (currentIndex + offset + reviews.length) % reviews.length
                const review = reviews[reviewIndex]
                const isCenter = offset === 0
                
                return (
                  <article
                    key={`${review.id}-${offset}`}
                    itemScope
                    itemType="https://schema.org/Review"
                    className={`review-card ${isCenter ? 'review-card-center' : 'review-card-side'}`}
                    style={{
                      flex: isCenter ? '0 0 420px' : '0 0 300px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      zIndex: isCenter ? 10 : 5
                    }}
                    onClick={() => !isCenter && goToSlide(reviewIndex)}
                  >
                    <div className="review-card-content" style={{
                      background: 'white',
                      borderRadius: '24px',
                      padding: isCenter ? '3rem 2.5rem' : '2rem 1.75rem',
                      boxShadow: isCenter 
                        ? '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)' 
                        : '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                      textAlign: 'center',
                      transform: isCenter ? 'scale(1)' : 'scale(0.88)',
                      opacity: isCenter ? 1 : 0.6,
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      width: '100%',
                      position: 'relative',
                      cursor: !isCenter ? 'pointer' : 'default',
                      border: 'none',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      if (!isCenter) {
                        e.currentTarget.style.opacity = '0.8'
                        e.currentTarget.style.transform = 'scale(0.92)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isCenter) {
                        e.currentTarget.style.opacity = '0.6'
                        e.currentTarget.style.transform = 'scale(0.88)'
                      }
                    }}
                  >
                    {/* Guest photos slideshow */}
                    <CardPhotoSlideshow
                      photos={review.photos ?? []}
                      reviewId={review.id}
                      currentPhotoIndex={photoIndices[review.id] ?? 0}
                      onPhotoChange={handlePhotoChange}
                      isCenter={isCenter}
                    />

                    {/* Platform Logo */}
                    <div className="review-logo" style={{
                      marginBottom: '1.25rem',
                      width: isCenter ? '72px' : '56px',
                      height: isCenter ? '72px' : '56px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      margin: '0 auto',
                      background: 'white',
                      border: isCenter ? '3px solid #f1f5f9' : '2px solid #f1f5f9',
                      transition: 'all 0.5s ease',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <img 
                        src={review.image} 
                        alt={`${review.source} review for Aravali Farm - Luxury Farmhouse in Gurgaon`}
                        itemProp="publisher"
                        style={{
                          width: '80%',
                          height: '80%',
                          objectFit: 'contain',
                          padding: '4px'
                        }} 
                        loading="lazy"
                      />
                    </div>

                    {/* Stars - Rating */}
                    <div 
                      itemProp="reviewRating"
                      itemScope
                      itemType="https://schema.org/Rating"
                      className="review-rating"
                      style={{
                        marginBottom: '1.25rem',
                        transition: 'all 0.5s ease'
                      }}
                      aria-label={`${review.rating} out of 5 stars`}
                    >
                      <meta itemProp="ratingValue" content={review.rating.toString()} />
                      <meta itemProp="bestRating" content="5" />
                      <meta itemProp="worstRating" content="1" />
                      <StarRating rating={review.rating} size={isCenter ? '1.4rem' : '1.1rem'} />
                    </div>

                    {/* Review Text */}  
                    <blockquote 
                      itemProp="reviewBody"
                      className="review-text"
                      style={{
                        fontSize: isCenter ? '1.05rem' : '0.9rem',
                        color: '#475569',
                        lineHeight: '1.75',
                        marginBottom: '1.75rem',
                        fontFamily: '"Poppins", "Helvetica Neue", Arial, sans-serif',
                        fontStyle: 'normal',
                        transition: 'all 0.5s ease',
                        display: '-webkit-box',
                        WebkitLineClamp: isCenter ? 5 : 4,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        margin: 0,
                        padding: 0,
                        border: 'none',
                        fontWeight: '400'
                      }}
                    >
                      "{review.reviewText}"
                    </blockquote>

                    {/* Reviewer Name */} 
                    <footer className="review-footer" style={{
                      borderTop: '1px solid #f1f5f9',
                      paddingTop: '1.25rem',
                      marginTop: 'auto'
                    }}>
                      <p 
                        itemProp="author"
                        itemScope
                        itemType="https://schema.org/Person"
                        className="review-author"
                        style={{
                          fontSize: isCenter ? '1.1rem' : '0.95rem',
                          color: '#1e293b',
                          fontWeight: '600',
                          margin: 0,
                          fontFamily: '"Poppins", "Helvetica Neue", Arial, sans-serif',
                          transition: 'all 0.5s ease',
                          letterSpacing: '0.01em'
                        }}
                      >
                        <span itemProp="name">{review.reviewer}</span>
                      </p>
                      <p 
                        className="review-source"
                        style={{
                          fontSize: isCenter ? '0.65rem' : '0.55rem',
                          color: '#94a3b8',
                          margin: '0.5rem 0 0',
                          fontWeight: '200',
                          transition: 'all 0.5s ease',
                          fontFamily: '"Poppins", "Helvetica Neue", Arial, sans-serif',
                        }}
                        aria-label={`Review from ${review.source}`}
                      >
                        via {review.source}
                      </p>
                    </footer>
                  </div>
                </article>
                )
              })}
            </div>
          </div>

          {/* Dots Navigation */}
          <nav 
            aria-label="Review pagination"
            className="dots-navigation"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.75rem',
              marginTop: '3rem',
              alignItems: 'center'
            }}
          >
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to review ${index + 1} of ${reviews.length}`}
                aria-current={currentIndex === index ? 'true' : 'false'}
                type="button"
                style={{
                  width: currentIndex === index ? '32px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  border: 'none',
                  background: currentIndex === index 
                    ? '#64748b' 
                    : '#cbd5e1',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: currentIndex === index 
                    ? '0 2px 8px rgba(100, 116, 139, 0.25)' 
                    : 'none'
                }}
                onMouseOver={(e) => {
                  if (currentIndex !== index) {
                    e.currentTarget.style.background = '#1a5bb6'
                    e.currentTarget.style.width = '16px'
                  }
                }}
                onMouseOut={(e) => {
                  if (currentIndex !== index) {
                    e.currentTarget.style.background = '#cbd5e1'
                    e.currentTarget.style.width = '10px'
                  }
                }}
              />
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile & Tablet Responsive Styles */}
      <style jsx>{`
        /* Desktop - Ensure title stays on one line */
        .reviews-title {
          white-space: nowrap;
        }
        
        /* Tablet Styles */
        @media (max-width: 1024px) {
          .reviews-header {
            padding: clamp(2rem, 5vw, 3rem) 1rem !important;
          }
          
          .reviews-title {
            margin-bottom: 1.25rem !important;
            white-space: nowrap !important;
          }
          
          .reviews-divider {
            margin-bottom: 1.5rem !important;
          }
          
          .reviews-subtitle {
            padding: 0 0.75rem !important;
            font-style: normal !important;
          }
          
          .carousel-wrapper {
            padding: 0 0.5rem !important;
          }
          
          .carousel-arrow-prev {
            left: -30px !important;
            width: 48px !important;
            height: 48px !important;
            font-size: 1.3rem !important;
          }
          
          .carousel-arrow-next {
            right: -30px !important;
            width: 48px !important;
            height: 48px !important;
            font-size: 1.3rem !important;
          }
          
          .review-card {
            flex: 0 0 350px !important;
          }
          
          .review-card-side {
            flex: 0 0 280px !important;
          }
        }
        
        /* Mobile Styles */
        @media (max-width: 768px) {
          section[id="client-reviews"] {
            padding: 3rem 0 !important;
          }
          
          .reviews-header {
            padding: clamp(1.5rem, 4vw, 2.5rem) 0.75rem !important;
          }
          
          .reviews-title {
            margin-bottom: 1rem !important;
            letter-spacing: 0.05em !important;
            white-space: nowrap !important;
            font-size: clamp(1.5rem, 4vw, 2.5rem) !important;
          }
          
          .reviews-divider {
            margin-bottom: 1.25rem !important;
            height: 1.5px !important;
          }
          
          .reviews-subtitle {
            padding: 0 0.5rem !important;
            font-size: clamp(0.875rem, 2vw, 1rem) !important;
            line-height: 1.7 !important;
            font-style: normal !important;
          }
          
          .carousel-wrapper {
            padding: 0 0.5rem !important;
          }
          
          .carousel-arrow-prev {
            left: -20px !important;
            width: 44px !important;
            height: 44px !important;
            font-size: 1.2rem !important;
          }
          
          .carousel-arrow-next {
            right: -20px !important;
            width: 44px !important;
            height: 44px !important;
            font-size: 1.2rem !important;
          }
          
          .carousel-container {
            height: auto !important;
            min-height: 620px !important;
          }
          
          .review-card-slideshow {
            border-radius: 12px !important;
          }
          
          .review-card-slideshow > div:first-of-type {
            height: 180px !important;
          }
          
          .carousel-inner {
            gap: 0.75rem !important;
          }
          
          /* Show only center card on mobile */
          .review-card-side {
            display: none !important;
          }
          
          .review-card-center {
            flex: 0 0 calc(100% - 2rem) !important;
            max-width: calc(100% - 2rem) !important;
          }
          
          .review-card-content {
            padding: 2rem 1.5rem !important;
            transform: scale(1) !important;
            opacity: 1 !important;
          }
          
          .review-logo {
            width: 64px !important;
            height: 64px !important;
            margin-bottom: 1rem !important;
          }
          
          .review-rating {
            margin-bottom: 1rem !important;
          }
          
          .review-text {
            font-size: 0.95rem !important;
            line-height: 1.7 !important;
            margin-bottom: 1.5rem !important;
            -webkit-line-clamp: 6 !important;
          }
          
          .review-author {
            font-size: 1rem !important;
          }
          
          .review-source {
            font-size: 0.6rem !important;
          }
        }
        
        /* Small Mobile Styles */
        @media (max-width: 640px) {
          section[id="client-reviews"] {
            padding: 2.5rem 0 !important;
          }
          
          .reviews-header {
            padding: clamp(1.25rem, 3vw, 2rem) 0.5rem !important;
          }
          
          .reviews-title {
            margin-bottom: 0.875rem !important;
            white-space: nowrap !important;
            font-size: clamp(1.25rem, 3.5vw, 2rem) !important;
          }
          
          .reviews-divider {
            margin-bottom: 1rem !important;
          }
          
          .reviews-subtitle {
            padding: 0 0.25rem !important;
            font-size: 0.875rem !important;
            line-height: 1.65 !important;
            font-style: normal !important;
          }
          
          .carousel-wrapper {
            padding: 0 0.25rem !important;
          }
          
          .carousel-arrow-prev {
            left: -15px !important;
            width: 40px !important;
            height: 40px !important;
            font-size: 1.1rem !important;
          }
          
          .carousel-arrow-next {
            right: -15px !important;
            width: 40px !important;
            height: 40px !important;
            font-size: 1.1rem !important;
          }
          
          .carousel-container {
            min-height: 580px !important;
          }
          
          .review-card-slideshow > div:first-of-type {
            height: 140px !important;
          }
          
          .review-card-center {
            flex: 0 0 calc(100% - 1.5rem) !important;
            max-width: calc(100% - 1.5rem) !important;
          }
          
          .review-card-content {
            padding: 1.75rem 1.25rem !important;
            border-radius: 20px !important;
          }
          
          .review-logo {
            width: 56px !important;
            height: 56px !important;
            margin-bottom: 0.875rem !important;
          }
          
          .review-rating {
            margin-bottom: 0.875rem !important;
          }
          
          .review-text {
            font-size: 0.9rem !important;
            line-height: 1.65 !important;
            margin-bottom: 1.25rem !important;
            -webkit-line-clamp: 5 !important;
          }
          
          .review-footer {
            padding-top: 1rem !important;
          }
          
          .review-author {
            font-size: 0.95rem !important;
          }
          
          .review-source {
            font-size: 0.55rem !important;
            margin-top: 0.375rem !important;
          }
          
          .dots-navigation {
            margin-top: 2rem !important;
            gap: 0.5rem !important;
          }
        }
        
        /* Extra Small Mobile Styles */
        @media (max-width: 480px) {
          .reviews-header {
            padding: 1.25rem 0.25rem !important;
          }
          
          .reviews-title {
            font-size: 1.5rem !important;
            margin-bottom: 0.75rem !important;
            white-space: nowrap !important;
          }
          
          .reviews-subtitle {
            font-size: 0.8rem !important;
            padding: 0 0.5rem !important;
            font-style: normal !important;
          }
          
          .carousel-container {
            min-height: 540px !important;
          }
          
          .review-card-slideshow > div:first-of-type {
            height: 120px !important;
          }
          
          .review-card-center {
            flex: 0 0 calc(100% - 1rem) !important;
            max-width: calc(100% - 1rem) !important;
          }
          
          .review-card-content {
            padding: 1.5rem 1rem !important;
            border-radius: 18px !important;
          }
          
          .review-logo {
            width: 52px !important;
            height: 52px !important;
          }
          
          .review-text {
            font-size: 0.85rem !important;
            -webkit-line-clamp: 4 !important;
          }
          
          .dots-navigation {
            margin-top: 1.5rem !important;
            gap: 0.4rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default ClientReview
