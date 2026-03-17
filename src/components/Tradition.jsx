const values = [
  {
    number: '01',
    title: 'Ingredientes Selecionados',
    desc: 'Matéria-prima de qualidade, cuidadosamente escolhida para garantir sabor e frescor.',
  },
  {
    number: '02',
    title: 'Produção Artesanal',
    desc: 'Cada linguiça é preparada com técnicas tradicionais, sem processos industrializados.',
  },
  {
    number: '03',
    title: 'Receitas Gaúchas',
    desc: 'Temperos e combinações que preservam o sabor autêntico do Rio Grande do Sul.',
  },
  {
    number: '04',
    title: 'Compromisso com Você',
    desc: 'Produtos resfriados, prontos para o seu churrasco com a qualidade que você merece.',
  },
];

export default function Tradition() {
  return (
    <section className="tradition-section" id="tradição">
      <div className="tradition-inner">
        <div className="tradition-text">
          <p className="section-label dark">// Nossa História</p>
          <h2 className="section-title-dark">Tradição que Começa no Cuidado</h2>
          <p className="tradition-desc">Desde 2014, a Alimentos Mesquita dedica-se à produção artesanal de linguiças em Pelotas-RS. Cada produto carrega o compromisso com a qualidade, o respeito às receitas tradicionais gaúchas e a paixão por oferecer o melhor para a mesa dos nossos clientes.</p>

          <div className="tradition-values">
            {values.map((item) => (
              <div className="value-item" key={item.number}>
                <span className="value-number">{item.number}</span>
                <div>
                  <h4 className="value-title">{item.title}</h4>
                  <p className="value-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="tradition-visual">
          <img src="/assets/images/items/avental.png" className="tradition-img" alt="imagem de avental da alimentos mesquita" />
        </div>
      </div>
    </section>
  );
}
