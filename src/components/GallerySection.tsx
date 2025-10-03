import kollektion1 from '../assets/Kollektion1.jpg';
import kollektion2 from '../assets/Kollektion2.jpg';
import kollektion3 from '../assets/Kollektion3.jpg';
import kollektion4 from '../assets/Kollektion4.jpg';
import kollektion5 from '../assets/Kollektion5.jpg';
import kollektion6 from '../assets/Kollektion6.jpg';

const GallerySection = () => {
    const products = [
        { img: kollektion1, title: 'Elegante Abendmode', category: 'Maßanfertigung' },
        { img: kollektion2, title: 'Brautkleid Kollektion', category: 'Hochzeit' },
        { img: kollektion3, title: 'Business Eleganz', category: 'Business' },
        { img: kollektion4, title: 'Sommer Kollektion', category: 'Kollektion' },
        { img: kollektion5, title: 'Vintage Redesign', category: 'Upcycling' },
        { img: kollektion6, title: 'Festliche Tracht', category: 'Tradition' }
    ];

    return (
        <section id="gallery" className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-amber-700 font-light tracking-widest text-xs md:text-sm mb-3">MEINE KREATIONEN</p>
                    <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Handgefertigte Unikate</h3>
                    <div className="w-20 md:w-24 h-px bg-amber-400 mx-auto"></div>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
                    {products.map((product, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer transform hover:scale-105 transition-all duration-500">
                            <div className="aspect-w-4 aspect-h-5">
                                <img src={product.img}
                                     alt={product.title}
                                     className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-xs md:text-sm text-amber-300 mb-2 font-light tracking-wider">{product.category}</p>
                                    <h4 className="text-xl md:text-2xl font-light">{product.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 md:px-8 py-3 rounded-full hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-light tracking-wide text-sm md:text-base">
                        Mehr Kreationen ansehen
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;