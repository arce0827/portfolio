export default function Skills({ language, translations }) {
  return (
    <section id="skills" data-fade-in style={{padding: '100px 20px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', opacity: 0, fontFamily: 'var(--font-inter)'}}>
      <div style={{maxWidth: '1000px', width: '100%'}}>
        <p style={{fontSize: '14px', color: '#9f7aea', letterSpacing: '2px', marginBottom: '10px', textTransform: 'uppercase'}}>{translations[language].skillsSection}</p>
        <h2 className='section-title font-syncopate' style={{fontSize: '56px', fontWeight: '300', letterSpacing: '3px', color: '#ffffff', margin: '0 0 60px 0', textTransform: 'uppercase'}}>
          {translations[language].skillsTitle}
        </h2>

        {/* Languages */}
        <div style={{marginBottom: '50px'}}>
          <p style={{fontSize: '12px', color: '#9f7aea', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px'}}>
            {language === 'en' ? 'Languages' : 'Programavimo kalbos'}
          </p>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '12px'}}>
            {['C#', 'C', 'Java', 'C++', 'SQL', 'JavaScript', 'HTML', 'CSS', 'Python'].map(skill => (
              <span key={skill} style={{padding: '8px 18px', border: '1px solid rgba(159, 122, 234, 0.4)', borderRadius: '4px', color: '#c9a9e8', fontSize: '14px', background: 'rgba(82, 39, 255, 0.08)', letterSpacing: '0.5px'}}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div style={{marginBottom: '50px'}}>
          <p style={{fontSize: '12px', color: '#9f7aea', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px'}}>
            {language === 'en' ? 'Frameworks & Libraries' : 'Framework\'ai ir bibliotekos'}
          </p>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '12px'}}>
            {['React', 'Vite', 'JavaFX'].map(skill => (
              <span key={skill} style={{padding: '8px 18px', border: '1px solid rgba(159, 122, 234, 0.4)', borderRadius: '4px', color: '#c9a9e8', fontSize: '14px', background: 'rgba(82, 39, 255, 0.08)', letterSpacing: '0.5px'}}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div style={{marginBottom: '50px'}}>
          <p style={{fontSize: '12px', color: '#9f7aea', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px'}}>
            {language === 'en' ? 'Tools & Platforms' : 'Įrankiai ir platformos'}
          </p>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '12px'}}>
            {['Git', 'GitHub', 'PostgreSQL', 'Linux', 'Cisco Packet Tracer', 'IntelliJ IDEA', 'VS Code', 'Visual Studio', 'Docker', 'Kubernetes', 'Redis', 'Microsoft Office'].map(skill => (
              <span key={skill} style={{padding: '8px 18px', border: '1px solid rgba(159, 122, 234, 0.4)', borderRadius: '4px', color: '#c9a9e8', fontSize: '14px', background: 'rgba(82, 39, 255, 0.08)', letterSpacing: '0.5px'}}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Networking */}
        <div>
          <p style={{fontSize: '12px', color: '#9f7aea', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px'}}>
            {language === 'en' ? 'Networking' : 'Tinklai'}
          </p>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '12px'}}>
            {['TCP/IP', 'VLAN', 'DHCP', 'DNS', 'Network Switching', 'IP Addressing'].map(skill => (
              <span key={skill} style={{padding: '8px 18px', border: '1px solid rgba(159, 122, 234, 0.4)', borderRadius: '4px', color: '#c9a9e8', fontSize: '14px', background: 'rgba(82, 39, 255, 0.08)', letterSpacing: '0.5px'}}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
