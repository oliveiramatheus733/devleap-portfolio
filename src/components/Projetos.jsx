import projects from "../data/projects";

function Projetos() {
  return (
    <section id="projetos" style={{ padding: '60px 40px', backgroundColor: '#0f1115', color: '#fff' }}>
      <h2 style={{ color: '#00A3E0', fontSize: 32, marginBottom: 40 }}>Projetos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 30 }}>
        {projects.map(project => (
          <div key={project.id} style={{ backgroundColor: '#1a1a1a', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
            <img src={project.image} alt={project.title} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
            <div style={{ padding: 20 }}>
              <h3 style={{ color: '#00A3E0' }}>{project.title}</h3>
              <p style={{ fontSize: 14, color: '#ccc' }}>{project.description}</p>
              <a href={project.link} style={{ display: 'inline-block', marginTop: 10, color: '#00A3E0', textDecoration: 'underline' }}>Ver mais</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
