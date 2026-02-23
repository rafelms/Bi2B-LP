import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Dashboard';
//import Contact from './components/Contact';
//import Clients from './components/Clients.tsx';
import Footer from './components/Footer';
import RDContact from './components/RDContact';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <RDContact />
      <Footer />
    </div>
  );
}

export default App;
