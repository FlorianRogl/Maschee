// Services Section
import {Gem,Palette, Scissors} from "lucide-react";

const ServicesSection = () => {
    const services = [
        {
            title: "Änderungsschneiderei",
            description: "Deine Lieblingsstücke perfekt angepasst - für einen Sitz, der wie angegossen passt",
            icon: <Scissors className="w-8 md:w-10 h-8 md:h-10" />,
            details: ["Kürzen & Verlängern", "Weiten & Enger machen", "Reißverschlüsse erneuern", "Säume anpassen"],
            highlight: "Meist innerhalb von 3-5 Tagen"
        },
        {
            title: "Maßanfertigung",
            description: "Von der ersten Idee bis zum fertigen Unikat - gemeinsam erschaffen wir dein Traumkleid",
            icon: <Gem className="w-8 md:w-10 h-8 md:h-10" />,
            details: ["Abendkleider", "Hochzeitskleider", "Business-Mode", "Trachten & Dirndl"],
            highlight: "100% Unikat für dich"
        },
        {
            title: "Upcycling & Redesign",
            description: "Aus Alt mach Neu - ich hauche deinen vergessenen Schätzen neues Leben ein",
            icon: <Palette className="w-8 md:w-10 h-8 md:h-10" />,
            details: ["Vintage-Redesign", "Kreative Umgestaltung", "Nachhaltige Mode", "Erbstücke modernisieren"],
            highlight: "Nachhaltig & kreativ"
        }
    ];

    return (
        <section id="services" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-amber-700 font-light tracking-widest text-xs md:text-sm mb-3">MEINE LEIDENSCHAFT</p>
                    <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Handwerk mit Herz & Seele</h3>
                    <div className="w-20 md:w-24 h-px bg-amber-400 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
                    {services.map((service, idx) => (
                        <div key={idx} className="group relative">
                            <div className="bg-gradient-to-b from-amber-50/50 to-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-amber-100/50">
                                <div className="text-amber-600 mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h4 className="text-lg md:text-xl font-medium mb-4 text-gray-800 text-center">{service.title}</h4>
                                <p className="text-sm md:text-base text-gray-600 text-center mb-6 font-light">{service.description}</p>
                                <div className="space-y-2 mb-4">
                                    {service.details.map((detail, i) => (
                                        <p key={i} className="text-xs md:text-sm text-amber-700 text-center font-light">• {detail}</p>
                                    ))}
                                </div>
                                <div className="text-center mt-6 pt-4 border-t border-amber-100">
                                    <p className="text-xs text-amber-600 font-medium">{service.highlight}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 md:mt-16">
                    <p className="text-gray-600 italic text-sm md:text-base max-w-2xl mx-auto">
                        "Jedes Projekt wird mit größter Sorgfalt und Liebe zum Detail behandelt.
                        Bei mir bist du keine Nummer, sondern ein geschätzter Mensch mit individuellen Wünschen."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;