const products = [
  {
    image: '/assets/images/items/background_2_transparent.png',
    imageStyle: { marginLeft: '-40px' },
    name: 'Linguiça Fina Especial',
    desc: 'Nossa linguiça fina especial, feita com cortes selecionados e temperos tradicionais. Perfeita para grelhar.',
    tag: 'Mais Vendida',
  },
  {
    image: '/assets/images/items/background_1_transparente.png',
    imageStyle: { marginLeft: '-35px' },
    name: 'Linguiça Campeira',
    desc: 'A autêntica linguiça campeira gaúcha, com sabor marcante e textura rústica que lembra o campo.',
    tag: 'Tradição',
  },
  {
    image: '/assets/images/items/background_34_transparent.png',
    imageStyle: { marginLeft: '-20px' },
    imageProps: { width: '260px', height: '170px' },
    name: 'Linguiça Mista',
    desc: 'Blend exclusivo de frango e suína, unindo leveza e sabor em uma combinação única e equilibrada.',
    tag: 'Frango & Suína',
  },
];

export default function Products() {
  return (
    <section className="products-section" id="produtos">
      <div className="products-inner">
        <p className="section-label light">// Nossos Produtos</p>
        <h2 className="section-title-light">O Melhor para o seu Churrasco</h2>
        <p className="section-desc-light">Produtos artesanais, preparados com receitas tradicionais gaúchas e ingredientes de qualidade.</p>

        <div className="products-grid">
          {products.map((product, i) => (
            <div className="product-card" key={i} style={{ '--i': i }}>
              <div className="product-icon" style={product.imageStyle}>
                <img src={product.image} {...product.imageProps} alt={product.name} />
              </div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-desc">{product.desc}</p>
              <span className="product-tag">{product.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
