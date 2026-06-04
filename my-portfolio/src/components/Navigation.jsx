const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const btnStyle = {
  background: 'none',
  border: 'none',
  color: '#9f7aea',
  cursor: 'pointer',
  fontFamily: 'var(--font-inter)',
  fontSize: '14px',
  transition: 'color 0.3s ease',
  padding: '6px 10px',
  fontWeight: '500',
  whiteSpace: 'nowrap'
};


export default function Navigation({ language, translations }) {
  return (
    <nav style={{
      position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
      display: 'flex', gap: '4px', zIndex: 100,
      background: 'rgba(10, 10, 10, 0.85)', backdropFilter: 'blur(10px)',
      padding: '10px 16px', borderRadius: '50px',
      border: '1px solid rgba(159, 122, 234, 0.3)',
      maxWidth: 'calc(100vw - 32px)', flexWrap: 'nowrap', overflowX: 'auto',
    }}>
      <button onClick={() => scrollToSection('hero')} style={btnStyle}
        onMouseEnter={(e) => e.target.style.color = '#c084fc'}
        onMouseLeave={(e) => e.target.style.color = '#9f7aea'}>
        {language === 'en' ? 'Home' : 'Pradžia'}
      </button>
      <button onClick={() => scrollToSection('about')} style={btnStyle}
        onMouseEnter={(e) => e.target.style.color = '#c084fc'}
        onMouseLeave={(e) => e.target.style.color = '#9f7aea'}>
        {translations[language].aboutTitle}
      </button>
      <button onClick={() => scrollToSection('experience')} style={btnStyle}
        onMouseEnter={(e) => e.target.style.color = '#c084fc'}
        onMouseLeave={(e) => e.target.style.color = '#9f7aea'}>
        {translations[language].experienceTitle}
      </button>
      <button onClick={() => scrollToSection('skills')} style={btnStyle}
        onMouseEnter={(e) => e.target.style.color = '#c084fc'}
        onMouseLeave={(e) => e.target.style.color = '#9f7aea'}>
        {language === 'en' ? 'Skills' : 'Įgūdžiai'}
      </button>
      <button onClick={() => scrollToSection('education')} style={btnStyle}
        onMouseEnter={(e) => e.target.style.color = '#c084fc'}
        onMouseLeave={(e) => e.target.style.color = '#9f7aea'}>
        {translations[language].educationTitle}
      </button>
    </nav>
  );
}
