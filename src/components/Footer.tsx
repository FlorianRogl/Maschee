export default function Footer() {
    return (
        <footer className="bg-[#704214] text-white py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-white/10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-lg overflow-hidden">
                                <img src="/logo.jpg" alt="MaSchee" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="font-serif text-2xl tracking-wider">MaSchee</h3>
                        </div>
                        <p className="text-white/70 leading-relaxed">
                            Textilkunst aus St. Georgen – Handgefertigte Unikate mit Liebe zum Detail.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[#D4A418] font-medium mb-4 tracking-wider uppercase text-sm">
                            Navigation
                        </h4>
                        <ul className="space-y-2">
                            {['Atelier', 'Über Mich', 'Arbeiten', 'Philosophie', 'Galerie', 'Kontakt'].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={`#${item.toLowerCase().replace(' ', '')}`}
                                        className="text-white/70 hover:text-[#D4A418] transition-colors duration-300"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-[#D4A418] font-medium mb-4 tracking-wider uppercase text-sm">
                            Kontakt
                        </h4>
                        <ul className="space-y-3 text-white/70">
                            <li className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-[#D4A418] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>St. Georgen, Österreich</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-[#D4A418] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:info@maschee.at" className="hover:text-[#D4A418] transition-colors duration-300">
                                    info@maschee.at
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-[#D4A418] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                                <a href="https://maschee.at" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4A418] transition-colors duration-300">
                                    maschee.at
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p className="text-white/60">
                        © {new Date().getFullYear()} MaSchee. Handgefertigt mit Liebe zum Detail.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="#impressum" className="text-white/60 hover:text-[#D4A418] transition-colors duration-300">
                            Impressum
                        </a>
                        <span className="text-white/30">•</span>
                        <a href="#datenschutz" className="text-white/60 hover:text-[#D4A418] transition-colors duration-300">
                            Datenschutz
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}