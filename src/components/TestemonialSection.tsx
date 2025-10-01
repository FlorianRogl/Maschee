import {Quote, Star} from "lucide-react";

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Anna M.",
            text: "Marlene hat mein Brautkleid zu einem absoluten Traumkleid gemacht. Ihre Liebe zum Detail und ihr Gespür für das Besondere sind einzigartig.",
            rating: 5
        },
        {
            name: "Sophie L.",
            text: "Endlich eine Schneiderin, die versteht was ich will! Die Beratung war herzlich und das Ergebnis übertrifft alle Erwartungen.",
            rating: 5
        },
        {
            name: "Maria K.",
            text: "Aus dem alten Kleid meiner Oma hat Marlene ein modernes Kunstwerk gezaubert. Ich bin sprachlos und überglücklich!",
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="py-16 md:py-24 bg-amber-50/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-amber-700 font-light tracking-widest text-xs md:text-sm mb-3">KUNDENSTIMMEN</p>
                    <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Was meine Kunden sagen</h3>
                    <div className="w-20 md:w-24 h-px bg-amber-400 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 md:w-5 h-4 md:h-5 text-amber-400 fill-amber-400" />
                                ))}
                            </div>
                            <Quote className="w-6 md:w-8 h-6 md:h-8 text-amber-200 mx-auto mb-4" />
                            <p className="text-gray-600 text-center mb-6 italic text-sm md:text-base">{testimonial.text}</p>
                            <p className="text-center text-amber-700 font-medium text-sm md:text-base">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;