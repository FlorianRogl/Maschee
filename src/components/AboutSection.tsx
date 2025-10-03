import {Award, Heart, Leaf, Quote} from "lucide-react";

const AboutSection = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-amber-50/30 to-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto">
                    <div className="relative group order-2 md:order-1">
                        <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full bg-gradient-to-br from-amber-200/40 to-amber-100/40 rounded-2xl -z-10 group-hover:scale-105 transition-transform duration-500" />
                        <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
                            <img src='src/assets/DasBinIch.jpg'
                                 alt="Marlene Scheer - Ihre Schneiderin"
                                 className="w-full h-full object-cover object-center" />
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 md:p-4 shadow-lg">
                            <Heart className="w-6 md:w-8 h-6 md:h-8 text-amber-600 animate-pulse" />
                        </div>
                    </div>

                    <div className="space-y-6 order-1 md:order-2">
                        <div>
                            <p className="text-amber-700 font-light tracking-widest text-xs md:text-sm mb-3">IHRE SCHNEIDERIN MIT HERZ</p>
                            <h3 className="text-3xl md:text-4xl font-light mb-6 text-gray-800">Servus, ich bin Marlene</h3>
                            <div className="w-16 h-0.5 bg-amber-400 mb-6"></div>
                        </div>

                        <div className="space-y-5 text-gray-600 leading-relaxed">
                            <p className="text-base md:text-lg font-light">
                                Seit über 20 Jahren ist die Schneiderei nicht nur mein Beruf, sondern meine große Leidenschaft.
                                Jedes Kleidungsstück erzählt eine Geschichte - und ich helfe dir dabei, deine zu schreiben.
                            </p>
                            <p className="text-sm md:text-base">
                                In meinem gemütlichen Atelier in Leibnitz verbinde ich traditionelles Handwerk mit modernem Design.
                                Mit viel Liebe zum Detail und einem Gespür für das Besondere entstehen hier einzigartige Stücke,
                                die nicht nur perfekt sitzen, sondern auch deine Persönlichkeit unterstreichen.
                            </p>
                            <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 p-4 md:p-6 rounded-xl border-l-4 border-amber-400">
                                <Quote className="text-amber-600 w-6 md:w-8 h-6 md:h-8 mb-3" />
                                <p className="italic text-amber-800 text-sm md:text-base">
                                    "Für mich ist jedes Stück einzigartig - genau wie die Menschen, die es tragen.
                                    Es geht nicht nur um Mode, sondern darum, dass du dich wunderbar fühlst."
                                </p>
                                <p className="text-xs md:text-sm text-amber-700 mt-3 font-medium">- Marlene</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 md:gap-4 pt-4">
                            <div className="flex items-center space-x-2 text-amber-700 bg-amber-50 px-3 md:px-4 py-2 rounded-full">
                                <Award size={16} />
                                <span className="text-xs md:text-sm">20+ Jahre Erfahrung</span>
                            </div>
                            <div className="flex items-center space-x-2 text-amber-700 bg-amber-50 px-3 md:px-4 py-2 rounded-full">
                                <Heart size={16} />
                                <span className="text-xs md:text-sm">Mit Liebe handgefertigt</span>
                            </div>
                            <div className="flex items-center space-x-2 text-amber-700 bg-amber-50 px-3 md:px-4 py-2 rounded-full">
                                <Leaf size={16} />
                                <span className="text-xs md:text-sm">Nachhaltig & fair</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;