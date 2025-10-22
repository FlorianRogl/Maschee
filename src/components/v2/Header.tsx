import { useEffect, useState } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);

            const sections = ['home', 'about', 'works', 'philosophy', 'gallery', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 200 && rect.bottom >= 200;
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
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-content">
                <button className="logo" onClick={() => scrollTo('home')}>
                    MasSchee
                </button>
                <nav className="nav">
                    <button
                        className={activeSection === 'about' ? 'active' : ''}
                        onClick={() => scrollTo('about')}
                    >
                        Über uns
                    </button>
                    <button
                        className={activeSection === 'works' ? 'active' : ''}
                        onClick={() => scrollTo('works')}
                    >
                        Unsere Arbeiten
                    </button>
                    <button
                        className={activeSection === 'philosophy' ? 'active' : ''}
                        onClick={() => scrollTo('philosophy')}
                    >
                        Philosophie
                    </button>
                    <button
                        className={activeSection === 'gallery' ? 'active' : ''}
                        onClick={() => scrollTo('gallery')}
                    >
                        Galerie
                    </button>
                    <button
                        className={activeSection === 'contact' ? 'active' : ''}
                        onClick={() => scrollTo('contact')}
                    >
                        Kontakt
                    </button>
                </nav>
            </div>
        </header>
    );
}