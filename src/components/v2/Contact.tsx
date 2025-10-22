import '../../App.css';

export default function Contact() {
    return (
        <section id="contact" className="section contact-section">
            <div className="container-narrow">
                <div className="section-header">
                    <span className="section-label">Kontakt</span>
                    <h2 className="section-title">Lassen Sie uns sprechen</h2>
                    <div className="divider"></div>
                    <p className="section-subtitle">
                        Haben Sie Fragen zu unseren Arbeiten oder möchten Sie mehr über
                        unsere textile Kunst erfahren? Wir freuen uns auf Ihre Nachricht.
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info-grid">
                        <div className="contact-info-item">
                            <h3 className="contact-label">Ort</h3>
                            <p className="contact-value">St. Georgen<br />Österreich</p>
                        </div>

                        <div className="contact-info-item">
                            <h3 className="contact-label">E-Mail</h3>
                            <p className="contact-value">
                                <a href="mailto:info@maschee.at">info@maschee.at</a>
                            </p>
                        </div>

                        <div className="contact-info-item">
                            <h3 className="contact-label">Web</h3>
                            <p className="contact-value">
                                <a href="https://maschee.at" target="_blank" rel="noopener noreferrer">
                                    maschee.at
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="contact-note">
                        <p>
                            Besuchen Sie uns in unserem Atelier und erleben Sie, wie aus Stoff und Idee
                            einzigartige Kunstwerke entstehen. Termine nach Vereinbarung.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}