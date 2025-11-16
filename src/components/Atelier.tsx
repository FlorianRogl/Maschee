import galleryAtelier from '../assets/gallery-atelier.jpg';

export default function Atelier() {
    return (
        <section id="atelier" className="relative py-32 bg-gradient-to-b from-white to-[#FDF8F0]">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-[#D4A418] mb-4">
                        Unser Raum
                    </span>
                    <h2 className="font-serif text-5xl md:text-6xl text-[#704214] mb-6 font-light">
                        Das Atelier
                    </h2>
                    <div className="w-20 h-px bg-[#D4A418] mx-auto mb-8"></div>
                    <p className="text-lg text-[#8B6B47] max-w-3xl mx-auto leading-relaxed">
                        Im Herzen von St. Georgen entsteht textile Kunst. Ein Ort, wo Tradition auf
                        Kreativität trifft und jedes Stück seine eigene Geschichte erzählt.
                    </p>
                </div>

                {/* Large Atelier Image */}
                <div className="relative group mb-16">
                    <div className="relative h-[600px] overflow-hidden rounded-2xl shadow-2xl">
                        <img
                            src={galleryAtelier}
                            alt="MaSchee Atelier in St. Georgen"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                        {/* Overlay Text */}
                        <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                            <h3 className="font-serif text-3xl mb-3 text-white">Unser Atelier in St. Georgen</h3>
                            <p className="text-white/90 text-lg max-w-2xl">
                                Hier werden Ideen zu einzigartigen Kunstwerken. Jeder Raum atmet
                                Kreativität, jede Ecke inspiriert zu neuen Kreationen.
                            </p>
                        </div>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-[#D4A418] rounded-full opacity-30 pointer-events-none"></div>
                    <div className="absolute -bottom-8 -right-8 w-40 h-40 border-2 border-[#704214] rounded-full opacity-20 pointer-events-none"></div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                    <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#D4A418] to-[#B8900F] rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 className="font-serif text-xl text-[#704214] mb-3">Kreativer Raum</h3>
                        <p className="text-[#8B6B47] leading-relaxed">
                            Ein inspirierender Ort, ausgestattet mit allem, was für hochwertige
                            Textilkunst benötigt wird.
                        </p>
                    </div>

                    <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#D4A418] to-[#B8900F] rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h3 className="font-serif text-xl text-[#704214] mb-3">Materialvielfalt</h3>
                        <p className="text-[#8B6B47] leading-relaxed">
                            Von edlen Stoffen bis zu hochwertigen Garnen – eine Auswahl,
                            die keine Wünsche offen lässt.
                        </p>
                    </div>

                    <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#D4A418] to-[#B8900F] rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="font-serif text-xl text-[#704214] mb-3">Besuch möglich</h3>
                        <p className="text-[#8B6B47] leading-relaxed">
                            Nach Terminvereinbarung können Sie das Atelier besuchen und
                            die Entstehung der Kunstwerke erleben.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}