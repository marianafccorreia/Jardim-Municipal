import { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Email submetido:', email);
    setEnviado(true);
    setEmail('');
  }

  return (
    <section className="section--image section--newsletter">
      <div className="container">
        <p className="eyebrow">Newsletter</p>
        <h2>Não perca nada do Jardim</h2>
        <p>Receba novidades sobre floradas, eventos e atividades diretamente no seu email.</p>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <label htmlFor="newsletter-email" className="visually-hidden">O seu email</label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            placeholder="O seu email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn btn--primary" type="submit">Subscrever</button>
        </form>

        {enviado && <p>Obrigado por subscrever!</p>}
      </div>
    </section>
  );
}

export default Newsletter;