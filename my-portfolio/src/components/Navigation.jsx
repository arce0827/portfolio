const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Navigation({ language, translations }) {
  return (
    <nav style={{position: 'fixed', top: '80px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '20px', zIndex: 100, background: 'rgba(10, 10, 10, 0.8)', backdropFilter: 'blur(10px)', padding: '12px 30px', borderRadius: '50px', border: '1px solid rgba(159, 122, 234, 0.3)'}}>
      <button onClick={() => scrollToSection('hero')} style={{background: 'none', border: 'none', color: '#9f7aea', cursor: 'pointer', fontFamily: 'var(--font-inter)', fontSize: '14px', transition: 'color 0.3s ease', padding: '6px 12px', fontWeight: '500'}} onMouseEnter={(e) => e.target.style.color = '#c084fc'} onMouseLeave={(e) => e.target.style.color = '#9f7aea'}>
        {language === 'en' ? 'Home' : 'Pradžia'}
      </button>
      <button onClick={() => scrollToSection('about')} style={{background: 'none', border: 'none', color: '#9f7aea', cursor: 'pointer', fontFamily: 'var(--font-inter)', fontSize: '14px', transition: 'color 0.3s ease', padding: '6px 12px', fontWeight: '500'}} onMouseEnter={(e) => e.target.style.color = '#c084fc'} onMouseLeave={(e) => e.target.style.color = '#9f7aea'}>
        {translations[language].aboutTitle}
      </button>
      <button onClick={() => scrollToSection('experience')} style={{background: 'none', border: 'none', color: '#9f7aea', cursor: 'pointer', fontFamily: 'var(--font-inter)', fontSize: '14px', transition: 'color 0.3s ease', padding: '6px 12px', fontWeight: '500'}} onMouseEnter={(e) => e.target.style.color = '#c084fc'} onMouseLeave={(e) => e.target.style.color = '#9f7aea'}>
        {translations[language].experienceTitle}
      </button>
      <button onClick={() => scrollToSection('skills')} style={{background: 'none', border: 'none', color: '#9f7aea', cursor: 'pointer', fontFamily: 'var(--font-inter)', fontSize: '14px', transition: 'color 0.3s ease', padding: '6px 12px', fontWeight: '500'}} onMouseEnter={(e) => e.target.style.color = '#c084fc'} onMouseLeave={(e) => e.target.style.color = '#9f7aea'}>
        {language === 'en' ? 'Skills' : 'Įgūdžiai'}
      </button>
      <button onClick={() => scrollToSection('education')} style={{background: 'none', border: 'none', color: '#9f7aea', cursor: 'pointer', fontFamily: 'var(--font-inter)', fontSize: '14px', transition: 'color 0.3s ease', padding: '6px 12px', fontWeight: '500'}} onMouseEnter={(e) => e.target.style.color = '#c084fc'} onMouseLeave={(e) => e.target.style.color = '#9f7aea'}>
        {translations[language].educationTitle}
      </button>
    </nav>
  )
}
