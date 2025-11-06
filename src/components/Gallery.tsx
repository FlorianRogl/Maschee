import { useState } from 'react';

interface GalleryItem {
    title: string;
    category: string;
    size: 'large' | 'medium';
    image: string;
    description: string;
    materials: string;
    year: string;
}

export default function Gallery() {
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

    const portfolioItems: GalleryItem[] = [
        {
            title: 'Filzkunst Objekt',
            category: 'Kunstobjekt',
            size: 'large',
            image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1200&auto=format&fit=crop',
            description: 'Dreidimensionales Filzobjekt, handgefertigt mit traditionellen Techniken. Die organischen Formen und natürlichen Farbtöne schaffen eine harmonische Komposition.',
            materials: 'Schurwolle, Naturseide',
            year: '2024'
        },
        {
            title: 'Patchwork Kollektion',
            category: 'Textilkunst',
            size: 'medium',
            image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1200&auto=format&fit=crop',
            description: 'Eine meisterhafte Zusammenstellung verschiedener Stoffe und Muster. Jedes Stoffstück wurde sorgfältig ausgewählt und per Hand vernäht.',
            materials: 'Baumwolle, Leinen, Seide',
            year: '2024'
        },
        {
            title: 'Leder Accessoire',
            category: 'Unikat',
            size: 'medium',
            image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop',
            description: 'Hochwertiges Lederaccessoire, handgefertigt mit präziser Verarbeitung. Die natürliche Patina verleiht jedem Stück einen individuellen Charakter.',
            materials: 'Rindsleder, Messingbeschläge',
            year: '2024'
        },
        {
            title: 'Textile Wandgestaltung',
            category: 'Raumkunst',
            size: 'large',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop',
            description: 'Großformatige textile Installation, die durch ihre Struktur und Farbgebung Räume transformiert. Ein Statement-Piece für besondere Orte.',
            materials: 'Wolle, Baumwolle, Mixed Media',
            year: '2023'
        },
        {
            title: 'Kunstmotiv Detail',
            category: 'Malerei',
            size: 'medium',
            image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=1200&auto=format&fit=crop',
            description: 'Individuell bemaltes Stoffobjekt mit künstlerischem Motiv. Die Kombination aus Textil und Farbe schafft eine einzigartige haptische Erfahrung.',
            materials: 'Naturstoffe, Textilfarben',
            year: '2024'
        },
        {
            title: 'Atelier Impression',
            category: 'Einblick',
            size: 'medium',
            image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200&auto=format&fit=crop',
            description: 'Ein Blick hinter die Kulissen: Hier entstehen die Kunstwerke. Jeder Arbeitsschritt wird mit größter Sorgfalt und Liebe zum Detail ausgeführt.',
            materials: 'Verschiedene Materialien',
            year: '2024'
        }
    ];

    return (
        <>
            <section id="gallery" className="relative py-32 bg-white">
                <div className="max-w-[1600px] mx-auto px-6 md:px-8">
                    <div className="text-center mb-20">
                        <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-[#D4A418] mb-4">
                            Unsere Kreationen
                        </span>
                        <h2 className="font-serif text-5xl md:text-6xl text-[#704214] mb-6 font-light">
                            Galerie
                        </h2>
                        <div className="w-20 h-px bg-[#D4A418] mx-auto mb-8"></div>
                        <p className="text-lg text-[#8B6B47] max-w-3xl mx-auto leading-relaxed">
                            Ein Einblick in unsere textile Welt – Kunstobjekte, handgefertigte Unikate
                            und Impressionen aus unserem Atelier in St. Georgen.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {portfolioItems.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedItem(item)}
                                className={`relative overflow-hidden cursor-pointer group rounded-xl ${
                                    item.size === 'large' ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/5]'
                                }`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="block text-xs tracking-wider uppercase text-[#D4A418] mb-2">
                                        {item.category}
                                    </span>
                                    <h3 className="font-serif text-xl md:text-2xl mb-2">
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span>Details ansehen</span>
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4A418] rounded-xl transition-all duration-300 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedItem && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                    onClick={() => setSelectedItem(null)}
                >
                    <div
                        className="relative max-w-6xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedItem(null)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-[#704214] transition-all duration-300 hover:rotate-90"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="relative h-[400px] lg:h-auto">
                                <img
                                    src={selectedItem.image}
                                    alt={selectedItem.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-[#D4A418] text-white px-4 py-2 rounded-lg text-sm font-medium">
                                    {selectedItem.category}
                                </div>
                            </div>

                            <div className="p-8 lg:p-12 flex flex-col">
                                <div className="flex-1">
                                    <h3 className="font-serif text-3xl lg:text-4xl text-[#704214] mb-6">
                                        {selectedItem.title}
                                    </h3>

                                    <p className="text-lg text-[#8B6B47] leading-relaxed mb-8">
                                        {selectedItem.description}
                                    </p>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-[#D4A418] rounded-full mt-2"></div>
                                            <div>
                                                <h4 className="text-sm font-medium text-[#704214] uppercase tracking-wider mb-1">Materialien</h4>
                                                <p className="text-[#8B6B47]">{selectedItem.materials}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-[#D4A418] rounded-full mt-2"></div>
                                            <div>
                                                <h4 className="text-sm font-medium text-[#704214] uppercase tracking-wider mb-1">Jahr</h4>
                                                <p className="text-[#8B6B47]">{selectedItem.year}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-[#D4A418]/20">
                                    <p className="text-sm text-[#8B6B47] mb-4">
                                        Interessiert an diesem Werk oder möchten Sie mehr erfahren?
                                    </p>
                                    <a
                                        href="#contact"
                                        onClick={() => setSelectedItem(null)}
                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4A418] to-[#B8900F] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                                    >
                                        Kontakt aufnehmen
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}