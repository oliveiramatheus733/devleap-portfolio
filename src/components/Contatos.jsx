function Contato() {
  return (
    <section id="contato" style={sectionStyle}>
      <h2 style={tituloStyle}>Fale com a gente</h2>
      <p style={textoStyle}>
        Entre em contato com a DevLeap para tirar dúvidas, solicitar um orçamento ou conversar sobre seu projeto!
      </p>
      <div style={botoesStyle}>
        <a 
          href="https://wa.me/5514991252604" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ ...botaoBase, backgroundColor: '#25D366' }}
        >
          WhatsApp
        </a>
        <a 
          href="mailto:contato@devleap.com" 
          style={{ ...botaoBase, backgroundColor: '#00A3E0' }}
        >
          Email
        </a>
      </div>
    </section>
  );
}

const sectionStyle = {
  backgroundColor: '#1a1d23',
  padding: '80px 20px',
  color: '#fff',
  textAlign: 'center'
};

const tituloStyle = {
  fontSize: '32px',
  color: '#00A3E0',
  marginBottom: '20px'
};

const textoStyle = {
  fontSize: '18px',
  color: '#ccc',
  marginBottom: '30px'
};

const botoesStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  flexWrap: 'wrap'
};

const botaoBase = {
  padding: '12px 24px',
  borderRadius: '30px',
  color: '#fff',
  fontWeight: 'bold',
  textDecoration: 'none',
  transition: 'transform 0.2s',
};

export default Contato;
