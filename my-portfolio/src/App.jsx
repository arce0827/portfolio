import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LightPillar from './bitsBackground/background'
import TextPressure from './bitsText/text'
import { Briefcase, GraduationCap, Mail} from "lucide-react";
import SVGIcon from './assets/git.svg?react';
import SVGIcon2 from './assets/linkedin.svg?react';
import ProfilePic from './assets/PFP/ProfilePic';


function App() {
  const [count, setCount] = useState(0)
  const [language, setLanguage] = useState('en');
  const [showToast, setShowToast] = useState(false);

  const translations = {
    en: {
      greeting: "Good to see you!",
      name: "I'M ARTŪRAS SEMENČIUK",
      tagline: "Developer, builder, and lifelong learner — crafting digital experiences with care.",
      aboutSection: "01 — ABOUT",
      aboutTitle: "About Me",
      aboutText1: "Hi, I'm a developer based somewhere on the internet. I love building products that feel as good as they look — intuitive, fast, and a little bit magical.",
      aboutText2: "Outside of code, I'm into music production, late-night cinema, and any excuse to travel. I believe great work comes from curiosity and good taste.",
      aboutText3: "Open to interesting collaborations. Let's make something worth remembering.",
      experienceSection: "02 — EXPERIENCE",
      experienceTitle: "Experience",
      jobTitle: "Manager of MIDI LAN Party • MIDI",
      jobDate: "2025 — 2026",
      jobDescription: "Organized a two-day event at Cyber City on April 18–19, bringing together over 150 participants through engaging sessions, networking opportunities, and community-driven activities. Managed sponsor outreach and communication, prepared and sent partnership proposals, and successfully secured collaborations with partners to support the event.",
      educationSection: "03 — EDUCATION",
      educationTitle: "Completed Courses",
      course1: "Procedural Programming (C)",
      course2: "Object-Oriented Programming (Java and C++)",
      course3: "Software Engineering Fundamentals",
      course4: "Project Management",
      course5: "CCNA Introduction to Networks",
      course6: "CCNA Routing, Switching, and Wireless Essentials",
      course7: "RDBMS and SQL (PostgreSQL)",
      university: "VU MIF",
      emailCopied: "Email address copied to clipboard!",
    },
    lt: {
      greeting: "Malonu Jus matyti!",
      name: "ESU ARTŪRAS SEMENČIUK",
      tagline: "Kūrėjas, programuotojas ir nuolatinis besimokantis — kurianti skaitmenines patirtis su rūpestingumu.",
      aboutSection: "01 — APIE",
      aboutTitle: "Apie Mane",
      aboutText1: "Sveikas, esu programuotojas iš interneto. Aš mėgstu kurti produktus, kurie atrodo taip pat gerai, kaip ir veikia — intuityvūs, greiti ir šiek tiek magiški.",
      aboutText2: "Ne tik kodam, man patinka muzikos gamyba, vėlaus vakaro kinas ir bet kokia priežastis keliauti. Aš tikiu, kad puikūs darbai gimsta iš smalsumo ir gero skonio.",
      aboutText3: "Atviras įdomius bendradarbiavimams. Kurkime ką nors, kurio verta prisiminti.",
      experienceSection: "02 — PATIRTIS",
      experienceTitle: "Patirtis",
      jobTitle: "MIDI LAN Party vadovas • MIDI",
      jobDate: "2025 — 2026",
      jobDescription: "Suorganizavau dviejų dienų renginį Cyber City balandžio 18–19 d., sukvietęs daugiau nei 150 dalyvių per įvairias sesijas, tinklų kūrimą ir bendruomenės veiklą. Vadovaujau sponzorų komunikaciją, parengiau ir išsiuntinėjau partnerystės pasiūlymus, sėkmingai užtikrindamas partnerių bendradarbiavimą.",
      educationSection: "03 — EDUKACIJA",
      educationTitle: "Baigti Kursai",
      course1: "Procedūrinis Programavimas (C)",
      course2: "Objektinis Programavimas (Java ir C++)",
      course3: "Programų sistemų inžinerijos pagrindai",
      course4: "Projektų Valdymas",
      course5: "CCNA Įvadas į Tinklus",
      course6: "CCNA \"Switching, Routing and Wireless Essentials\"",
      course7: "Reliacinių duomenų bazių sistemų valdymas ir SQL (PostgreSQL)",
      university: "VU MIF",
      emailCopied: "El. pašto adresas nukopijuotas į iškarpinę!",
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-section');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('[data-fade-in]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText('arturas.semenciuk@gmail.com');
    setShowToast(true);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div style={{overflow: 'hidden', background: '#0a0a0a', width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
          <LightPillar
            topColor="#5227FF"
            bottomColor="#FF9FFC"
            intensity={1.2}
            rotationSpeed={0.3}
            glowAmount={0.004}
            pillarWidth={5}
            pillarHeight={0.4}
            noiseIntensity={0.5}
            pillarRotation={25}
            interactive={true}
            mixBlendMode="screen"
            quality="high"
          />
          <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(10, 10, 10, 0.3)', pointerEvents: 'none', zIndex: 1}}></div>
        </div>

        {showToast && (
          <div style={{position: 'fixed', bottom: '30px', right: '30px', background: 'rgba(82, 39, 255, 0.9)', border: '1px solid rgba(159, 122, 234, 0.5)', borderRadius: '8px', padding: '16px 24px', color: '#ffffff', fontFamily: 'var(--font-inter)', fontSize: '14px', zIndex: 1000, animation: 'slideIn 0.3s ease-out', backdropFilter: 'blur(10px)'}}>
            {translations[language].emailCopied}
          </div>
        )}

        {/* Navigation Bar */}
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
          <button onClick={() => scrollToSection('education')} style={{background: 'none', border: 'none', color: '#9f7aea', cursor: 'pointer', fontFamily: 'var(--font-inter)', fontSize: '14px', transition: 'color 0.3s ease', padding: '6px 12px', fontWeight: '500'}} onMouseEnter={(e) => e.target.style.color = '#c084fc'} onMouseLeave={(e) => e.target.style.color = '#9f7aea'}>
            {translations[language].educationTitle}
          </button>
        </nav>

        <section id="hero" style={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '60px 20px', textAlign: 'center'}}>
          <div style={{position: 'absolute', top: 20, right: 20, display: 'flex', gap: '10px', zIndex: 10}}>
            <button onClick={() => setLanguage('en')} style={{padding: '8px 16px', background: language === 'en' ? '#5227FF' : 'rgba(82, 39, 255, 0.3)', color: '#ffffff', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: 'var(--font-inter)', fontWeight: '500'}}>EN</button>
            <button onClick={() => setLanguage('lt')} style={{padding: '8px 16px', background: language === 'lt' ? '#5227FF' : 'rgba(82, 39, 255, 0.3)', color: '#ffffff', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: 'var(--font-inter)', fontWeight: '500'}}>LT</button>
          </div>
          <div style={{maxWidth: '900px'}}>
            <TextPressure text={translations[language].greeting} fontSize={48} color="#ffffff" fontWeight={700} letterSpacing={0} />
            <h1 style={{fontSize: '52px', fontWeight: '400', color: '#ffffff', margin: '-15px 0 30px 0', lineHeight: '1.3', letterSpacing: '0px'}}>
              <span style={{color: '#ffffff', fontFamily: 'var(--font-syncopate)'}}>
                {translations[language].name}
              </span>
            </h1>
            <p style={{fontSize: '18px', color: '#c9a9e8', lineHeight: '1.7', margin: '50px auto 30px', maxWidth: '700px', fontFamily: 'var(--font-inter)'}}>
              {translations[language].tagline}
            </p>
          </div>
        </section>

        {/* About Section */}
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
                <div style={{display: 'flex', gap: '20px'}}>
                  <button onClick={handleEmailCopy} style={{background: 'none', border: 'none', color: '#9f7aea', cursor: 'pointer', transition: 'color 0.3s ease', padding: 0}} onMouseEnter={(e) => e.target.style.color = '#c084fc'} onMouseLeave={(e) => e.target.style.color = '#9f7aea'}>
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

        {/* Experience Section */}
        <section id="experience" data-fade-in style={{padding: '100px 20px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', opacity: 0, fontFamily: 'var(--font-inter)'}}>
          <div style={{maxWidth: '1000px', width: '100%'}}>
            <p style={{fontSize: '14px', color: '#9f7aea', letterSpacing: '2px', marginBottom: '10px', textTransform: 'uppercase'}}>{translations[language].experienceSection}</p>
            <h2 className='font-syncopate' style={{fontSize: '56px', fontWeight: '300', letterSpacing: '3px', color: '#ffffff', margin: '0 0 60px 0', textTransform: 'uppercase'}}>
              {translations[language].experienceTitle}
            </h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
              {/* Job Card 1 */}
              <div style={{border: '1px solid rgba(159, 122, 234, 0.3)', borderRadius: '8px', padding: '30px', background: 'rgba(82, 39, 255, 0.05)'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px'}}>
                  <div style={{display: 'flex', gap: '15px', alignItems: 'start'}}>
                    <Briefcase size={24} style={{color: '#9f7aea', marginTop: '2px'}} />
                    <div>
                      <h3 className="font-inter" style={{fontSize: '20px', color: '#ffffff', margin: '0 0 5px 0'}}>{translations[language].jobTitle}</h3>
                    </div>
                  </div>
                  <span className="font-inter" style={{fontSize: '14px', color: '#9f7aea', whiteSpace: 'nowrap'}}>{translations[language].jobDate}</span>
                </div>
                <p className="font-inter" style={{fontSize: '16px', color: '#c9a9e8', lineHeight: '1.6', margin: 0, marginLeft: '39px'}}>
                  {translations[language].jobDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" data-fade-in style={{padding: '100px 20px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', opacity: 0, fontFamily: 'var(--font-inter)'}}>
          <div style={{maxWidth: '1000px', width: '100%'}}>
            <p style={{fontSize: '14px', color: '#9f7aea', letterSpacing: '2px', marginBottom: '10px', textTransform: 'uppercase'}}>{translations[language].educationSection}</p>
            <h2 className='font-syncopate' style={{fontSize: '56px', fontWeight: '300', letterSpacing: '3px', color: '#ffffff', margin: '0 0 60px 0', textTransform: 'uppercase'}}>
              {translations[language].educationTitle}
            </h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px'}}>
              {/* Course Card 1 */}
              <div style={{border: '1px solid rgba(159, 122, 234, 0.3)', borderRadius: '8px', padding: '30px', background: 'rgba(82, 39, 255, 0.05)'}}>
                <div style={{fontSize: '32px', marginBottom: '15px', color: '#9f7aea'}}>
                  <GraduationCap size={32} />
                </div>
                <h3 className="font-inter" style={{fontSize: '18px', color: '#ffffff', margin: '0 0 5px 0'}}>{translations[language].course1}</h3>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <p className="font-inter" style={{fontSize: '14px', color: '#9f7aea', margin: 0}}>{translations[language].university}</p>
                  <span className="font-inter" style={{fontSize: '12px', color: '#9f7aea'}}>2024</span>
                </div>
              </div>

              {/* Course Card 2 */}
              <div style={{border: '1px solid rgba(159, 122, 234, 0.3)', borderRadius: '8px', padding: '30px', background: 'rgba(82, 39, 255, 0.05)'}}>
                <div style={{fontSize: '32px', marginBottom: '15px', color: '#9f7aea'}}>
                  <GraduationCap size={32} />
                </div>
                <h3 className="font-inter" style={{fontSize: '18px', color: '#ffffff', margin: '0 0 5px 0'}}>{translations[language].course2}</h3>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <p className="font-inter" style={{fontSize: '14px', color: '#9f7aea', margin: 0}}>{translations[language].university}</p>
                  <span className="font-inter" style={{fontSize: '12px', color: '#9f7aea'}}>2025</span>
                </div>
              </div>

              {/* Course Card 3 */}
              <div style={{border: '1px solid rgba(159, 122, 234, 0.3)', borderRadius: '8px', padding: '30px', background: 'rgba(82, 39, 255, 0.05)'}}>
                <div style={{fontSize: '32px', marginBottom: '15px', color: '#9f7aea'}}>
                  <GraduationCap size={32} />
                </div>
                <h3 className="font-inter" style={{fontSize: '18px', color: '#ffffff', margin: '0 0 5px 0'}}>{translations[language].course3}</h3>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <p className="font-inter" style={{fontSize: '14px', color: '#9f7aea', margin: 0}}>{translations[language].university}</p>
                  <span className="font-inter" style={{fontSize: '12px', color: '#9f7aea'}}>2025</span>
                </div>
              </div>

              {/* Course Card 4 */}
              <div style={{border: '1px solid rgba(159, 122, 234, 0.3)', borderRadius: '8px', padding: '30px', background: 'rgba(82, 39, 255, 0.05)'}}>
                <div style={{fontSize: '32px', marginBottom: '15px', color: '#9f7aea'}}>
                  <GraduationCap size={32} />
                </div>
                <h3 className="font-inter" style={{fontSize: '18px', color: '#ffffff', margin: '0 0 5px 0'}}>{translations[language].course4}</h3>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <p className="font-inter" style={{fontSize: '14px', color: '#9f7aea', margin: 0}}>{translations[language].university}</p>
                  <span className="font-inter" style={{fontSize: '12px', color: '#9f7aea'}}>2026</span>
                </div>
              </div>

              {/* Course Card 5 */}
               <div style={{border: '1px solid rgba(159, 122, 234, 0.3)', borderRadius: '8px', padding: '30px', background: 'rgba(82, 39, 255, 0.05)'}}>
                <div style={{fontSize: '32px', marginBottom: '15px', color: '#9f7aea'}}>
                  <GraduationCap size={32} />
                </div>
                <h3 className="font-inter" style={{fontSize: '18px', color: '#ffffff', margin: '0 0 5px 0'}}>{translations[language].course5}</h3>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <p className="font-inter" style={{fontSize: '14px', color: '#9f7aea', margin: 0}}>{translations[language].university}</p>
                  <span className="font-inter" style={{fontSize: '12px', color: '#9f7aea'}}>2026</span>
                </div>
              </div>

              
              {/* Course Card 6 */}
               <div style={{border: '1px solid rgba(159, 122, 234, 0.3)', borderRadius: '8px', padding: '30px', background: 'rgba(82, 39, 255, 0.05)'}}>
                <div style={{fontSize: '32px', marginBottom: '15px', color: '#9f7aea'}}>
                  <GraduationCap size={32} />
                </div>
                <h3 className="font-inter" style={{fontSize: '18px', color: '#ffffff', margin: '0 0 5px 0'}}>{translations[language].course6}</h3>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <p className="font-inter" style={{fontSize: '14px', color: '#9f7aea', margin: 0}}>{translations[language].university}</p>
                  <span className="font-inter" style={{fontSize: '12px', color: '#9f7aea'}}>2026</span>
                </div>
              </div>

              {/* Course Card 7 */}
               <div style={{border: '1px solid rgba(159, 122, 234, 0.3)', borderRadius: '8px', padding: '30px', background: 'rgba(82, 39, 255, 0.05)'}}>
                <div style={{fontSize: '32px', marginBottom: '15px', color: '#9f7aea'}}>
                  <GraduationCap size={32} />
                </div>
                <h3 className="font-inter" style={{fontSize: '18px', color: '#ffffff', margin: '0 0 5px 0'}}>{translations[language].course7}</h3>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <p className="font-inter" style={{fontSize: '14px', color: '#9f7aea', margin: 0}}>{translations[language].university}</p>
                  <span className="font-inter" style={{fontSize: '12px', color: '#9f7aea'}}>2025</span>
                </div>
              </div>

            </div>
          </div>
        </section>    </>
  )
}

export default App
