import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';

function App() {
    useEffect(() => {
        // Intersection Observer für Scroll-Animationen
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -10% 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                }
            });
        }, observerOptions);

        // Alle section-Elemente beobachten
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
            <div className="app">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </div>
    );
}

export default App;
