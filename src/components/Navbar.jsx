import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 50) {
        navbar.style.borderBottomColor = 'rgba(185, 28, 28, 0.12)';
      } else {
        navbar.style.borderBottomColor = 'rgba(185, 28, 28, 0.08)';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-inner">
        <a href="#" className="logo">
          <img src="/assets/images/logo-mesquita.png" alt="Alimentos Mesquita" className="logo-icon" />
        </a>
        <div className={`nav-links${menuOpen ? ' active' : ''}`}>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#produtos" onClick={closeMenu}>Produtos</a>
          <a href="#tradição" onClick={closeMenu}>Tradição</a>
          <a href="#pedido" onClick={closeMenu}>Pedido</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </div>
        <a href="https://wa.me/5553999505876" className="btn-primary nav-cta" target="_blank" rel="noopener">
          Peça Agora
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5"/></svg>
        </a>
        <button
          className={`mobile-toggle${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
