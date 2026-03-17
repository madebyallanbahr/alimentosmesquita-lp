import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Mission from './components/Mission';
import Products from './components/Products';
import Tradition from './components/Tradition';
import CtaMarquee from './components/CtaMarquee';
import Footer from './components/Footer';
import useFadeIn from './hooks/useFadeIn';
import './App.css';

function App() {
  useFadeIn('.stat-card, .product-card, .value-item, .mission-text, .section-title-dark, .section-title-light, .cta-title');

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Mission />
      <Products />
      <Tradition />
      <CtaMarquee />
      <Footer />
    </>
  );
}

export default App;
