import heroTextileArt from '../assets/hero-textile-art.jpg';


export default function Hero() {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroTextileArt}
                    alt="Textile Handwerkskunst"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl">
                {/* Logo als Wasserzeichen im Hintergrund */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10 pointer-events-none">
                    <img
                        src="/logo.jpg"
                        alt=""
                        className="w-full h-full object-contain blur-sm"
                    />
                </div>

                {/* Kleines Logo oben */}
                <div className="mb-8 flex justify-center animate-fadeIn">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-sm">
                        <img
                            src="/logo.jpg"
                            alt="MaSchee"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Main Title */}
                <h1 className="font-serif text-6xl md:text-8xl text-white mb-6 tracking-wider animate-fadeInUp">
                    MaSchee
                </h1>

                {/* Divider */}
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#D4A418] to-transparent mx-auto mb-6 animate-fadeInUp animation-delay-200"></div>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-white/90 mb-4 font-light tracking-wide animate-fadeInUp animation-delay-400">
                    Kunst und Näh
                </p>

                {/* Tagline */}
                <p className="text-base md:text-lg text-white/80 font-light tracking-widest animate-fadeInUp animation-delay-600">
                    Jedes Modell ein Unikat – mit Liebe zum Detail
                </p>

                {/* Location */}
                <p className="text-sm md:text-base text-[#D4A418] font-light mt-6 tracking-widest animate-fadeInUp animation-delay-800">
                    Textilkunst aus St. Georgen
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
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

                .animate-fadeIn {
                    animation: fadeIn 1s ease-out;
                }

                .animate-fadeInUp {
                    animation: fadeInUp 1s ease-out;
                }

                .animation-delay-200 {
                    animation-delay: 0.2s;
                    animation-fill-mode: both;
                }

                .animation-delay-400 {
                    animation-delay: 0.4s;
                    animation-fill-mode: both;
                }

                .animation-delay-600 {
                    animation-delay: 0.6s;
                    animation-fill-mode: both;
                }

                .animation-delay-800 {
                    animation-delay: 0.8s;
                    animation-fill-mode: both;
                }
            `}</style>
        </section>
    );
}