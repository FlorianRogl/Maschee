import { useState, useEffect } from 'react';
import {Scissors} from "lucide-react";
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenu(false);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-3 md:py-5' : 'bg-gradient-to-b from-black/50 to-transparent py-5 md:py-7'}`}>
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Scissors className={`${scrolled ? 'text-amber-700' : 'text-amber-400'} w-5 md:w-6 h-5 md:h-6`} />
                    <h1 className={`text-2xl md:text-3xl font-light tracking-widest ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                        Ma<span className="ml-1 font-normal">Schee</span>
                    </h1>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenu(!mobileMenu)}
                    className="md:hidden"
                >
                    <div className={`space-y-1 ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                        <div className="w-6 h-0.5 bg-current"></div>
                        <div className="w-6 h-0.5 bg-current"></div>
                        <div className="w-6 h-0.5 bg-current"></div>
                    </div>
                </button>

                <div className={`hidden md:flex space-x-6 lg:space-x-10 text-xs lg:text-sm uppercase tracking-wider ${scrolled ? 'text-gray-700' : 'text-white/90'}`}>
                    <button onClick={() => scrollToSection('home')} className="hover:text-amber-600 transition-all hover:scale-105 font-light">Willkommen</button>
                    <button onClick={() => scrollToSection('about')} className="hover:text-amber-600 transition-all hover:scale-105 font-light">Über mich</button>
                    <button onClick={() => scrollToSection('services')} className="hover:text-amber-600 transition-all hover:scale-105 font-light">Mein Handwerk</button>
                    <button onClick={() => scrollToSection('gallery')} className="hover:text-amber-600 transition-all hover:scale-105 font-light">Kreationen</button>
                    <button onClick={() => scrollToSection('testimonials')} className="hover:text-amber-600 transition-all hover:scale-105 font-light">Kundenstimmen</button>
                    <button onClick={() => scrollToSection('contact')} className="hover:text-amber-600 transition-all hover:scale-105 font-light">Atelier</button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenu && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-xl">
                    <div className="flex flex-col space-y-4 p-6 text-gray-700">
                        <button onClick={() => scrollToSection('home')} className="text-left hover:text-amber-600 transition-all font-light">Willkommen</button>
                        <button onClick={() => scrollToSection('about')} className="text-left hover:text-amber-600 transition-all font-light">Über mich</button>
                        <button onClick={() => scrollToSection('services')} className="text-left hover:text-amber-600 transition-all font-light">Mein Handwerk</button>
                        <button onClick={() => scrollToSection('gallery')} className="text-left hover:text-amber-600 transition-all font-light">Kreationen</button>
                        <button onClick={() => scrollToSection('testimonials')} className="text-left hover:text-amber-600 transition-all font-light">Kundenstimmen</button>
                        <button onClick={() => scrollToSection('contact')} className="text-left hover:text-amber-600 transition-all font-light">Atelier</button>
                    </div>
                </div>
            )}
        </nav>
    );
};


export default Navbar;
