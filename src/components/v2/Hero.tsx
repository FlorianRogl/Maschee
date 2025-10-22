import '../../App.css';

export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2400&auto=format&fit=crop"
                    alt="Textile Handwerkskunst"
                    className="hero-bg-image"
                />
                <div className="hero-overlay"></div>
            </div>
            <div className="hero-content">
                <div className="hero-text-wrapper">
                    <h1 className="hero-title">MasSchee</h1>
                    <div className="hero-divider"></div>
                    <p className="hero-subtitle">
                        Jedes Modell ein Unikat – mit Liebe zum Detail
                    </p>
                    <p className="hero-tagline">
                        Textilkunst aus St. Georgen
                    </p>
                </div>
            </div>
            <div className="hero-scroll-indicator">
                <div className="scroll-line"></div>
            </div>
        </section>
    );
}