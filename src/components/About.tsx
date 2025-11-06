export default function About() {
    return (
        <section id="about" className="relative py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-[#D4A418] mb-4">
                        Die Künstlerin
                    </span>
                    <h2 className="font-serif text-5xl md:text-6xl text-[#704214] mb-6 font-light">
                        Über Martina Scheer
                    </h2>
                    <div className="w-20 h-px bg-[#D4A418] mx-auto"></div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200&auto=format&fit=crop"
                                alt="Martina Scheer bei der Arbeit"
                                className="w-full h-[600px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#D4A418]/10 rounded-full -z-10"></div>
                        <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-[#704214]/5 rounded-full -z-10"></div>
                    </div>

                    {/* Text Side */}
                    <div className="space-y-6">
                        <p className="text-xl text-[#704214] leading-relaxed font-light">
                            Von klein auf wurde mir das Handwerk der Textilkunst von meiner Mutter,
                            ebenfalls gelernte Schneiderin, beigebracht. Schneidern, Sticken, Häkeln
                            und Stricken – diese Fertigkeiten sind tief in mir verwurzelt.
                        </p>

                        <p className="text-lg text-[#8B6B47] leading-relaxed">
                            Die Freude, aus Stoff und Idee etwas Einzigartiges zu schaffen,
                            begleitet mich seit meiner Kindheit. Jedes Stück, das mein Atelier verlässt,
                            ist ein Unikat – gefertigt mit höchster Sorgfalt und ungeteilter Aufmerksamkeit
                            für jedes Detail.
                        </p>

                        {/* Quote Box */}
                        <div className="relative my-10 p-8 bg-gradient-to-br from-[#FDF8F0] to-[#F5EBD7] rounded-xl border-l-4 border-[#D4A418]">
                            <svg
                                className="absolute top-4 left-4 w-12 h-12 text-[#D4A418]/20"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="font-serif text-2xl text-[#704214] italic relative z-10 ml-8">
                                Visionen sind da, um sie umzusetzen.<br />
                                Missionen sind da, um erfüllt zu werden.
                            </p>
                        </div>

                        <p className="text-lg text-[#8B6B47] leading-relaxed">
                            In meinem Atelier in St. Georgen verbinde ich traditionelle Handwerkskunst
                            mit künstlerischer Vision. Filzobjekte, Patchwork-Kreationen, Leder-Accessoires –
                            jedes Werk erzählt seine eigene Geschichte und trägt die Handschrift echter
                            Handarbeit.
                        </p>

                        {/* Skills/Expertise */}
                        <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#D4A418]/20">
                            <div>
                                <h4 className="text-sm font-medium tracking-wider text-[#D4A418] uppercase mb-2">
                                    Spezialisierung
                                </h4>
                                <p className="text-[#704214]">
                                    Textilkunst, Filzarbeiten,<br />
                                    Patchwork, Lederdesign
                                </p>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium tracking-wider text-[#D4A418] uppercase mb-2">
                                    Erfahrung
                                </h4>
                                <p className="text-[#704214]">
                                    Jahrzehntelange Tradition<br />
                                    Gelernte Schneiderin
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}