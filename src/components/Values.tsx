// Import real images from assets
import galleryDetail from '../assets/gallery-detail.jpg';
import galleryPatchwork from '../assets/gallery-patchwork.jpg';
import galleryWallArt from '../assets/gallery-wall-art.jpg';
import carousell2 from '../assets/gallery-leather.jpg';

export default function Values() {
    const values = [
        {
            number: '01',
            title: 'Einzigartigkeit',
            text: 'Kein Stück gleicht dem anderen. Jedes Werk ist ein Original, geprägt von individueller Handschrift und künstlerischer Vision.',
            image: galleryDetail,
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            )
        },
        {
            number: '02',
            title: 'Handarbeit',
            text: 'Echtes Handwerk statt Massenproduktion. Spürbare Qualität, die von Generation zu Generation weitergegeben wird.',
            image: carousell2,
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            )
        },
        {
            number: '03',
            title: 'Liebe zum Detail',
            text: 'Jeder Stich, jede Naht wird mit größter Sorgfalt ausgeführt. Perfektion liegt in den kleinen Dingen.',
            image: galleryPatchwork,
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            )
        },
        {
            number: '04',
            title: 'Nachhaltigkeit',
            text: 'Zeitlose Qualität statt schnelllebiger Trends. Objekte, die überdauern und Geschichten erzählen.',
            image: galleryWallArt,
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <section id="philosophy" className="relative py-32 bg-gradient-to-b from-white to-[#FDF8F0]">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-[#D4A418] mb-4">
                        Wofür wir stehen
                    </span>
                    <h2 className="font-serif text-5xl md:text-6xl text-[#704214] mb-6 font-light">
                        Unsere Philosophie
                    </h2>
                    <div className="w-20 h-px bg-[#D4A418] mx-auto"></div>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-shadow duration-500"
                        >
                            <div className="flex flex-col md:flex-row">
                                {/* Image Side */}
                                <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                                    <img
                                        src={value.image}
                                        alt={value.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10"></div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full md:w-3/5 p-8 relative">
                                    {/* Number */}
                                    <div className="absolute top-4 right-4 text-6xl font-light text-[#D4A418]/10">
                                        {value.number}
                                    </div>

                                    {/* Icon */}
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#D4A418] to-[#B8900F] rounded-xl flex items-center justify-center text-white mb-6">
                                        {value.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-serif text-2xl text-[#704214] mb-4">
                                        {value.title}
                                    </h3>

                                    {/* Text */}
                                    <p className="text-[#8B6B47] leading-relaxed">
                                        {value.text}
                                    </p>

                                    {/* Decorative Line */}
                                    <div className="h-1 w-0 bg-gradient-to-r from-[#D4A418] to-transparent mt-6 transition-all duration-500 group-hover:w-24"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Statement Box */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-[#704214] to-[#5A3410] text-white p-12 rounded-2xl shadow-2xl">
                        {/* Quote Mark */}
                        <svg
                            className="w-16 h-16 text-[#D4A418]/30 mb-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>

                        <p className="font-serif text-2xl md:text-3xl leading-relaxed mb-0 text-white/95">
                            Textile Gestaltung ist für uns mehr als Arbeit – es ist Berufung.
                            In jedem Objekt steckt nicht nur handwerkliches Können, sondern auch
                            Herzblut, Geduld und die Freude am Schaffen.
                        </p>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#D4A418] rounded-full opacity-20"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-[#D4A418] rounded-full opacity-20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}