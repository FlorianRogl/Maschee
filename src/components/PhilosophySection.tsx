import {Crown, Heart, Leaf, Sparkles} from "lucide-react";

const PhilosophySection = () => {
    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-amber-50/20 to-white">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="text-center">
                    <Crown className="w-10 md:w-12 h-10 md:h-12 mx-auto text-amber-600 mb-6" />
                    <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-8">Meine Philosophie</h3>
                    <div className="space-y-6 text-gray-600">
                        <p className="text-base md:text-lg font-light leading-relaxed">
                            "Mode ist vergänglich, Stil bleibt bestehen. In meinem Atelier entstehen keine Massenprodukte,
                            sondern individuelle Kunstwerke, die deine Persönlichkeit unterstreichen."
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 mt-10">
                            <div className="text-center">
                                <Heart className="w-8 h-8 mx-auto text-amber-500 mb-3" />
                                <h4 className="font-medium text-gray-800 mb-2">Persönlich</h4>
                                <p className="text-sm text-gray-600">Jeder Kunde ist einzigartig und verdient individuelle Beratung</p>
                            </div>
                            <div className="text-center">
                                <Sparkles className="w-8 h-8 mx-auto text-amber-500 mb-3" />
                                <h4 className="font-medium text-gray-800 mb-2">Qualität</h4>
                                <p className="text-sm text-gray-600">Hochwertige Materialien und präzise Handarbeit</p>
                            </div>
                            <div className="text-center">
                                <Leaf className="w-8 h-8 mx-auto text-amber-500 mb-3" />
                                <h4 className="font-medium text-gray-800 mb-2">Nachhaltig</h4>
                                <p className="text-sm text-gray-600">Reparieren statt wegwerfen - für unsere Umwelt</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;