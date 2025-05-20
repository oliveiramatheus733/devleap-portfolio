import Header from './components/Header';
import Hero from './components/Hero';
import Projetos from './components/Projetos';
import Sobre from './components/Sobre';
import Contato from './components/Contatos'; // 👈 novo
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projetos />
      <Sobre />
      <Contato /> {/* 👈 adiciona no final */}
      <Footer /> {/* Aqui */}
    </>
  );
}

export default App;
