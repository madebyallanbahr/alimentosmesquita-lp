export default function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo-box">
            <img src="/assets/images/logo-mesquita.png" alt="Alimentos Mesquita" className="footer-logo-icon" />
          </div>
          <p className="footer-tagline">Produção artesanal de linguiças e produtos para churrasco desde 2014.</p>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <h4 className="footer-col-title">Produtos</h4>
            <a href="#produtos">Linguiça Fina Especial</a>
            <a href="#produtos">Linguiça Campeira</a>
            <a href="#produtos">Linguiça Mista</a>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Empresa</h4>
            <a href="#sobre">Sobre Nós</a>
            <a href="#tradição">Nossa Tradição</a>
            <a href="#contato">Contato</a>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Contato</h4>
            <a href="https://wa.me/5553999505876" target="_blank" rel="noopener">(53) 99950-5876</a>
            <a href="https://instagram.com/alimentosmesquita" target="_blank" rel="noopener">@alimentosmesquita</a>
            <p className="footer-address">Av. Leopoldo Brod 4582<br/>Pelotas - RS</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Alimentos Mesquita. Todos os direitos reservados.</p>
        <div className="footer-social">
          <a href="https://instagram.com/alimentosmesquita" target="_blank" rel="noopener" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="5"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="https://wa.me/5553999505876" target="_blank" rel="noopener" aria-label="WhatsApp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 21l1.65-3.8a9 9 0 113.4 3.4L3 21"/>
              <path d="M9 10a.5.5 0 001 0V9a.5.5 0 00-1 0v1zm5 3a.5.5 0 000 1h1a.5.5 0 000-1h-1z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
