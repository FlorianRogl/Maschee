import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simuliere API-Call (hier später echte API einbinden)
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

            setTimeout(() => setSubmitStatus(null), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="relative py-32 bg-gradient-to-b from-[#FDF8F0] to-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-[#D4A418] mb-4">
                        Kontakt
                    </span>
                    <h2 className="font-serif text-5xl md:text-6xl text-[#704214] mb-6 font-light">
                        Lassen Sie uns sprechen
                    </h2>
                    <div className="w-20 h-px bg-[#D4A418] mx-auto mb-8"></div>
                    <p className="text-lg text-[#8B6B47] max-w-3xl mx-auto leading-relaxed">
                        Haben Sie Fragen zu unseren Arbeiten oder möchten Sie mehr über
                        unsere textile Kunst erfahren? Wir freuen uns auf Ihre Nachricht.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Location */}
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#D4A418] to-[#B8900F] rounded-lg flex items-center justify-center text-white mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-sm font-medium tracking-wider text-[#704214] uppercase mb-2">Ort</h3>
                            <p className="text-[#8B6B47] leading-relaxed">
                                St. Georgen<br />
                                Österreich
                            </p>
                        </div>

                        {/* Email */}
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#D4A418] to-[#B8900F] rounded-lg flex items-center justify-center text-white mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-sm font-medium tracking-wider text-[#704214] uppercase mb-2">E-Mail</h3>
                            <a
                                href="mailto:info@maschee.at"
                                className="text-[#8B6B47] hover:text-[#D4A418] transition-colors duration-300"
                            >
                                info@maschee.at
                            </a>
                        </div>

                        {/* Web */}
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#D4A418] to-[#B8900F] rounded-lg flex items-center justify-center text-white mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <h3 className="text-sm font-medium tracking-wider text-[#704214] uppercase mb-2">Web</h3>
                            <a
                                href="https://maschee.at"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#8B6B47] hover:text-[#D4A418] transition-colors duration-300"
                            >
                                maschee.at
                            </a>
                        </div>

                        {/* Info Box */}
                        <div className="bg-gradient-to-br from-[#704214] to-[#5A3410] p-6 rounded-xl text-white">
                            <svg className="w-8 h-8 text-[#D4A418] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-white/90 leading-relaxed text-sm">
                                Besuchen Sie uns in unserem Atelier und erleben Sie, wie aus Stoff und Idee
                                einzigartige Kunstwerke entstehen. Termine nach Vereinbarung.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name & Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-[#704214] mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-[#D4A418]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A418] focus:border-transparent transition-all duration-300"
                                            placeholder="Ihr Name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-[#704214] mb-2">
                                            E-Mail *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-[#D4A418]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A418] focus:border-transparent transition-all duration-300"
                                            placeholder="ihre.email@beispiel.at"
                                        />
                                    </div>
                                </div>

                                {/* Phone & Subject */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-[#704214] mb-2">
                                            Telefon
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-[#D4A418]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A418] focus:border-transparent transition-all duration-300"
                                            placeholder="+43 ..."
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-[#704214] mb-2">
                                            Betreff *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-[#D4A418]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A418] focus:border-transparent transition-all duration-300"
                                        >
                                            <option value="">Bitte wählen...</option>
                                            <option value="anfrage">Allgemeine Anfrage</option>
                                            <option value="auftrag">Auftrag / Bestellung</option>
                                            <option value="termin">Termin im Atelier</option>
                                            <option value="sonstiges">Sonstiges</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-[#704214] mb-2">
                                        Nachricht *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full px-4 py-3 border border-[#D4A418]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A418] focus:border-transparent transition-all duration-300 resize-none"
                                        placeholder="Teilen Sie uns Ihr Anliegen mit..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-[#D4A418] to-[#B8900F] text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Wird gesendet...
                                            </>
                                        ) : (
                                            <>
                                                Nachricht senden
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </div>

                                {/* Success/Error Message */}
                                {submitStatus === 'success' && (
                                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                                        <p className="flex items-center gap-2">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
                                        </p>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}