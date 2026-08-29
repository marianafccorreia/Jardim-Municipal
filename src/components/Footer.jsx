const footerColumns = [
  {
    title: 'Explorar',
    links: [
      { label: 'Sobre o Jardim', href: '#sobre' },
      { label: 'Visitar', href: '#visitar' },
      { label: 'Coleções', href: '#coleccoes' },
      { label: 'Eventos', href: '#eventos' },
      { label: 'Educação', href: '#educacao' },
    ],
  },
  {
    title: 'Apoiar',
    links: [
      { label: 'Amigos do Jardim', href: '#amigos' },
      { label: 'Doações', href: '#' },
      { label: 'Voluntariado', href: '#' },
    ],
  },
  {
    title: 'Informações',
    links: [
      { label: 'Contactos', href: '#contactos' },
      { label: 'Perguntas Frequentes', href: '#' },
      { label: 'Política de Privacidade', href: '#' },
      { label: 'Termos e Condições', href: '#' },
    ],
  },
];

function Footer() {
  return (
    <footer className="site-footer" id="contactos">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-tagline">
            Jardim Botânico Municipal — Um património vivo, cuidado todos os dias.
          </div>

          {footerColumns.map((col) => (
            <div className="footer-col" key={col.title}>
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          © 2026 Jardim Botânico Municipal. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;