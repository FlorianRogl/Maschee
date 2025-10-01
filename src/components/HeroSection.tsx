import {ChevronLeft, ChevronRight, Crown} from "lucide-react";
import {useEffect, useState} from "react";

const HeroSection = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        { url: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=1600', alt: 'Elegante Mode' },
        { url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600', alt: 'Stoffauswahl' },
        { url: 'https://images.unsplash.com/photo-1517635676447-3a480fbfd8f2?w=1600', alt: 'Handarbeit' },
        { url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1600', alt: 'Maßanfertigung' }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative h-screen overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50 z-10" />

            {images.map((img, idx) => (
                <div
                    key={idx}
                    className={`absolute inset-0 transition-all duration-2000 ${idx === currentImage ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img
                        src={img.url}
                        alt={img.alt}
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            ))}

            <div className="relative z-20 h-full flex items-center justify-center text-white px-4">
                <div className="text-center animate-fade-in max-w-4xl">
                    <div className="mb-6">
                        <Crown className="w-10 md:w-12 h-10 md:h-12 mx-auto text-amber-400 opacity-80" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-extralight mb-4 tracking-[0.15em] md:tracking-[0.2em]">MASCHEE</h2>
                    <div className="w-24 md:w-32 h-px bg-amber-400 mx-auto mb-6"></div>
                    <p className="text-base md:text-xl font-light tracking-widest mb-4 text-amber-100">Kunst- und Änderungsschneiderei</p>
                    <p className="text-sm md:text-base italic opacity-80 font-light px-4">"Wo deine Träume zu tragbarer Kunst werden"</p>
                    <div className="mt-8">
                        <p className="text-xs md:text-sm text-amber-200 font-light tracking-wider">seit 2002 • Meisterhandwerk aus Leibnitz</p>
                    </div>
                </div>
            </div>

            <button onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
                    className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm hover:bg-white/20 p-2 md:p-3 rounded-full transition-all border border-white/30">
                <ChevronLeft className="text-white" size={20} />
            </button>

            <button onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
                    className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm hover:bg-white/20 p-2 md:p-3 rounded-full transition-all border border-white/30">
                <ChevronRight className="text-white" size={20} />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentImage(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${idx === currentImage ? 'bg-amber-400 w-8' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </section>
    );
};


export default HeroSection