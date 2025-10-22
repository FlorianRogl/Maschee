import '../../App.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3 className="footer-logo">MasSchee</h3>
                        <p className="footer-tagline">Textilkunst aus St. Georgen</p>
                    </div>

                    <div className="footer-links">
                        <a href="#impressum">Impressum</a>
                        <span className="footer-dot">•</span>
                        <a href="#datenschutz">Datenschutz</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} MasSchee. Handgefertigt mit Liebe zum Detail.</p>
                </div>
            </div>
        </footer>
    );
}