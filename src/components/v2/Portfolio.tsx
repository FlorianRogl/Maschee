export default function Portfolio() {
    const portfolioItems = [
        {
            title: 'Filzkunst',
            category: 'Objekt',
            size: 'large',
            image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1200&auto=format&fit=crop'
        },
        {
            title: 'Patchwork Kollektion',
            category: 'Serie',
            size: 'medium',
            image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1200&auto=format&fit=crop'
        },
        {
            title: 'Leder Accessoire',
            category: 'Unikat',
            size: 'medium',
            image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop'
        },
        {
            title: 'Textile Wandgestaltung',
            category: 'Kunstwerk',
            size: 'large',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop'
        },
        {
            title: 'Kunstmotiv',
            category: 'Detail',
            size: 'medium',
            image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=1200&auto=format&fit=crop'
        },
        {
            title: 'Atelier Impression',
            category: 'Einblick',
            size: 'medium',
            image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200&auto=format&fit=crop'
        }
    ];

    return (
        <section id="gallery" className="section gallery-section">
            <div className="container-wide">
                <div className="section-header">
                    <span className="section-label">Unsere Kreationen</span>
                    <h2 className="section-title">Galerie</h2>
                    <div className="divider"></div>
                    <p className="section-subtitle">
                        Ein Einblick in unsere textile Welt – Kunstobjekte, handgefertigte Unikate
                        und Impressionen aus unserem Atelier in St. Georgen.
                    </p>
                </div>

                <div className="gallery-grid">
                    {portfolioItems.map((item, index) => (
                        <div key={index} className={`gallery-item ${item.size}`}>
                            <div className="gallery-image">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="gallery-img"
                                    loading="lazy"
                                />
                            </div>
                            <div className="gallery-overlay">
                                <span className="gallery-category">{item.category}</span>
                                <h3 className="gallery-title">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}