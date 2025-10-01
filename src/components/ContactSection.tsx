import {Clock, Flower2} from "lucide-react";

const ContactSection = () => {
    return (
        <section id="contact" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-amber-700 font-light tracking-widest text-xs md:text-sm mb-3">MEIN ATELIER</p>
                    <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Ich freue mich auf dich!</h3>
                    <div className="w-20 md:w-24 h-px bg-amber-400 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-xl md:text-2xl font-light text-gray-800 mb-4">Komm vorbei!</h4>
                            <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
                                In meinem gemütlichen Atelier in Leibnitz nehme ich mir Zeit für dich und deine Wünsche.
                                Bei einer Tasse Kaffee und hausgemachten Keksen besprechen wir deine Ideen und finden gemeinsam die perfekte Lösung.
                            </p>
                        </div>

                        <div className="space-y-4 md:space-y-6">
                            <div className="flex items-start space-x-4 group">
                                <div className="bg-amber-100 p-2.5 md:p-3 rounded-full group-hover:bg-amber-200 transition-colors">
                                    <Clock className="text-amber-700" size={18} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-800 mb-1 text-sm md:text-base">Öffnungszeiten</h4>
                                    <p className="text-gray-600 font-light text-sm md:text-base">Mo-Fr: 9-18 Uhr<br />
                                        Sa: Nach Vereinbarung<br />
                                        <span className="text-xs italic">Flexibel für dich da!</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-8 md:p-10 shadow-lg">
                        <div className="text-center mb-6 md:mb-8">
                            <Flower2 className="w-10 md:w-12 h-10 md:h-12 mx-auto text-amber-600 mb-4" />
                            <h4 className="text-xl md:text-2xl font-light mb-3 text-gray-800">Lass uns deine Ideen verwirklichen</h4>
                            <p className="text-sm md:text-base text-gray-600 font-light">
                                Egal ob Änderung, Neuanfertigung oder kreatives Upcycling -
                                ich bin für dich da und freue mich auf dein Projekt!
                            </p>
                        </div>

                        <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 md:py-4 rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-light tracking-wide text-base md:text-lg">
                            Termin vereinbaren
                        </button>

                        <div className="mt-6 pt-6 border-t border-amber-200">
                            <p className="text-center text-xs md:text-sm text-gray-600 mb-3">Öffnungszeiten diese Woche:</p>
                            <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                                <div className="flex justify-between">
                                    <span>Mo-Mi:</span>
                                    <span className="font-medium">9:00 - 18:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Do-Fr:</span>
                                    <span className="font-medium">9:00 - 18:00</span>
                                </div>
                            </div>
                        </div>

                        <p className="text-center mt-6 text-xs md:text-sm text-gray-600 italic font-light">
                            "Jedes Kleidungsstück verdient eine zweite Chance"
                        </p>
                    </div>
                </div>

                <div className="mt-12 md:mt-16 bg-gradient-to-r from-amber-50 via-white to-amber-50 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
                    <h4 className="text-center text-xl md:text-2xl font-light text-gray-800 mb-6">So findest du zu mir</h4>
                    <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2742.0!2d15.5333!3d46.7806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDQ2JzUwLjIiTiAxNcKwMzInMDAuMCJF!5e0!3m2!1sde!2sat!4v1234567890"
                            width="100%"
                            height="400"
                            style={{border:0}}
                            allowFullScreen= {false}
                            loading="lazy"
                            className="rounded-xl"
                        ></iframe>
                    </div>
                    <p className="text-center mt-4 text-xs md:text-sm text-gray-600">
                        Parkplätze direkt vor dem Atelier • Barrierefrei zugänglich
                    </p>
                </div>
            </div>
        </section>
    );
};


export default ContactSection
