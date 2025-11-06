import { useEffect, useState } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = ['home', 'atelier', 'about', 'works', 'philosophy', 'gallery', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
                    : 'bg-transparent py-4'
            }`}
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <button
                        onClick={() => scrollTo('home')}
                        className="flex items-center gap-3 group transition-all hover:opacity-80"
                    >
                        <div className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                            isScrolled ? 'w-12 h-12' : 'w-16 h-16'
                        }`}>
                            <img
                                src="/logo.jpg"
                                alt="MaSchee Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className={`font-serif tracking-wider transition-all duration-300 ${
                            isScrolled
                                ? 'text-lg text-[#704214]'
                                : 'text-xl text-white drop-shadow-lg'
                        }`}>
                            MaSchee
                        </span>
                    </button>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {[
                            { id: 'atelier', label: 'Atelier' },
                            { id: 'about', label: 'Über Mich' },
                            { id: 'works', label: 'Arbeiten' },
                            { id: 'philosophy', label: 'Philosophie' },
                            { id: 'gallery', label: 'Galerie' },
                            { id: 'contact', label: 'Kontakt' }
                        ].map(item => (
                            <button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className={`text-sm tracking-wide transition-all duration-300 relative py-2 ${
                                    activeSection === item.id
                                        ? isScrolled
                                            ? 'text-[#D4A418] font-medium'
                                            : 'text-white font-medium'
                                        : isScrolled
                                            ? 'text-[#704214] hover:text-[#D4A418]'
                                            : 'text-white/90 hover:text-white'
                                }`}
                            >
                                {item.label}
                                {activeSection === item.id && (
                                    <span className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                                        isScrolled ? 'bg-[#D4A418]' : 'bg-white'
                                    }`}></span>
                                )}
                            </button>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden p-2 transition-colors ${
                            isScrolled ? 'text-[#704214]' : 'text-white'
                        }`}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}