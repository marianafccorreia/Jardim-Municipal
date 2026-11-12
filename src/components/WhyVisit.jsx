import Reveal from './Reveal';

const whyCards = [
  {
    title: 'Mais de 2000 espécies',
    text: 'Do arboreto centenário à estufa tropical, cada canto conta uma história diferente da flora mundial.',
  },
  {
    title: 'Visitas guiadas todos os dias',
    text: 'Deixe-se conduzir por quem conhece cada planta pelo nome — literalmente.',
  },
  {
    title: 'Um espaço para todas as idades',
    text: 'Percursos acessíveis, área infantil e atividades pensadas para famílias, escolas e curiosos de qualquer idade.',
  },
];

function WhyVisit() {
  return (
    <section className="why-visit">
      <div className="container">
        <Reveal>
          <h2>Porquê Visitar</h2>
        </Reveal>
        <div className="why-visit-grid">
          {whyCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.15}>
              <article className="why-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyVisit;