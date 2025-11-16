import { useEffect, useState } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { id: 'atelier', label: 'Atelier' },
        { id: 'about', label: 'Über Mich' },
        { id: 'works', label: 'Arbeiten' },
        { id: 'philosophy', label: 'Philosophie' },
        { id: 'gallery', label: 'Galerie' },
        { id: 'contact', label: 'Kontakt' }
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
                        : 'bg-transparent py-4'
                }`}
            >
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <button
                            onClick={() => scrollTo('home')}
                            className="flex items-center gap-2 sm:gap-3 group transition-all hover:opacity-80"
                        >
                            <div className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                                isScrolled ? 'w-10 h-10 sm:w-12 sm:h-12' : 'w-12 h-12 sm:w-16 sm:h-16'
                            }`}>
                                <img
                                    src="/logo.jpg"
                                    alt="MaSchee Logo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className={`font-serif tracking-wider transition-all duration-300 ${
                                isScrolled
                                    ? 'text-base sm:text-lg text-[#704214]'
                                    : 'text-lg sm:text-xl text-white drop-shadow-lg'
                            }`}>
                                MaSchee
                            </span>
                        </button>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                            {navItems.map(item => (
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
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`lg:hidden p-2 transition-colors ${
                                isScrolled ? 'text-[#704214]' : 'text-white'
                            }`}
                            aria-label="Menu"
                        >
                            {isMobileMenuOpen ? (
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
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
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
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>

                {/* Menu Panel */}
                <div
                    className={`absolute top-[72px] right-0 bottom-0 w-full sm:w-80 bg-white shadow-2xl transform transition-transform duration-300 ${
                        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <nav className="flex flex-col p-6 gap-2">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className={`text-left px-4 py-4 rounded-lg transition-all duration-200 ${
                                    activeSection === item.id
                                        ? 'bg-gradient-to-r from-[#D4A418] to-[#B8900F] text-white font-medium'
                                        : 'text-[#704214] hover:bg-[#FDF8F0] hover:text-[#D4A418]'
                                }`}
                            >
                                <span className="flex items-center justify-between">
                                    {item.label}
                                    {activeSection === item.id && (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    )}
                                </span>
                            </button>
                        ))}
                    </nav>

                    {/* Mobile Menu Footer */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#D4A418]/20">
                        <p className="text-sm text-[#8B6B47] text-center">
                            Textile Kunst aus St. Georgen
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}