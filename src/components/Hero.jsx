export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-gradient hero-gradient-1"></div>
        <div className="hero-gradient hero-gradient-2"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <p className="section-label">// Desde 2014 em Pelotas-RS</p>
          <h1 className="hero-title">Sabor Artesanal,<br/>Tradição Gaúcha.</h1>
          <p className="hero-description">Produção artesanal de linguiças e produtos resfriados para o seu churrasco. Qualidade que você sente em cada mordida.</p>
          <div className="hero-actions">
            <a href="https://wa.me/5553999505876" className="btn-accent" target="_blank" rel="noopener">
              Faça seu Pedido
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5"/></svg>
            </a>
            <a href="#produtos" className="btn-outline-light">
              Ver Produtos
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-tags">
        <span className="tag">Linguiça Fina</span>
        <span className="tag">Campeira</span>
        <span className="tag">Mista</span>
        <span className="tag">Produtos Resfriados</span>
        <span className="tag">Churrasco</span>
      </div>
    </section>
  );
}
