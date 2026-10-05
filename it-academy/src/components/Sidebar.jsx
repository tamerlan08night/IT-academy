import './Sidebar.css';

function Sidebar() {
    return (
        <aside className="sidebar">
            {/* Блок 1: Om oss */}
            <div className="sidebar-card">
                <h3>Om oss</h3>
                <p>
                    IT Academy er en læringsplattform for elever som vil utforske teknologi,
                    utvikling, drift og brukerstøtte.
                </p>
                <button className="sidebar-btn">Les mer &rarr;</button>
            </div>

            {/* Блок 2: Ressurser */}
            <div className="sidebar-card">
                <h3>Ressurser</h3>
                <ul className="resources-list">
                    <li>📄 Notater</li>
                    <li>▶️ Videotutorials</li>
                    <li>📥 Nedlastinger</li>
                    <li>🔗 Nyttige lenker</li>
                </ul>
            </div>

            {/* Блок 3: Цитата */}
            <div className="sidebar-card quote-card">
                <p className="quote-icon">“</p>
                <p className="quote-text">
                    “Teknologi er enklest når vi lærer sammen.”
                </p>
            </div>
        </aside>
    );
}

export default Sidebar;