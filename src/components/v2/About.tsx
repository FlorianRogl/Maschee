import '../../App.css';

export default function About() {
    return (
        <section id="about" className="section about-section">
            <div className="container-narrow">
                <div className="section-header">
                    <span className="section-label">Unsere Geschichte</span>
                    <h2 className="section-title">Über MasSchee</h2>
                    <div className="divider"></div>
                </div>

                <div className="about-content">
                    <div className="about-image-wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1400&auto=format&fit=crop"
                            alt="Textilhandwerk im Atelier"
                            className="about-image"
                        />
                    </div>

                    <div className="about-text">
                        <p className="lead-paragraph">
                            Von klein auf wurde mir das Handwerk der Textilkunst von meiner Mutter,
                            ebenfalls gelernte Schneiderin, beigebracht. Schneidern, Sticken, Häkeln
                            und Stricken – diese Fertigkeiten sind tief in mir verwurzelt.
                        </p>

                        <p>
                            Die Freude, aus Stoff und Idee etwas Einzigartiges zu schaffen,
                            begleitet mich seit meiner Kindheit. Jedes Stück, das mein Atelier verlässt,
                            ist ein Unikat – gefertigt mit höchster Sorgfalt und ungeteilter Aufmerksamkeit
                            für jedes Detail.
                        </p>

                        <div className="about-quote">
                            <div className="quote-mark">"</div>
                            <p className="quote-text">
                                Visionen sind da, um sie umzusetzen.<br />
                                Missionen sind da, um erfüllt zu werden.
                            </p>
                        </div>

                        <p>
                            In meinem Atelier in St. Georgen verbinde ich traditionelle Handwerkskunst
                            mit künstlerischer Vision. Filzobjekte, Patchwork-Kreationen, Leder-Accessoires –
                            jedes Werk erzählt seine eigene Geschichte und trägt die Handschrift echter
                            Handarbeit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}