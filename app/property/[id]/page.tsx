import PropertyDetails from '@/app/components/PropertyDetails'
import Footer from '@/app/components/Footer'
// Generate static params for all properties
export async function generateStaticParams() {
  const propertyIds = ['1', '2', '3', '4', '5', '6', '7']
  
  return propertyIds.map((id) => ({
    id: id,
  }))
}

export default function PropertyPage({ params }: { params: { id: string } }) {
  const propertyId = params.id

  return (
    <main style={{ background: 'white', minHeight: '100vh' }}>
      <div>
        <PropertyDetails propertyId={propertyId} />
         
      </div>
      <Footer />
      
    </main>
  )
}