import HeroSection from "./HeroSection.tsx";
import GallerySection from "./GallerySection.tsx";
import Navbar from "./Navbar.tsx";
import ServicesSection from "./ServiceSection.tsx";
import ContactSection from "./ContactSection.tsx";
import Footer from "./Footer.tsx";
import AboutSection from "./AboutSection.tsx";
import TestimonialsSection from "./TestemonialSection.tsx";
import PhilosophySection from "./PhilosophySection.tsx";

const Homepage = () => {
    return (
        <div className="min-h-screen bg-white">
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }
            `}</style>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <PhilosophySection />
            <ServicesSection />
            <GallerySection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default Homepage