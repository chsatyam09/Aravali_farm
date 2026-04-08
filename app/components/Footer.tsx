'use client'

import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const footerBg = 'var(--color-footer-bg)'
  const textPrimary = 'var(--color-footer-text)'
  const textMuted = 'var(--color-footer-muted)'
  const linkHover = 'var(--color-accent-soft)'
  const borderColor = 'rgba(245, 242, 237, 0.15)'
  const whatsAppBg = 'var(--color-whatsapp)'

  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .footer-main-content {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            padding: 2rem 1rem !important;
          }
          .footer-brand {
            text-align: center !important;
            align-items: center !important;
          }
          .footer-right-cols {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          .footer-col {
            align-items: center !important;
          }
          .footer-bottom-text {
            flex-direction: column !important;
            gap: 0.5rem !important;
            text-align: center !important;
          }
        }
      `}</style>

      <footer
        style={{
          backgroundColor: footerBg,
          color: textPrimary,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          width: '100%',
          position: 'relative',
        }}
      >
        {/* Main Footer Content */}
        <div
          className="footer-main-content"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '3rem',
            padding: '3rem 2rem',
            maxWidth: '1200px',
            margin: '0 auto',
            alignItems: 'start',
          }}
        >
          {/* Left: Branding */}
          <div
            className="footer-brand"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '0.35rem',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: '700',
                fontFamily: 'Georgia, "Times New Roman", serif',
                color: textPrimary,
                margin: 0,
                letterSpacing: '0.02em',
              }}
            >
              FarmStay Booking
            </h2>
            <p
              style={{
                fontSize: '0.95rem',
                color: textMuted,
                margin: 0,
                fontWeight: '400',
              }}
            >
              1BHK · 2BHK · 3BHK · 4BHK
            </p>
            <p
              style={{
                fontSize: '0.85rem',
                color: textMuted,
                margin: 0,
              }}
            >
              (Pool in Every Farmhouse)
            </p>
          </div>

          {/* Right: Quick Links + Get in Touch */}
          <div
            className="footer-right-cols"
            style={{
              display: 'flex',
              gap: '3rem',
            }}
          >
            <div
              className="footer-col"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '0.75rem',
              }}
            >
              <h3
                style={{
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: textPrimary,
                  margin: 0,
                  letterSpacing: '0.08em',
                }}
              >
                QUICK LINKS
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <Link
                  href="/"
                  style={{
                    color: textMuted,
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = linkHover
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = textMuted
                  }}
                >
                  Home
                </Link>
                <Link
                  href="/farmhouse"
                  style={{
                    color: textMuted,
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = linkHover
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = textMuted
                  }}
                >
                  Farmhouse
                </Link>
                <Link
                  href="/contact"
                  style={{
                    color: textMuted,
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = linkHover
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = textMuted
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div
              className="footer-col"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '0.75rem',
              }}
            >
              <h3
                style={{
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: textPrimary,
                  margin: 0,
                  letterSpacing: '0.08em',
                }}
              >
                GET IN TOUCH
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <a
                  href="https://wa.me/917903962473"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: textMuted,
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = linkHover
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = textMuted
                  }}
                >
                  WhatsApp
                </a>
                <a
                  href="tel:+917903962473"
                  style={{
                    color: textMuted,
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = linkHover
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = textMuted
                  }}
                >
                  Call
                </a>
                <a
                  href="https://www.instagram.com/farmstaybooking/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: textMuted,
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = linkHover
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = textMuted
                  }}
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div
          style={{
            borderTop: `1px solid ${borderColor}`,
            padding: '1rem 2rem',
          }}
        >
          <div
            className="footer-bottom-text"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              maxWidth: '1200px',
              margin: '0 auto',
              fontSize: '0.75rem',
              color: textMuted,
            }}
          >
            © 2026{' '}
            <a
              href="https://www.farmstaybooking.fun"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: textMuted,
                textDecoration: 'none',
                margin: '0 0.2rem',
                transition: 'color 0.2s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = linkHover
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = textMuted
              }}
            >
              www.farmstaybooking.fun
            </a>
            {' - All rights reserved - Choudhary\'s Family'}
          </div>
        </div>

        {/* Floating WhatsApp button */}
        <a
          href="https://wa.me/917903962473"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          style={{
            position: 'fixed',
            bottom: '1.5rem',
            right: '1.5rem',
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: whatsAppBg,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(45, 138, 110, 0.45)',
            zIndex: 999,
            textDecoration: 'none',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)'
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(45, 138, 110, 0.5)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = '0 4px 14px rgba(45, 138, 110, 0.45)'
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </footer>
    </>
  )
}

export default Footer
