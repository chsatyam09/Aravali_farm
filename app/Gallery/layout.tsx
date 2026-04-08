import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Farmhouse Gallery in Gurgaon | Photos & Images | Aravali Farm',
  description: 'Browse stunning photos of our luxury farmhouse in Gurgaon. See private pool, lush lawns, modern rooms, party areas, and amenities. Perfect for farmhouse for party in Gurgaon, farmhouse for wedding in Gurgaon.',
  keywords: 'farmhouse photos gurgaon, farmhouse gallery gurgaon, farmhouse images delhi ncr, luxury farmhouse photos, farmhouse with pool images, farmhouse for party photos, farmhouse for wedding images, farmhouse near delhi photos',
  openGraph: {
    title: 'Farmhouse Gallery in Gurgaon | Photos & Images',
    description: 'Browse stunning photos of our luxury farmhouse in Gurgaon. See private pool, lush lawns, modern rooms, and party areas.',
    type: 'website',
    url: 'https://aravalifarm.com/Gallery',
  },
  alternates: {
    canonical: 'https://aravalifarm.com/Gallery',
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

