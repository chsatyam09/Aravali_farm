'use client'
 
import { useEffect, useState } from 'react'

type Reel = {
  id: number
  title: string
  subtitle: string
  videoUrl: string
  badge?: string
}

// Random videos from the internet – use URLs that load reliably (e.g. from any origin).
// Replace with your own hosted reels later.
const DEMO_VIDEOS = [
 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerWalks.mp4',
 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
]

function getRandomReels(): Reel[] {
 const shuffled = [...DEMO_VIDEOS].sort(() => Math.random() - 0.5)
 return shuffled.slice(0, 5).map((videoUrl, i) => ({
   id: i + 1,
   title: `Reel ${i + 1}`,
   subtitle: 'Guest moment',
   videoUrl,
 }))
}

export default function TrustedBySection() {
 const [reels] = useState<Reel[]>(() => getRandomReels())
 const [currentIndex, setCurrentIndex] = useState(0)
 const reelsCount = reels.length

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % reelsCount)
    }, 7000)

    return () => clearInterval(interval)
  }, [reelsCount])

  const goTo = (index: number) => {
    const safeIndex = (index + reelsCount) % reelsCount
    setCurrentIndex(safeIndex)
  }

  const next = () => goTo(currentIndex + 1)
  const prev = () => goTo(currentIndex - 1)

  return (
    <section
      id="trusted-by"
      aria-label="Guest reels and social proof"
      style={{
       padding: '4.5rem 0 3rem',
       background: 'transparent',
       position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '0 1.5rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Header */}
        <header
          className="trusted-header"
          style={{
            textAlign: 'center',
            marginBottom: '2.5rem'
          }}
        >
          <h2
            className="trusted-title"
            style={{
              fontSize: 'clamp(2.1rem, 4vw, 3rem)',
              fontWeight: 700,
              marginBottom: 0,
              color: '#111827',
              letterSpacing: '0.02em',
              fontFamily: '"SF Pro Display", "system-ui", -apple-system, BlinkMacSystemFont'
            }}
          >
            Trusted by 130k+ People
          </h2>
        </header>

        {/* Carousel */}
        <div
          className="trusted-carousel-wrapper"
          style={{
            position: 'relative',
            padding: '0 1.5rem'
          }}
        >
          {/* Reels row */}
          <div
            className="trusted-carousel-inner"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1.75rem',
              maxWidth: '1040px',
              margin: '0 auto'
            }}
          >
            {[-1, 0, 1].map(offset => {
              const reelIndex =
                (currentIndex + offset + reelsCount) % reelsCount
              const reel = reels[reelIndex]
              const isCenter = offset === 0

              return (
                <article
                  key={`${reel.id}-${offset}`}
                  className={isCenter ? 'trusted-card-center' : 'trusted-card'}
                  style={{
                    flex: isCenter ? '0 0 320px' : '0 0 260px',
                    minWidth: isCenter ? 320 : 260,
                    opacity: isCenter ? 1 : 0.6,
                    transform: isCenter ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.92)',
                    transition:
                      'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.45s ease',
                    cursor: isCenter ? 'default' : 'pointer'
                  }}
                  onClick={() => !isCenter && goTo(reelIndex)}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      minHeight: '240px',
                      overflow: 'hidden',
                      backgroundColor: '#0a0a0a',
                      borderRadius: '20px'
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        paddingTop: '140%',
                        position: 'relative'
                      }}
                    >
                      <video
                        src={reel.videoUrl}
                        muted
                        loop
                        playsInline
                        autoPlay
                        preload="auto"
                        style={{
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Dots + arrows */}
          <nav
            aria-label="Reel pagination"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              marginTop: '2.5rem'
            }}
          >
            <button
              type="button"
              onClick={prev}
              aria-label="Previous reel"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '999px',
                border: '1px solid #e5e7eb',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 10px 20px rgba(15,23,42,0.08)',
                color: '#111827',
                fontSize: '1.1rem'
              }}
            >
              ‹
            </button>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.45rem',
                padding: '0.55rem 1.2rem',
                borderRadius: '999px',
                backgroundColor: '#ffffff',
                boxShadow: '0 12px 30px rgba(15,23,42,0.08)',
                border: '1px solid #e5e7eb'
              }}
            >
              {reels.map((reel, index) => {
                const isActive = index === currentIndex
                return (
                  <button
                    key={reel.id}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Go to reel ${index + 1} of ${reelsCount}`}
                    aria-current={isActive ? 'true' : 'false'}
                    style={{
                      width: isActive ? '16px' : '8px',
                      height: '8px',
                      borderRadius: '999px',
                      border: 'none',
                      backgroundColor: isActive ? '#111827' : '#d1d5db',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  />
                )
              })}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next reel"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '999px',
                border: '1px solid #e5e7eb',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 10px 20px rgba(15,23,42,0.08)',
                color: '#111827',
                fontSize: '1.1rem'
              }}
            >
              ›
            </button>
          </nav>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          #trusted-by {
            padding: 3rem 0 2.5rem !important;
          }
          .trusted-header {
            margin-bottom: 2rem !important;
          }
          .trusted-title {
            font-size: clamp(1.8rem, 5vw, 2.3rem) !important;
          }
          .trusted-carousel-inner {
            gap: 1rem !important;
          }
          .trusted-card {
            display: none !important;
          }
          .trusted-card-center {
            flex: 0 0 280px !important;
          }
          .trusted-carousel-wrapper {
            padding: 0 0.5rem !important;
          }
        }

        @media (max-width: 480px) {
          #trusted-by {
            padding: 2.5rem 0 2rem !important;
          }
          .trusted-card-center {
            flex: 0 0 260px !important;
          }
        }
      `}</style>
    </section>
  )
}

