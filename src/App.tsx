import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Dashboard';
import Contact from './components/Contact';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
