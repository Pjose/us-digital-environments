import BrandBar from "./components/BrandBar";
import ContactSection from "./components/ContactSection";
import GallerySection from "./components/GallerySection";
import HeroSlider from "./components/HeroSlider";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TrustSection from "./components/TrustSection";

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-[#080e1a]">
            <HeroSlider />
            <ServicesSection />
            <TrustSection />
            <GallerySection />
            <TestimonialsSection />
            <BrandBar />
            <ContactSection />
        </div>
    )
}

export default LandingPage