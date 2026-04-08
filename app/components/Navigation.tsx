'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import './Navigation.css'

interface NavigationProps {
  // No location props needed anymore
}


const Navigation = ({}: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    // { name: 'Blogs', href: '#blogs' },
    // { name: 'Farmhouse', href: '/farmhouse' },`
    { name: 'Call us - +91 7903962473', href: '/contact' },
    
  ]

  const navLinkStyle = (isScrolled: boolean): React.CSSProperties => ({
    fontSize: '0.9rem',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontWeight: '500',
    color: isScrolled ? 'var(--color-text)' : 'white',
    textDecoration: 'none',
    padding: '0.4rem 0',
    transition: 'all 0.3s ease',
    letterSpacing: '0.08em',
  })

  return (
    <nav
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: isScrolled ? 'rgba(250, 248, 245, 0.96)' : 'transparent',
        backdropFilter: isScrolled ? 'saturate(180%) blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 1px 12px rgba(45, 42, 38, 0.08)' : 'none',
        borderBottom: 'none',
        transition: 'all 0.3s ease',
      }}
      className="nav-root"
    >
      {/* Desktop navigation */}
      <div className="nav-desktop-only" style={{ display: 'block' }}>
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '80px',
            }}
          >
            <div>
              <Link
                href="/"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  textDecoration: 'none',
                }}
                onClick={(e) => {
                  if (pathname === '/') {
                    e.preventDefault()
                    router.refresh()
                  }
                }}
              >
                <img
                  src="/Images/Aravali Farm Images/Aravali logo.png"
                  alt="Aravali Farm Logo"
                  style={{
                    width: '200px',
                    height: 'auto',
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </Link>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
              }}
              className="hidden-mobile"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{
                    ...navLinkStyle(isScrolled),
                    padding: '0.5rem 1.5rem',
                    borderRadius: '9999px',
                    border: isScrolled ? '1px solid var(--color-sage-dark)' : '1px solid rgba(255,255,255,0.9)',
                    background: 'transparent',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    textAlign: 'center',
                    minWidth: '100px'
                  }}
                  onMouseOver={(e) => {
                    const target = e.target as HTMLAnchorElement
                    target.style.background = isScrolled ? 'var(--color-sage-dark)' : 'white'
                    target.style.border = isScrolled ? '1px solid var(--color-sage-dark)' : '1px solid white'
                    target.style.color = isScrolled ? 'var(--color-cream)' : 'var(--color-sage-dark)'
                    target.style.transform = 'translateY(-1px)'
                  }}
                  onMouseOut={(e) => {
                    const target = e.target as HTMLAnchorElement
                    target.style.background = 'transparent'
                    target.style.border = isScrolled ? '1px solid var(--color-sage-dark)' : '1px solid rgba(255,255,255,0.9)'
                    target.style.color = isScrolled ? 'var(--color-text)' : 'white'
                    target.style.transform = 'translateY(0)'
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mobile-menu-button" style={{ display: 'none' }}>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                style={{
                  color: isScrolled ? 'var(--color-text)' : 'white',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem',
                }}
              >
                <svg style={{ height: '24px', width: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation - dark rounded bar (image UI) */}
      <div className="nav-mobile-only">
        <div className="nav-mobile-bar">
          <Link
            href="/"
            className="nav-mobile-brand"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault()
                router.refresh()
              }
            }}
          >
            <img
              src="/Images/Aravali Farm Images/Aravali logo.png"
              alt="Aravali Farm Logo"
              className="nav-mobile-logo-img"
            />
          </Link>
          <button
            type="button"
            className="nav-mobile-hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {isMobileMenuOpen && (
          <div className="nav-mobile-dropdown">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="nav-mobile-dropdown-link"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

    </nav>
  )
}

export default Navigation
