import { useState } from 'react';

const products = [
  { id: 1, name: 'Linguiça Fina Especial', unit: 'kg', step: 0.5, image: '/assets/images/items/background_2_transparent.png' },
  { id: 2, name: 'Linguiça Campeira', unit: 'kg', step: 0.5, image: '/assets/images/items/background_1_transparente.png' },
  { id: 3, name: 'Linguiça Mista', unit: 'kg', step: 0.5, image: '/assets/images/items/background_34_transparent.png' },
];

export default function OrderCalculator() {
  const [quantities, setQuantities] = useState(() =>
    Object.fromEntries(products.map((p) => [p.id, 0]))
  );

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [deliveryMode, setDeliveryMode] = useState('retirada');

  const updateQty = (id, delta) => {
    setQuantities((prev) => {
      const product = products.find((p) => p.id === id);
      const newVal = Math.max(0, +(prev[id] + delta * product.step).toFixed(1));
      return { ...prev, [id]: newVal };
    });
  };

  const totalItems = Object.values(quantities).reduce((sum, q) => sum + q, 0);

  const buildWhatsAppUrl = () => {
    const lines = products
      .filter((p) => quantities[p.id] > 0)
      .map((p) => `• ${p.name}: ${quantities[p.id]}${p.unit}`);

    const greeting = name.trim() ? `Olá! Meu nome é *${name.trim()}*.` : 'Olá!';
    const companyLine = company.trim() ? `\nEmpresa: *${company.trim()}*` : '';
    const modeText = deliveryMode === 'entrega' ? '*Entrega*' : '*Retirada no local*';
    const message = `${greeting}${companyLine}\nGostaria de fazer o seguinte pedido:\n\n${lines.join('\n')}\n\nModalidade: ${modeText}\n\nAguardo confirmação. Obrigado!`;

    return `https://wa.me/5553999505876?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="calculator-section" id="pedido">
      <div className="calculator-inner">
        <p className="section-label dark">// Monte seu Pedido</p>
        <h2 className="section-title-dark">Calculadora de Pedidos</h2>
        <p className="calculator-subtitle">Selecione os produtos e quantidades, e envie direto pelo WhatsApp.</p>

        <div className="calculator-form">
          <div className="calculator-name">
            <label htmlFor="customer-name">Seu nome</label>
            <input
              id="customer-name"
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="calculator-name">
            <label htmlFor="customer-company">Empresa (opcional)</label>
            <input
              id="customer-company"
              type="text"
              placeholder="Nome da empresa"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="calculator-delivery">
            <label>Modalidade</label>
            <div className="delivery-options">
              <button
                type="button"
                className={`delivery-option${deliveryMode === 'retirada' ? ' active' : ''}`}
                onClick={() => setDeliveryMode('retirada')}
              >
                Retirada
              </button>
              <button
                type="button"
                className={`delivery-option${deliveryMode === 'entrega' ? ' active' : ''}`}
                onClick={() => setDeliveryMode('entrega')}
              >
                Entrega
              </button>
            </div>
          </div>

          <div className="calculator-products">
            {products.map((product) => (
              <div className="calc-product-row" key={product.id}>
                <div className="calc-product-img">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="calc-product-info">
                  <span className="calc-product-name">{product.name}</span>
                  <span className="calc-product-unit">por {product.unit}</span>
                </div>
                <div className="calc-qty-control">
                  <button
                    onClick={() => updateQty(product.id, -1)}
                    disabled={quantities[product.id] === 0}
                    aria-label={`Diminuir ${product.name}`}
                  >
                    −
                  </button>
                  <span className="calc-qty-value">
                    {quantities[product.id]}{product.unit}
                  </span>
                  <button
                    onClick={() => updateQty(product.id, 1)}
                    aria-label={`Aumentar ${product.name}`}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <a
            href={totalItems > 0 ? buildWhatsAppUrl() : undefined}
            className={`btn-primary calculator-submit${totalItems === 0 ? ' disabled' : ''}`}
            target="_blank"
            rel="noopener"
            onClick={(e) => totalItems === 0 && e.preventDefault()}
          >
            Enviar Pedido pelo WhatsApp
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
