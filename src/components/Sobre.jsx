function Sobre() {
  return (
    <section id="sobre" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={textoStyle}>
          <h2 style={tituloStyle}>Sobre a DevLeap</h2>
          <p style={paragrafoStyle}>
            Somos uma software house focada em transformar ideias em soluções digitais personalizadas. 
            Atuamos no desenvolvimento de sistemas, apps e plataformas web com foco em desempenho, 
            escalabilidade e design moderno.
          </p>
          <p style={paragrafoStyle}>
            Acreditamos na tecnologia como ponte para evolução de negócios e profissionais, com atendimento 
            humanizado, código limpo e inovação contínua.
          </p>
        </div>
        <img 
  src="/avatarmatheus.png" 
  alt="Avatar do Matheus" 
  style={{
    width: 150,
    height: 150,
    borderRadius: '50%',
    objectFit: 'cover',
    display: 'block',
    margin: '0 auto',
  }} 
/>

      </div>
    </section>
  );
}

const sectionStyle = {
  backgroundColor: '#0f1115',
  color: '#fff',
  padding: '80px 20px'
};

const containerStyle = {
  maxWidth: '1000px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '40px',
  flexWrap: 'wrap'
};

const textoStyle = {
  flex: 1,
  minWidth: '280px'
};

const tituloStyle = {
  fontSize: '32px',
  color: '#00A3E0',
  marginBottom: '20px'
};

const paragrafoStyle = {
  fontSize: '18px',
  lineHeight: '1.6',
  color: '#ccc',
  marginBottom: '15px'
};

const imgStyle = {
  width: '220px',
  maxWidth: '100%'
};

export default Sobre;
