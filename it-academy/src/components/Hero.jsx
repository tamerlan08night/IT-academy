import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <img src="/images/hero-bg.jpg" alt="Hero background" className="hero-img" />
            <div className="hero-content">
                <h1>Lær teknologi for fremtiden</h1>
                <p>
                    Enkle forklaringer. Praktiske eksempler. Virkelige ferdigheter.
                </p>
                <button className="hero-btn">Kom i gang &rarr;</button>
            </div>
        </section>
    );
}

export default Hero;