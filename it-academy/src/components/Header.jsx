import './Header.css';

function Header() {
    return (
        <header className="header">
            {/* Верхня темно-синя панель */}
            <div className="top-bar">
                <div className="logo">
                    <span className="logo-icon">&lt;&gt;</span>
                    <span className="logo-text">IT Academy</span>
                </div>
                <nav className="top-nav">
                    <a href="#">Hjem</a>
                    <a href="#">Om oss</a>
                    <a href="#">Kontakt</a>
                </nav>
            </div>

            {/* Нижня світла панель з меню */}
            <div className="sub-nav">
                <a href="#" className="active">Hjem</a>
                <a href="#">Tjenester</a>
                <a href="#">Artikler</a>
                <a href="#">Ressurser</a>
                <a href="#">Kontakt</a>
            </div>
        </header>
    );
}

export default Header;