import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Farmhouse for Party in Gurgaon | Private Pool & Party Venue | Aravali Farm',
  description: 'Book the best farmhouse for party in Gurgaon. Perfect for birthday parties, weddings, corporate events, and weekend getaways. Private pool, spacious lawns, premium amenities. Farmhouse with pool in Gurgaon, farmhouse for rent in Gurgaon, farmhouse for wedding in Gurgaon.',
  keywords: 'farmhouse for party in gurgaon, farmhouse in gurgaon, farmhouse in delhi ncr, farmhouse for rent in gurgaon, farmhouse for wedding in gurgaon, farmhouse for birthday party in gurgaon, farmhouse with pool in gurgaon, luxury farmhouse in gurgaon, farmhouse near delhi for weekend stay, private farmhouse near delhi ncr, farmhouse for corporate party in gurgaon, pool party farmhouse near delhi, farmhouse with music system, farmhouse booking in gurgaon, best farmhouse near gurgaon',
  openGraph: {
    title: 'Farmhouse for Party in Gurgaon | Private Pool & Party Venue',
    description: 'Book the best farmhouse for party in Gurgaon. Perfect for birthday parties, weddings, corporate events, and weekend getaways.',
    type: 'website',
    url: 'https://aravalifarm.com/farmhouse-for-party-in-gurgaon',
  },
  alternates: {
    canonical: 'https://aravalifarm.com/farmhouse-for-party-in-gurgaon',
  },
}

export default function PartyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

