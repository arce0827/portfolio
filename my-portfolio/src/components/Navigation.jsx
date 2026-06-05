import { useEffect, useState } from 'react';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: 'smooth' });
};

export default function Navigation({ language, translations }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const btnStyle = {
    background: 'none', border: 'none', color: '#9f7aea', cursor: 'pointer',
    fontFamily: 'var(--font-inter)', transition: 'color 0.3s ease', fontWeight: '500',
    whiteSpace: 'nowrap',
    fontSize: isMobile ? '11px' : '14px',
    padding: isMobile ? '4px 6px' : '6px 10px',
  };

  return (
    <nav style={{
      position: 'fixed', left: '50%', transform: 'translateX(-50%)',
      top: isMobile ? 'auto' : '20px',
      display: 'flex', gap: isMobile ? '0px' : '4px', zIndex: 100,
      background: 'rgba(10, 10, 10, 0.85)', backdropFilter: 'blur(10px)',
      padding: isMobile ? '8px 10px' : '10px 16px', borderRadius: '50px',
      border: '1px solid rgba(159, 122, 234, 0.3)',
      maxWidth: 'calc(100vw - 32px)',
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