import Slideshow from "@/app/components/Slideshow";
import OurProperties from "@/app/components/OurProperties";
import PropertyPhotos from "@/app/components/PropertyPhotos";
import Themes from "@/app/components/Themes";
import ContentSections from "@/app/components/ContentSections";
import ContactForm from "@/app/components/ContactForm";
import TrustedBySection from '@/app/components/TrustedBySection';
import ClientReview from '@/app/components/ClientReview';
import Footer from "@/app/components/Footer";
import Navigation from '@/app/components/Navigation'


export default function GurgaonHome() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Slideshow />
      <div style={{ marginTop: '2rem', position: 'relative', zIndex: 2 }}>
        <OurProperties />
        <PropertyPhotos />
        <Themes />
        {/* <ContentSections /> */}
        {/* <ContactForm /> */}
        <TrustedBySection />
        <ClientReview />
        <Footer />
      </div>
    </div>
  );
}
