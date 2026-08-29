function News() {
  return (
    <section className="section--image section--news" id="noticias">
      <div className="container">
        <p className="eyebrow">Notícias e Eventos</p>
        <h2>O que se passa no Jardim</h2>
        <p>Fique a par das próximas oficinas, floradas sazonais e iniciativas especiais.</p>
        <a className="btn btn--primary" href="#eventos" style={{ marginTop: '24px' }}>
          Ver Todos os Eventos
        </a>
      </div>
    </section>
  );
}

export default News;