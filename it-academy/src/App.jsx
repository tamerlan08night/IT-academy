import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ArticlesSection from './components/ArticlesSection.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';

function App() {
    return (
        <div className="app">
            <Header />

            <main className="main-container">
                <div className="left-content">
                    <Hero />
                    <ArticlesSection />
                </div>

                <Sidebar />
            </main>

            <Footer />
        </div>
    );
}

export default App;