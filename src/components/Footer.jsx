import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2025 DevLeap Software. Todos os direitos reservados.</p>
        <nav className="footer-nav">
          <a href="#hero" className="footer-link">Início</a>
          <a href="#projetos" className="footer-link">Projetos</a>
          <a href="#sobre" className="footer-link">Sobre</a>
          <a href="#contato" className="footer-link">Contato</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
