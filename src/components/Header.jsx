import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">
        Dev<span>Leap</span>
      </h1>
      <nav className="nav">
        <ul>
          <li><a href="#inicio" className="nav-link">Início</a></li>
          <li><a href="#projetos" className="nav-link">Projetos</a></li>
          <li><a href="#sobre" className="nav-link">Sobre</a></li>
          <li><a href="#contato" className="nav-link">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
