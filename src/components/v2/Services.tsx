export default function Services() {
    const works = [
        {
            title: 'Kunstobjekte',
            description: 'Textile Kunstwerke, die durch ihre Einzigartigkeit und künstlerische Gestaltung beeindrucken. Jedes Objekt ein Statement aus Stoff und Form.',
            image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800&auto=format&fit=crop'
        },
        {
            title: 'Filzobjekte',
            description: 'Vom traditionellen Handwerk zur modernen Kunst. Dreidimensionale Filzkreationen mit besonderem Charakter und einzigartiger Haptik.',
            image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop'
        },
        {
            title: 'Leder-Arbeiten',
            description: 'Hochwertige Leder-Objekte und Accessoires, gefertigt mit präziser Handarbeit und Gespür für Material und Form.',
            image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop'
        },
        {
            title: 'Patchwork',
            description: 'Meisterhafte Zusammenstellung von Stoffen und Mustern. Traditionelle Techniken treffen auf zeitgenössisches Design.',
            image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=800&auto=format&fit=crop'
        },
        {
            title: 'Accessoires',
            description: 'Ponchos, Bindegürtel und textile Begleiter – individuell gestaltet und mit Liebe zum Detail gefertigt.',
            image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=800&auto=format&fit=crop'
        },
        {
            title: 'Kunstmotive',
            description: 'Individuell bemalte Objekte mit künstlerischen Motiven. Textile Leinwände für persönliche Ausdrucksformen.',
            image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=800&auto=format&fit=crop'
        }
    ];

    return (
        <section id="works" className="section works-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Was wir erschaffen</span>
                    <h2 className="section-title">Unsere Arbeiten</h2>
                    <div className="divider"></div>
                    <p className="section-subtitle">
                        Mit Leidenschaft und Präzision verwandeln wir textile Materialien in kunstvolle Objekte.
                        Jede Arbeit ist ein Unikat, gefertigt mit jahrzehntelanger Erfahrung.
                    </p>
                </div>

                <div className="works-grid">
                    {works.map((work, index) => (
                        <div key={index} className="work-card">
                            <div className="work-image-wrapper">
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="work-image"
                                    loading="lazy"
                                />
                                <div className="work-image-overlay"></div>
                            </div>
                            <div className="work-content">
                                <h3 className="work-title">{work.title}</h3>
                                <p className="work-description">{work.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}