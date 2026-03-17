export default function CtaMarquee() {
  const marqueeTexts = [
    'Sabor Artesanal',
    'Tradição Gaúcha',
    'Desde 2014',
    'Pelotas-RS',
  ];

  return (
    <section className="cta-marquee-section">
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...marqueeTexts, ...marqueeTexts].map((text, i) => (
            <span className="marquee-text" key={i}>{text} &mdash;</span>
          ))}
        </div>
      </div>
      <div className="cta-content">
        <h2 className="cta-title">Faça seu Pedido<br/>pelo WhatsApp.</h2>
        <p className="cta-desc">Entre em contato e garanta os melhores produtos artesanais para o seu churrasco.</p>
        <a href="https://wa.me/5553999505876" className="btn-outline-red" target="_blank" rel="noopener">
          Pedir pelo WhatsApp
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5"/></svg>
        </a>
      </div>
    </section>
  );
}
