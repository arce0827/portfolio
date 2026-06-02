import { Mail } from "lucide-react";
import SVGIcon from '../assets/git.svg?react';
import SVGIcon2 from '../assets/linkedin.svg?react';
import ProfilePic from '../assets/PFP/ProfilePic';

export default function About({ language, translations, onEmailCopy }) {
  return (
    <section id="about" data-fade-in style={{padding: '100px 20px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', opacity: 0, fontFamily: 'var(--font-inter)'}}>
      <div style={{maxWidth: '1000px', width: '100%'}}>
        <p style={{fontSize: '14px', color: '#9f7aea', letterSpacing: '2px', marginBottom: '20px', textTransform: 'uppercase'}}>{translations[language].aboutSection}</p>
        <h2 className='font-syncopate' style={{fontSize: '56px', fontWeight: '300', letterSpacing: '3px', color: '#ffffff', margin: '20px 0 100px 0', textTransform: 'uppercase'}}>
          {translations[language].aboutTitle}
        </h2>
        <div style={{display: 'grid', gridTemplateColumns: '300px 1fr', gap: '60px', alignItems: 'start'}}>
          <div style={{background: 'rgba(82, 39, 255, 0.2)', border: '1px solid rgba(159, 122, 234, 0.3)', borderRadius: '8px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <ProfilePic size={300} />
          </div>
          <div>
            <p className="font-inter" style={{fontSize: '18px', color: '#c9a9e8', lineHeight: '1.8', marginBottom: '20px'}}>
              {translations[language].aboutText1}
            </p>
            <p className="font-inter" style={{fontSize: '18px', color: '#c9a9e8', lineHeight: '1.8', marginBottom: '30px'}}>
              {translations[language].aboutText2}
            </p>
            <p className="font-inter" style={{fontSize: '18px', color: '#c9a9e8', lineHeight: '1.8', marginBottom: '30px'}}>
              {translations[language].aboutText3}
            </p>
            <div style={{display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px'}}>
              <button onClick={onEmailCopy} style={{background: 'none', border: 'none', color: '#9f7aea', cursor: 'pointer', transition: 'color 0.3s ease', padding: 0}} onMouseEnter={(e) => e.target.style.color = '#c084fc'} onMouseLeave={(e) => e.target.style.color = '#9f7aea'}>
                <Mail size={24} />
              </button>
              <a href="https://github.com/arce0827" target="_blank" rel="noopener noreferrer" style={{color: '#9f7aea', cursor: 'pointer', transition: 'color 0.3s ease'}} onMouseEnter={(e) => e.target.style.color = '#c084fc'} onMouseLeave={(e) => e.target.style.color = '#9f7aea'}>
                <SVGIcon size={5} />
              </a>
              <a href="https://www.linkedin.com/in/art%C5%ABras-semen%C4%8Diuk/" target="_blank" rel="noopener noreferrer" style={{color: '#9f7aea', cursor: 'pointer', transition: 'color 0.3s ease'}} onMouseEnter={(e) => e.target.style.color = '#c084fc'} onMouseLeave={(e) => e.target.style.color = '#9f7aea'}>
                <SVGIcon2 size={5} color="#9f7aea" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
