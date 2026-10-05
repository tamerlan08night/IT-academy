import './ArticlesSection.css';

function ArticlesSection() {
    const articles = [
        {
            id: 1,
            title: 'Kom i gang med React',
            description: 'En enkel introduksjon til React med Vite. Lær komponenter, state og routing.',
            category: 'Utvikling',
            categoryClass: 'badge-blue',
            date: '12. sep. 2025',
            image: '/images/React.jpg' 
        },
        {
            id: 2,
            title: 'Grunnleggende nettverk',
            description: 'Lær de viktigste begrepene innen nettverk og hvordan det henger sammen.',
            category: 'Drift',
            categoryClass: 'badge-green',
            date: '5. sep. 2025',
            image: '/images/Server.jpg'
        },
        {
            id: 3,
            title: 'God brukerstøtte',
            description: 'Tips og triks for bedre kommunikasjon og raskere hjelp.',
            category: 'Brukerstøtte',
            categoryClass: 'badge-purple',
            date: '1. sep. 2025',
            image: '/images/Support.jpg'
        }
    ];

    return (
        <section className="articles-section">
            <div className="articles-header">
                <h2>Siste artikler</h2>
                <a href="#" className="see-all-link">Se alle artikler &rarr;</a>
            </div>

            <div className="articles-grid">
                {articles.map((article) => (
                    <article key={article.id} className="article-card">

                        {/* ДОДАЛИ УМОВУ: якщо є image — малюємо <img>, інакше — замінник */}
                        {article.image ? (
                            <img
                                src={article.image}
                                alt={article.title}
                                className="card-image"
                            />
                        ) : (
                            <div className={`card-image-placeholder ${article.categoryClass}`}>
                                <span>💻</span>
                            </div>
                        )}

                        <div className="card-body">
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                        </div>

                        <div className="card-footer">
                            <span className={`badge ${article.categoryClass}`}>
                                {article.category}
                            </span>
                            <span className="card-date">{article.date}</span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default ArticlesSection;