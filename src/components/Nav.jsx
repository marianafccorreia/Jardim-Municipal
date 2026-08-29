import { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        <nav className={`site-nav ${isOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          <ul>
            <li><a className="pill pill--nav" href="#inicio">Início</a></li>
            <li><a className="pill pill--nav" href="#visitar">Visitar</a></li>
            <li><a className="pill pill--nav" href="#coleccoes">Coleções &amp; Espécies</a></li>
            <li><a className="pill pill--nav" href="#eventos">Atividades &amp; Eventos</a></li>
            <li><a className="pill pill--nav" href="#educacao">Educação</a></li>
            <li><a className="pill pill--nav" href="#amigos">Amigos do Jardim</a></li>
            <li><a className="pill pill--nav" href="#noticias">Notícias</a></li>
            <li><a className="pill pill--nav" href="#contactos">Contactos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;