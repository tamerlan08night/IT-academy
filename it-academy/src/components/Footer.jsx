import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Ліва колонка */}
                <div className="footer-col">
                    <div className="footer-logo">
                        <span className="logo-icon">&lt;&gt;</span>
                        <span className="logo-text">IT Academy</span>
                    </div>
                    <p className="footer-tagline">Læring i dag. Muligheter i morgen.</p>
                </div>

                {/* Середня колонка */}
                <div className="footer-col">
                    <h4>Lenker</h4>
                    <ul className="footer-links">
                        <li><a href="#">Hjem</a></li>
                        <li><a href="#">Artikler</a></li>
                        <li><a href="#">Ressurser</a></li>
                        <li><a href="#">Kontakt</a></li>
                    </ul>
                </div>

                {/* Права колонка */}
                <div className="footer-col">
                    <h4>Følg oss</h4>
                    <div className="social-links">
                        <a href="#">🌐 GitHub</a>
                        <a href="#">▶️ YouTube</a>
                        <a href="#">💼 LinkedIn</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 IT Academy. Alle rettigheter resivert.</p>
                <div className="footer-bottom-links">
                    <a href="#">Personvern</a> | <a href="#">Vilkår</a> | <a href="#">Kontakt</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;