import { useEffect, useState } from 'react';
import pic1 from '../assets/gallery-atelier.jpg';
import pic2 from '../assets/gallery-detail.jpg';
import pic3 from '../assets/gallery-felt-art.jpg';
import pic4 from '../assets/gallery-leather.jpg';
import pic5 from '../assets/gallery-wall-art.jpg';
import pic6 from '../assets/gallery-patchwork.jpg';
import pic7 from '../assets/hero-textile-art.jpg';

export default function MaSchee() {
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

    // Project 1 data
    const works = [
        {
            title: 'Kunstobjekte',
            description: 'Textile Kunstwerke, die durch ihre Einzigartigkeit und künstlerische Gestaltung beeindrucken. Jedes Objekt ein Statement aus Stoff und Form.',
            image: pic5
        },
        {
            title: 'Filzobjekte',
            description: 'Vom traditionellen Handwerk zur modernen Kunst. Dreidimensionale Filzkreationen mit besonderem Charakter und einzigartiger Haptik.',
            image: pic3
        },
        {
            title: 'Leder-Arbeiten',
            description: 'Hochwertige Leder-Objekte und Accessoires, gefertigt mit präziser Handarbeit und Gespür für Material und Form.',
            image: pic4
        },
        {
            title: 'Patchwork',
            description: 'Meisterhafte Zusammenstellung von Stoffen und Mustern. Traditionelle Techniken treffen auf zeitgenössisches Design.',
            image: pic6
        },
        {
            title: 'Accessoires',
            description: 'Ponchos, Bindegürtel und textile Begleiter – individuell gestaltet und mit Liebe zum Detail gefertigt.',
            image: pic2
        },
        {
            title: 'Kunstmotive',
            description: 'Individuell bemalte Objekte mit künstlerischen Motiven. Textile Leinwände für persönliche Ausdrucksformen.',
            image: pic7
        }
    ];

    const philosophyItems = [
        {
            number: '01',
            title: 'Einzigartigkeit',
            text: 'Kein Stück gleicht dem anderen. Jedes Werk ist ein Original, geprägt von individueller Handschrift und künstlerischer Vision.',
            image: pic1
        },
        {
            number: '02',
            title: 'Handarbeit',
            text: 'Echtes Handwerk statt Massenproduktion. Spürbare Qualität, die von Generation zu Generation weitergegeben wird.',
            image: pic3
        },
        {
            number: '03',
            title: 'Liebe zum Detail',
            text: 'Jeder Stich, jede Naht wird mit größter Sorgfalt ausgeführt. Perfektion liegt in den kleinen Dingen.',
            image: pic2
        },
        {
            number: '04',
            title: 'Nachhaltigkeit',
            text: 'Zeitlose Qualität statt schnelllebiger Trends. Objekte, die überdauern und Geschichten erzählen.',
            image: pic6
        }
    ];

    const portfolioItems = [
        {
            title: 'Filzkunst',
            category: 'Objekt',
            size: 'large',
            image: pic3
        },
        {
            title: 'Patchwork Kollektion',
            category: 'Serie',
            size: 'medium',
            image: pic6
        },
        {
            title: 'Leder Accessoire',
            category: 'Unikat',
            size: 'medium',
            image: pic4
        },
        {
            title: 'Textile Wandgestaltung',
            category: 'Kunstwerk',
            size: 'large',
            image: pic5
        },
        {
            title: 'Kunstmotiv',
            category: 'Detail',
            size: 'medium',
            image: pic7
        },
        {
            title: 'Atelier Impression',
            category: 'Einblick',
            size: 'medium',
            image: pic1
        },
        {
            title: 'Handwerksdetail',
            category: 'Detail',
            size: 'medium',
            image: pic2
        }
    ];

    return (
        <div className="min-h-screen bg-[hsl(40,25%,97%)] text-[hsl(30,15%,15%)]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500&family=Inter:wght@300;400;500&display=swap');
                
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                html {
                    scroll-behavior: smooth;
                }
                
                body {
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                    line-height: 1.6;
                    font-weight: 300;
                }
                
                h1, h2, h3, h4, h5, h6 {
                    font-family: 'Playfair Display', serif;
                    font-weight: 400;
                    line-height: 1.3;
                    letter-spacing: 0.02em;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes scrollAnimation {
                    0%, 100% {
                        transform: translateY(-10px);
                        opacity: 0;
                    }
                    50% {
                        transform: translateY(10px);
                        opacity: 1;
                    }
                }

                .animate-fade-in-up {
                    animation: fadeInUp 1s ease;
                }

                .animate-scroll {
                    animation: scrollAnimation 2s ease-in-out infinite;
                }
            `}</style>

            {/* Header - FROM PROJECT 2 */}
            <header className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-[400ms] ${
                isScrolled
                    ? 'bg-[hsla(40,25%,97%,0.95)] shadow-[0_2px_20px_hsla(30,15%,15%,0.05)] py-4'
                    : 'bg-transparent py-8'
            } ${isScrolled ? 'backdrop-blur-[10px]' : ''}`}>
                <div className="max-w-[1400px] mx-auto px-12 flex justify-between items-center">
                    <button
                        onClick={() => scrollTo('home')}
                        className="text-2xl font-light tracking-[0.15em] text-[hsl(30,15%,15%)] bg-transparent border-none cursor-pointer transition-opacity duration-300 hover:opacity-70"
                    >
                        MaSchee
                    </button>
                    <nav className="flex gap-12">
                        {[
                            { id: 'about', label: 'Über uns' },
                            { id: 'works', label: 'Unsere Arbeiten' },
                            { id: 'philosophy', label: 'Philosophie' },
                            { id: 'gallery', label: 'Galerie' },
                            { id: 'contact', label: 'Kontakt' }
                        ].map(item => (
                            <button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className={`bg-transparent border-none text-sm tracking-[0.05em] cursor-pointer relative py-2 transition-colors duration-300 ${
                                    activeSection === item.id
                                        ? 'text-[hsl(30,15%,15%)] after:w-full'
                                        : 'text-[hsl(30,10%,45%)] after:w-0'
                                } hover:text-[hsl(30,15%,15%)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[hsl(185,60%,35%)] after:transition-all after:duration-300 hover:after:w-full`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </div>
            </header>

            {/* ==================== PROJECT 1 SECTIONS START ==================== */}

            {/* Hero Section - PROJECT 1 */}
            <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={pic5}
                        alt="Textile Handwerkskunst"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[hsla(40,25%,97%,0.3)] to-[hsla(40,25%,97%,0.6)]"></div>
                </div>
                <div className="relative z-10 text-center px-8 animate-fade-in-up">
                    <h1 className="text-[clamp(3rem,8vw,6rem)] font-light tracking-[0.2em] text-[hsl(30,15%,15%)] mb-8">
                        MaSchee
                    </h1>
                    <div className="w-20 h-[1px] bg-[hsl(185,60%,35%)] mx-auto mb-8"></div>
                    <p className="text-[clamp(1.2rem,2.5vw,1.8rem)] font-light text-[hsl(30,15%,15%)] mb-4 tracking-[0.05em]">
                        Jedes Modell ein Unikat – mit Liebe zum Detail
                    </p>
                    <p className="text-[clamp(0.9rem,1.5vw,1.1rem)] text-[hsl(30,10%,45%)] tracking-[0.1em] uppercase">
                        Textilkunst aus St. Georgen
                    </p>
                </div>
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
                    <div className="w-[1px] h-[60px] bg-gradient-to-b from-transparent via-[hsl(185,60%,35%)] to-transparent animate-scroll"></div>
                </div>
            </section>

            {/* About Section - PROJECT 1 */}
            <section id="about" className="py-40">
                <div className="max-w-[900px] mx-auto px-16">
                    <div className="text-center mb-20">
                        <span className="inline-block text-[0.75rem] font-medium tracking-[0.3em] uppercase text-[hsl(185,60%,35%)] mb-4">
                            Unsere Geschichte
                        </span>
                        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-light mb-8 text-[hsl(30,15%,15%)]">
                            Über MaSchee
                        </h2>
                        <div className="w-[60px] h-[1px] bg-[hsl(185,60%,35%)] mx-auto my-16"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-20">
                        <div className="relative">
                            <img
                                src={pic1}
                                alt="Textilhandwerk im Atelier"
                                className="w-full rounded-lg"
                            />
                        </div>

                        <div>
                            <p className="text-[1.25rem] text-[hsl(30,15%,15%)] mb-8 leading-[1.8] font-normal">
                                Von klein auf wurde mir das Handwerk der Textilkunst von meiner Mutter,
                                ebenfalls gelernte Schneiderin, beigebracht. Schneidern, Sticken, Häkeln
                                und Stricken – diese Fertigkeiten sind tief in mir verwurzelt.
                            </p>

                            <p className="text-[hsl(30,10%,45%)] mb-8 leading-[1.9]">
                                Die Freude, aus Stoff und Idee etwas Einzigartiges zu schaffen,
                                begleitet mich seit meiner Kindheit. Jedes Stück, das mein Atelier verlässt,
                                ist ein Unikat – gefertigt mit höchster Sorgfalt und ungeteilter Aufmerksamkeit
                                für jedes Detail.
                            </p>

                            <div className="my-10 border-l-[3px] border-[hsl(185,60%,35%)] pl-8">
                                <div className="text-[3rem] leading-none text-[hsl(185,60%,35%)] mb-2">"</div>
                                <p className="text-[1.125rem] italic text-[hsl(30,15%,15%)] leading-[1.8]">
                                    Visionen sind da, um sie umzusetzen.<br />
                                    Missionen sind da, um erfüllt zu werden.
                                </p>
                            </div>

                            <p className="text-[hsl(30,10%,45%)] leading-[1.9]">
                                In meinem Atelier in St. Georgen verbinde ich traditionelle Handwerkskunst
                                mit künstlerischer Vision. Filzobjekte, Patchwork-Kreationen, Leder-Accessoires –
                                jedes Werk erzählt seine eigene Geschichte und trägt die Handschrift echter
                                Handarbeit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services/Works Section - PROJECT 1 */}
            <section id="works" className="py-40 bg-[hsl(0,0%,100%)]">
                <div className="max-w-[1200px] mx-auto px-8">
                    <div className="text-center mb-20">
                        <span className="inline-block text-[0.75rem] font-medium tracking-[0.3em] uppercase text-[hsl(185,60%,35%)] mb-4">
                            Was wir erschaffen
                        </span>
                        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-light mb-8 text-[hsl(30,15%,15%)]">
                            Unsere Arbeiten
                        </h2>
                        <div className="w-[60px] h-[1px] bg-[hsl(185,60%,35%)] mx-auto mb-8"></div>
                        <p className="text-[clamp(1rem,2vw,1.25rem)] text-[hsl(30,10%,45%)] max-w-[700px] mx-auto leading-[1.9]">
                            Mit Leidenschaft und Präzision verwandeln wir textile Materialien in kunstvolle Objekte.
                            Jede Arbeit ist ein Unikat, gefertigt mit jahrzehntelanger Erfahrung.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {works.map((work, index) => (
                            <div key={index} className="group">
                                <div className="relative overflow-hidden rounded-lg mb-6">
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[hsla(30,15%,15%,0.7)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div>
                                    <h3 className="text-[1.5rem] font-normal mb-4 text-[hsl(30,15%,15%)]">
                                        {work.title}
                                    </h3>
                                    <p className="text-[hsl(30,10%,45%)] leading-[1.8]">
                                        {work.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values/Philosophy Section - PROJECT 1 */}
            <section id="philosophy" className="py-40 bg-[hsl(40,25%,97%)]">
                <div className="max-w-[900px] mx-auto px-16">
                    <div className="text-center mb-20">
                        <span className="inline-block text-[0.75rem] font-medium tracking-[0.3em] uppercase text-[hsl(185,60%,35%)] mb-4">
                            Wofür wir stehen
                        </span>
                        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-light mb-8 text-[hsl(30,15%,15%)]">
                            Unsere Philosophie
                        </h2>
                        <div className="w-[60px] h-[1px] bg-[hsl(185,60%,35%)] mx-auto my-16"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        {philosophyItems.map((item, index) => (
                            <div key={index}>
                                <div className="mb-8 overflow-hidden rounded-lg">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                                <div className="text-[2rem] font-extralight text-[hsl(185,60%,35%)] opacity-40 mb-4">
                                    {item.number}
                                </div>
                                <h3 className="text-[1.5rem] font-normal mb-4 text-[hsl(30,15%,15%)]">
                                    {item.title}
                                </h3>
                                <p className="text-[hsl(30,10%,45%)] leading-[1.9]">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center bg-gradient-to-br from-[hsla(185,60%,35%,0.05)] to-[hsla(40,85%,55%,0.05)] p-12 rounded-lg border border-[hsla(185,60%,35%,0.2)]">
                        <p className="text-[1.2rem] text-[hsl(30,15%,15%)] leading-[1.9] m-0">
                            Textile Gestaltung ist für uns mehr als Arbeit – es ist Berufung.
                            In jedem Objekt steckt nicht nur handwerkliches Können, sondern auch
                            Herzblut, Geduld und die Freude am Schaffen.
                        </p>
                    </div>
                </div>
            </section>

            {/* Portfolio/Gallery Section - PROJECT 1 */}
            <section id="gallery" className="py-40 bg-[hsl(0,0%,100%)]">
                <div className="max-w-[1600px] mx-auto px-16">
                    <div className="text-center mb-20">
                        <span className="inline-block text-[0.75rem] font-medium tracking-[0.3em] uppercase text-[hsl(185,60%,35%)] mb-4">
                            Unsere Kreationen
                        </span>
                        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-light mb-8 text-[hsl(30,15%,15%)]">
                            Galerie
                        </h2>
                        <div className="w-[60px] h-[1px] bg-[hsl(185,60%,35%)] mx-auto mb-8"></div>
                        <p className="text-[clamp(1rem,2vw,1.25rem)] text-[hsl(30,10%,45%)] max-w-[700px] mx-auto leading-[1.9]">
                            Ein Einblick in unsere textile Welt – Kunstobjekte, handgefertigte Unikate
                            und Impressionen aus unserem Atelier in St. Georgen.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolioItems.map((item, index) => (
                            <div
                                key={index}
                                className={`relative overflow-hidden cursor-pointer group ${
                                    item.size === 'large' ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/5]'
                                }`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[hsla(30,15%,15%,0.9)] to-transparent p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="block text-[0.75rem] tracking-[0.1em] uppercase text-[hsl(185,60%,35%)] mb-2">
                                        {item.category}
                                    </span>
                                    <h3 className="text-[1.2rem] font-normal text-white tracking-[0.02em]">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section - PROJECT 1 */}
            <section id="contact" className="py-40 bg-[hsl(40,25%,97%)]">
                <div className="max-w-[900px] mx-auto px-16">
                    <div className="text-center mb-20">
                        <span className="inline-block text-[0.75rem] font-medium tracking-[0.3em] uppercase text-[hsl(185,60%,35%)] mb-4">
                            Kontakt
                        </span>
                        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-light mb-8 text-[hsl(30,15%,15%)]">
                            Lassen Sie uns sprechen
                        </h2>
                        <div className="w-[60px] h-[1px] bg-[hsl(185,60%,35%)] mx-auto mb-8"></div>
                        <p className="text-[clamp(1rem,2vw,1.25rem)] text-[hsl(30,10%,45%)] max-w-[700px] mx-auto leading-[1.9]">
                            Haben Sie Fragen zu unseren Arbeiten oder möchten Sie mehr über
                            unsere textile Kunst erfahren? Wir freuen uns auf Ihre Nachricht.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                        <div className="text-center">
                            <h3 className="text-[0.85rem] tracking-[0.1em] uppercase text-[hsl(185,60%,35%)] mb-4">
                                Ort
                            </h3>
                            <p className="text-[1.1rem] text-[hsl(30,15%,15%)] leading-[1.8]">
                                St. Georgen<br />Österreich
                            </p>
                        </div>

                        <div className="text-center">
                            <h3 className="text-[0.85rem] tracking-[0.1em] uppercase text-[hsl(185,60%,35%)] mb-4">
                                E-Mail
                            </h3>
                            <p className="text-[1.1rem] leading-[1.8]">
                                <a
                                    href="mailto:info@maschee.at"
                                    className="text-[hsl(30,15%,15%)] hover:text-[hsl(185,60%,35%)] transition-colors duration-300"
                                >
                                    info@maschee.at
                                </a>
                            </p>
                        </div>

                        <div className="text-center">
                            <h3 className="text-[0.85rem] tracking-[0.1em] uppercase text-[hsl(185,60%,35%)] mb-4">
                                Web
                            </h3>
                            <p className="text-[1.1rem] leading-[1.8]">
                                <a
                                    href="https://maschee.at"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[hsl(30,15%,15%)] hover:text-[hsl(185,60%,35%)] transition-colors duration-300"
                                >
                                    maschee.at
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="bg-[hsl(40,20%,88%)] p-10 rounded-lg text-center">
                        <p className="text-[hsl(30,10%,45%)] leading-[1.9] m-0">
                            Besuchen Sie uns in unserem Atelier und erleben Sie, wie aus Stoff und Idee
                            einzigartige Kunstwerke entstehen. Termine nach Vereinbarung.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[hsl(30,15%,15%)] text-[hsl(40,25%,97%)] py-16 pb-8">
                <div className="max-w-[1200px] mx-auto px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-8 border-b border-[hsla(40,25%,97%,0.1)]">
                        <div className="text-center md:text-left mb-8 md:mb-0">
                            <h3 className="text-2xl font-light tracking-[0.15em] mb-2">
                                MaSchee
                            </h3>
                            <p className="text-sm opacity-70">
                                Textilkunst aus St. Georgen
                            </p>
                        </div>

                        <div className="flex gap-6 items-center">
                            <a
                                href="#impressum"
                                className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-300"
                            >
                                Impressum
                            </a>
                            <span className="opacity-30">•</span>
                            <a
                                href="#datenschutz"
                                className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-300"
                            >
                                Datenschutz
                            </a>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-[0.85rem] opacity-60">
                            © {new Date().getFullYear()} MaSchee. Handgefertigt mit Liebe zum Detail.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}