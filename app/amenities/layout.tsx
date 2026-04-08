import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Farmhouse Amenities in Gurgaon | Private Pool, BBQ, Music System | Aravali Farm',
  description: 'Explore premium amenities at our luxury farmhouse in Gurgaon. Private pool, spacious lawns, modern AC rooms, BBQ & bonfire area, premium sound system, WiFi, parking, and more. Perfect for farmhouse for party in Gurgaon.',
  keywords: 'farmhouse amenities in gurgaon, farmhouse with pool in gurgaon, farmhouse with bbq setup, farmhouse with music system, farmhouse with indoor games, private pool farmhouse in delhi ncr, luxury farmhouse amenities gurgaon, farmhouse facilities gurgaon, farmhouse for party amenities',
  openGraph: {
    title: 'Farmhouse Amenities in Gurgaon | Private Pool, BBQ, Music System',
    description: 'Explore premium amenities at our luxury farmhouse in Gurgaon. Private pool, spacious lawns, modern AC rooms, BBQ & bonfire area, and more.',
    type: 'website',
    url: 'https://aravalifarm.com/amenities',
  },
  alternates: {
    canonical: 'https://aravalifarm.com/amenities',
  },
}

export default function AmenitiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

