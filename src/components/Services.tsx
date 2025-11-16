// Import real images from assets
import galleryPatchwork from '../assets/gallery-patchwork.jpg';
import galleryFeltArt from '../assets/gallery-felt-art.jpg';
import galleryLeather from '../assets/gallery-leather.jpg';
import kollektion4 from '../assets/Kollektion4.jpg';
import carousell4 from '../assets/Carousell4.jpg';
import galleryDetail from '../assets/gallery-detail.jpg';

export default function Services() {
    const works = [
        {
            title: 'Kunstobjekte',
            description: 'Textile Kunstwerke, die durch ihre Einzigartigkeit und künstlerische Gestaltung beeindrucken. Jedes Objekt ein Statement aus Stoff und Form.',
            image: kollektion4,
            color: 'from-[#D4A418] to-[#B8900F]'
        },
        {
            title: 'Filzobjekte',
            description: 'Vom traditionellen Handwerk zur modernen Kunst. Dreidimensionale Filzkreationen mit besonderem Charakter und einzigartiger Haptik.',
            image: galleryFeltArt,
            color: 'from-[#704214] to-[#5A3410]'
        },
        {
            title: 'Leder-Arbeiten',
            description: 'Hochwertige Leder-Objekte und Accessoires, gefertigt mit präziser Handarbeit und Gespür für Material und Form.',
            image: galleryLeather,
            color: 'from-[#D4A418] to-[#B8900F]'
        },
        {
            title: 'Patchwork',
            description: 'Meisterhafte Zusammenstellung von Stoffen und Mustern. Traditionelle Techniken treffen auf zeitgenössisches Design.',
            image: galleryPatchwork,
            color: 'from-[#704214] to-[#5A3410]'
        },
        {
            title: 'Accessoires',
            description: 'Ponchos, Bindegürtel und textile Begleiter – individuell gestaltet und mit Liebe zum Detail gefertigt.',
            image: carousell4,
            color: 'from-[#D4A418] to-[#B8900F]'
        },
        {
            title: 'Kunstmotive',
            description: 'Individuell bemalte Objekte mit künstlerischen Motiven. Textile Leinwände für persönliche Ausdrucksformen.',
            image: galleryDetail,
            color: 'from-[#704214] to-[#5A3410]'
        }
    ];

    return (
        <section id="works" className="relative py-32 bg-gradient-to-b from-[#FDF8F0] to-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-[#D4A418] mb-4">
                        Was wir erschaffen
                    </span>
                    <h2 className="font-serif text-5xl md:text-6xl text-[#704214] mb-6 font-light">
                        Unsere Arbeiten
                    </h2>
                    <div className="w-20 h-px bg-[#D4A418] mx-auto mb-8"></div>
                    <p className="text-lg text-[#8B6B47] max-w-3xl mx-auto leading-relaxed">
                        Mit Leidenschaft und Präzision verwandeln wir textile Materialien in kunstvolle Objekte.
                        Jede Arbeit ist ein Unikat, gefertigt mit jahrzehntelanger Erfahrung.
                    </p>
                </div>

                {/* Works Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {works.map((work, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Image */}
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 group-hover:translate-y-0">
                                {/* Title Bar */}
                                <div className={`h-1 w-16 bg-gradient-to-r ${work.color} mb-4 transition-all duration-500 group-hover:w-24`}></div>

                                <h3 className="font-serif text-2xl mb-3 text-white">
                                    {work.title}
                                </h3>

                                <p className="text-white/90 leading-relaxed text-sm opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                                    {work.description}
                                </p>
                            </div>

                            {/* Hover Border Effect */}
                            <div className={`absolute inset-0 border-2 border-transparent group-hover:border-[#D4A418] rounded-2xl transition-all duration-500 pointer-events-none`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}