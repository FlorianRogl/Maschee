import { useState } from 'react';

// Import all gallery images - using correct file names
import carousell1 from '../assets/Carousell1.jpg';

import carousell3 from '../assets/Carousell3.jpg';
import galleryAtelier from '../assets/gallery-atelier.jpg';
import galleryDetail from '../assets/gallery-detail.jpg';

import galleryPatchwork from '../assets/gallery-patchwork.jpg';
import galleryWallArt from '../assets/gallery-wall-art.jpg';

import kollektion4 from '../assets/Kollektion4.jpg';

import kollektion6 from '../assets/Kollektion6.jpg';

interface GalleryItem {
    title: string;
    category: string;
    image: string;
    description: string;
    materials: string;
    year: string;
}

export default function Gallery2() {
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

    const portfolioItems: GalleryItem[] = [
        {
            title: 'Geometrisches Patchwork',
            category: 'Textilkunst',
            image: galleryPatchwork,
            description: 'Moderne Interpretation traditioneller Patchwork-Techniken. Die geometrischen Formen und harmonischen Farben schaffen ein zeitloses Design.',
            materials: 'Baumwolle, Leinen, Seide',
            year: '2024'
        },
        {
            title: 'Patchwork Tasche',
            category: 'Unikat',
            image: carousell1,
            description: 'Handgefertigte Tasche aus verschiedenen Vintage-Stoffen mit floralen Mustern und königlichen Motiven. Jedes Element wurde sorgfältig ausgewählt und von Hand vernäht.',
            materials: 'Vintage-Stoffe, Leder, Metall',
            year: '2024'
        },
        {
            title: 'Atelier Impression',
            category: 'Einblick',
            image: galleryAtelier,
            description: 'Ein Blick in unser Atelier in St. Georgen. Hier entstehen alle unsere Kunstwerke in liebevoller Handarbeit mit traditionellen Techniken.',
            materials: 'Verschiedene Materialien',
            year: '2024'
        },
        {
            title: 'Wandgestaltung',
            category: 'Installation',
            image: galleryWallArt,
            description: 'Textile Wandgestaltung für besondere Räume. Die Kombination verschiedener Texturen und Farben schafft eine einzigartige Atmosphäre.',
            materials: 'Mixed Media, Textilien',
            year: '2023'
        },
        {
            title: 'Kollektion Sommer',
            category: 'Mode',
            image: kollektion4,
            description: 'Leichte Sommerkollektion mit geometrischen Mustern und natürlichen Farben. Perfekt für warme Tage mit einem Hauch von Eleganz.',
            materials: 'Baumwolle, Viskose',
            year: '2024'
        },
        {
            title: 'Goldene Stickerei',
            category: 'Kunsthandwerk',
            image: galleryDetail,
            description: 'Detailaufnahme einer handgestickten Blume mit goldenen Fäden. Die filigrane Arbeit zeigt die Präzision traditioneller Sticktechniken.',
            materials: 'Goldgarn, Baumwolle',
            year: '2024'
        },
        {
            title: 'Farbenfrohe Tasche',
            category: 'Accessoire',
            image: carousell3,
            description: 'Moderne Patchwork-Tasche in leuchtenden Farben. Die Kombination verschiedener Lederqualitäten verleiht jedem Stück einen individuellen Charakter.',
            materials: 'Leder, Baumwolle',
            year: '2024'
        },
        {
            title: 'Sommerkleid Grün',
            category: 'Mode',
            image: kollektion6,
            description: 'Leichtes Sommerkleid mit floralen Mustern in frischen Grüntönen. Die fließende Form und natürlichen Materialien bieten optimalen Tragekomfort.',
            materials: 'Bio-Baumwolle, Leinen',
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

                    {/* Clean Grid Layout - gleichmäßige Karten */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {portfolioItems.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedItem(item)}
                                className="relative overflow-hidden cursor-pointer group rounded-xl aspect-square"
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
                                    <h3 className="font-serif text-xl md:text-2xl mb-2 text-white">
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