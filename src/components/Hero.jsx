import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <h1>Bem-vindo à <span>DevLeap</span></h1>
        <p>Transformamos ideias em software moderno, limpo e funcional.</p>
        <a href="#projetos" className="btn-primary">Ver Projetos</a>
      </div>
    </section>
  );
}

export default Hero;
