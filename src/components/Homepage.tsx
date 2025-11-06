import Header from './Header';
import Hero from './Hero';
import Atelier from './Atelier';
import About from './About';
import Services from './Services';
import Values from './Values';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';

export default function Homepage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Hero />
            <Atelier />
            <About />
            <Services />
            <Values />
            <Gallery />
            <Contact />
            <Footer />
        </div>
    );
}