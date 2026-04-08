import './globals.css'
import localFont from 'next/font/local'

const inter = localFont({
  src: '../public/fonts/customfont.ttf',
  variable: '--font-custom'
})

export const metadata = {
  title: 'Luxury Farmhouse in Gurgaon | Private Pool & Party Venue | Aravali Farm',
  description: 'Book premium farmhouses in Gurgaon, Delhi NCR for pool parties, weddings, and weekend stays. Private, green, and luxurious spaces perfect for any occasion. Farmhouse for party in Gurgaon, farmhouse with pool, farmhouse for rent in Gurgaon.',
  keywords: 'farmhouse in gurgaon, farmhouse in delhi, farmhouse in delhi ncr, farmhouse for party in gurgaon, farmhouse for rent in gurgaon, farmhouse for wedding in gurgaon, farmhouse for birthday party in gurgaon, farmhouse with pool in gurgaon, luxury farmhouse in gurgaon, farmhouse near sohna road gurgaon, farmhouse near delhi for weekend stay, private farmhouse near delhi ncr, farmhouse for day outing in gurgaon, farmhouse for corporate party in gurgaon, farmhouse for family get-together in gurgaon, best farmhouse near gurgaon, affordable farmhouse in delhi ncr, farmhouse booking in gurgaon, pool party farmhouse near delhi, farmhouse for couples near delhi, weekend getaway farmhouse gurgaon, farmhouse with bbq setup, farmhouse with music system, luxury stays near gurgaon, farmhouse for photoshoot in gurgaon, farmhouse for picnic near delhi ncr, farmhouse on rent for one day, farmhouse with indoor games, private pool farmhouse in delhi ncr',
  icons: {
    icon: "/favicon.ico",   
  },
  openGraph: {
    title: 'Luxury Farmhouse in Gurgaon | Private Pool & Party Venue | Aravali Farm',
    description: 'Book premium farmhouses in Gurgaon, Delhi NCR for pool parties, weddings, and weekend stays. Private, green, and luxurious spaces perfect for any occasion.',
    type: 'website',
    url: 'https://aravalifarm.com',
    images: [
      {
        url: '/Images/Aravali Farm Images/Pool-1.png',
        width: 1200,
        height: 630,
        alt: 'Luxury Farmhouse in Gurgaon with Private Pool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Farmhouse in Gurgaon | Private Pool & Party Venue',
    description: 'Book premium farmhouses in Gurgaon, Delhi NCR for pool parties, weddings, and weekend stays.',
    images: ['/Images/Aravali Farm Images/Pool-1.png'],
  },
  alternates: {
    canonical: 'https://aravalifarm.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LodgingBusiness', 'EventVenue', 'Hotel'],
    name: 'Aravali Farm - Luxury Farmhouse in Gurgaon',
    description: 'Premium luxury farmhouse in Gurgaon, Delhi NCR with private pool, lush lawns, and modern amenities. Perfect for farmhouse for party in Gurgaon, farmhouse for wedding in Gurgaon, farmhouse for birthday party in Gurgaon, and weekend stays near Delhi.',
    image: 'https://aravalifarm.com/Images/Aravali Farm Images/Pool-1.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Aravali Farm',
      addressLocality: 'Gurgaon',
      addressRegion: 'Haryana',
      postalCode: '122001',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.2918',
      longitude: '76.9234'
    },
    url: 'https://aravalifarm.com',
    telephone: '+91-7903962473',
    priceRange: '₹₹',
    starRating: {
      '@type': 'Rating',
      ratingValue: '4.5',
      bestRating: '5'
    },
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Swimming Pool',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Air Conditioning',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'WiFi',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Parking',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'BBQ Area',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Bonfire',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Sound System',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Garden',
        value: true
      }
    ],
    servesCuisine: 'Indian',
    acceptsReservations: 'https://aravalifarm.com/contact',
    areaServed: {
      '@type': 'City',
      name: 'Gurgaon'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      reviewCount: '50'
    }
  }

  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1NZK6KW20J"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1NZK6KW20J');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
