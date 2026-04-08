import Slideshow from "@/app/components/Slideshow";
import MomentsSection from "@/app/components/MomentsSection";
import TrustedBySection from "@/app/components/TrustedBySection";
import ClientReview from "@/app/components/ClientReview";
import Footer from "@/app/components/Footer";

export default function NoidaHome() {
  return (
    <>
      <Slideshow />
      <MomentsSection />
      <TrustedBySection />
      <ClientReview />
      <Footer />
    </>
  );
}
