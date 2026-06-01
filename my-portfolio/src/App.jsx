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


function App() {
  const [count, setCount] = useState(0)

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

        <section style={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '60px 20px', textAlign: 'center'}}>
          <div style={{maxWidth: '900px'}}>
            <h1 className='font-syncopate' style={{fontSize: '80px', fontWeight: '300', letterSpacing: '8px', color: '#ffffff', margin: '0 0 20px 0', lineHeight: '1.2', textTransform: 'uppercase'}}>
              Welcome to my resume
            </h1>
            <p style={{fontSize: '20px', color: '#c9a9e8', lineHeight: '1.8', margin: '40px 0 50px 0', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
              Developer, builder, and lifelong learner — crafting digital experiences with care.
            </p>
            <button style={{
              padding: '14px 40px',
              fontSize: '16px',
              fontWeight: '500',
              color: '#ffffff',
              background: 'transparent',
              border: '2px solid #9f7aea',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#9f7aea';
              e.target.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#ffffff';
            }}>
              Discover More
            </button>
          </div>
          <div style={{position: 'absolute', bottom: '40px', color: '#9ca3af', fontSize: '12px', letterSpacing: '3px', animation: 'pulse 2s infinite'}}>
            S C R O L L
          </div>
        </section>

        {/* About Section */}
        <section data-fade-in style={{padding: '100px 20px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', opacity: 0}}>
          <div style={{maxWidth: '1000px', width: '100%'}}>
            <p style={{fontSize: '14px', color: '#9f7aea', letterSpacing: '2px', marginBottom: '10px', textTransform: 'uppercase'}}>01 — ABOUT</p>
            <h2 className='font-syncopate' style={{fontSize: '56px', fontWeight: '300', letterSpacing: '3px', color: '#ffffff', margin: '0 0 60px 0', textTransform: 'uppercase'}}>
              About Me
            </h2>
            <div style={{display: 'grid', gridTemplateColumns: '300px 1fr', gap: '60px', alignItems: 'start'}}>
              <div style={{background: 'rgba(82, 39, 255, 0.2)', border: '1px solid rgba(159, 122, 234, 0.3)', borderRadius: '8px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <p style={{fontSize: '64px', color: '#9f7aea', margin: 0}}>JD</p>
              </div>
              <div>
                <p style={{fontSize: '18px', color: '#c9a9e8', lineHeight: '1.8', marginBottom: '20px'}}>
                  Hi, I'm a developer based somewhere on the internet. I love building products that feel as good as they look — intuitive, fast, and a little bit magical.
                </p>
                <p style={{fontSize: '18px', color: '#c9a9e8', lineHeight: '1.8', marginBottom: '30px'}}>
                  Outside of code, I'm into music production, late-night cinema, and any excuse to travel. I believe great work comes from curiosity and good taste.
                </p>
                <p style={{fontSize: '18px', color: '#c9a9e8', lineHeight: '1.8', marginBottom: '30px'}}>
                  Open to interesting collaborations. Let's make something worth remembering.
                </p>
                <div style={{display: 'flex', gap: '20px'}}>
                  <a href="mailto:your@email.com" style={{color: '#9f7aea', cursor: 'pointer', transition: 'color 0.3s ease'}} onMouseEnter={(e) => e.target.style.color = '#c084fc'} onMouseLeave={(e) => e.target.style.color = '#9f7aea'}>
                    <Mail size={24} />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{color: '#9f7aea', cursor: 'pointer', transition: 'color 0.3s ease'}} onMouseEnter={(e) => e.target.style.color = '#c084fc'} onMouseLeave={(e) => e.target.style.color = '#9f7aea'}>
                    <SVGIcon size={5} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{color: '#9f7aea', cursor: 'pointer', transition: 'color 0.3s ease'}} onMouseEnter={(e) => e.target.style.color = '#c084fc'} onMouseLeave={(e) => e.target.style.color = '#9f7aea'}>
                    <SVGIcon2 size={5} color="#9f7aea" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section data-fade-in style={{padding: '100px 20px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', opacity: 0}}>
          <div style={{maxWidth: '1000px', width: '100%'}}>
            <p style={{fontSize: '14px', color: '#9f7aea', letterSpacing: '2px', marginBottom: '10px', textTransform: 'uppercase'}}>02 — EXPERIENCE</p>
            <h2 className='font-syncopate' style={{fontSize: '56px', fontWeight: '300', letterSpacing: '3px', color: '#ffffff', margin: '0 0 60px 0', textTransform: 'uppercase'}}>
              Experience
            </h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
              {/* Job Card 1 */}
              <div style={{border: '1px solid rgba(159, 122, 234, 0.3)', borderRadius: '8px', padding: '30px', background: 'rgba(82, 39, 255, 0.05)'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px'}}>
                  <div style={{display: 'flex', gap: '15px', alignItems: 'start'}}>
                    <Briefcase size={24} style={{color: '#9f7aea', marginTop: '2px'}} />
                    <div>
                      <h3 style={{fontSize: '20px', color: '#ffffff', margin: '0 0 5px 0'}}>Senior Frontend Developer</h3>
                      <p style={{fontSize: '16px', color: '#9f7aea', margin: 0}}>Acme Corp</p>
                    </div>
                  </div>
                  <span style={{fontSize: '14px', color: '#9f7aea', whiteSpace: 'nowrap'}}>2022 — Present</span>
                </div>
                <p style={{fontSize: '16px', color: '#c9a9e8', lineHeight: '1.6', margin: 0, marginLeft: '39px'}}>
                  Leading the redesign of the core product. Building component systems and shipping polished UI to thousands of users daily.
                </p>
              </div>

              {/* Job Card 2 */}
              <div style={{border: '1px solid rgba(159, 122, 234, 0.3)', borderRadius: '8px', padding: '30px', background: 'rgba(82, 39, 255, 0.05)'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px'}}>
                  <div style={{display: 'flex', gap: '15px', alignItems: 'start'}}>
                    <Briefcase size={24} style={{color: '#9f7aea', marginTop: '2px'}} />
                    <div>
                      <h3 style={{fontSize: '20px', color: '#ffffff', margin: '0 0 5px 0'}}>Full Stack Developer</h3>
                      <p style={{fontSize: '16px', color: '#9f7aea', margin: 0}}>Studio Lumen</p>
                    </div>
                  </div>
                  <span style={{fontSize: '14px', color: '#9f7aea', whiteSpace: 'nowrap'}}>2020 — 2022</span>
                </div>
                <p style={{fontSize: '16px', color: '#c9a9e8', lineHeight: '1.6', margin: 0, marginLeft: '39px'}}>
                  Built end-to-end features across web and API. Collaborated with designers to translate concepts into production-ready experiences.
                </p>
              </div>

              {/* Job Card 3 */}
              <div style={{border: '1px solid rgba(159, 122, 234, 0.3)', borderRadius: '8px', padding: '30px', background: 'rgba(82, 39, 255, 0.05)'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px'}}>
                  <div style={{display: 'flex', gap: '15px', alignItems: 'start'}}>
                    <Briefcase size={24} style={{color: '#9f7aea', marginTop: '2px'}} />
                    <div>
                      <h3 style={{fontSize: '20px', color: '#ffffff', margin: '0 0 5px 0'}}>Junior Developer</h3>
                      <p style={{fontSize: '16px', color: '#9f7aea', margin: 0}}>Pixel Forge</p>
                    </div>
                  </div>
                  <span style={{fontSize: '14px', color: '#9f7aea', whiteSpace: 'nowrap'}}>2018 — 2020</span>
                </div>
                <p style={{fontSize: '16px', color: '#c9a9e8', lineHeight: '1.6', margin: 0, marginLeft: '39px'}}>
                  Started my professional journey building responsive web applications and learning best practices in modern development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section data-fade-in style={{padding: '100px 20px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', opacity: 0}}>
          <div style={{maxWidth: '1000px', width: '100%'}}>
            <p style={{fontSize: '14px', color: '#9f7aea', letterSpacing: '2px', marginBottom: '10px', textTransform: 'uppercase'}}>03 — EDUCATION</p>
            <h2 className='font-syncopate' style={{fontSize: '56px', fontWeight: '300', letterSpacing: '3px', color: '#ffffff', margin: '0 0 60px 0', textTransform: 'uppercase'}}>
              Completed Courses
            </h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px'}}>
              {/* Course Card 1 */}
              <div style={{border: '1px solid rgba(159, 122, 234, 0.3)', borderRadius: '8px', padding: '30px', background: 'rgba(82, 39, 255, 0.05)'}}>
                <div style={{fontSize: '32px', marginBottom: '15px', color: '#9f7aea'}}>
                  <GraduationCap size={32} />
                </div>
                <h3 style={{fontSize: '18px', color: '#ffffff', margin: '0 0 5px 0'}}>Advanced React Patterns</h3>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <p style={{fontSize: '14px', color: '#9f7aea', margin: 0}}>Frontend Masters</p>
                  <span style={{fontSize: '12px', color: '#9f7aea'}}>2024</span>
                </div>
              </div>

              {/* Course Card 2 */}
              <div style={{border: '1px solid rgba(159, 122, 234, 0.3)', borderRadius: '8px', padding: '30px', background: 'rgba(82, 39, 255, 0.05)'}}>
                <div style={{fontSize: '32px', marginBottom: '15px', color: '#9f7aea'}}>
                  <GraduationCap size={32} />
                </div>
                <h3 style={{fontSize: '18px', color: '#ffffff', margin: '0 0 5px 0'}}>System Design Fundamentals</h3>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <p style={{fontSize: '14px', color: '#9f7aea', margin: 0}}>Educative</p>
                  <span style={{fontSize: '12px', color: '#9f7aea'}}>2023</span>
                </div>
              </div>

              {/* Course Card 3 */}
              <div style={{border: '1px solid rgba(159, 122, 234, 0.3)', borderRadius: '8px', padding: '30px', background: 'rgba(82, 39, 255, 0.05)'}}>
                <div style={{fontSize: '32px', marginBottom: '15px', color: '#9f7aea'}}>
                  <GraduationCap size={32} />
                </div>
                <h3 style={{fontSize: '18px', color: '#ffffff', margin: '0 0 5px 0'}}>TypeScript Deep Dive</h3>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <p style={{fontSize: '14px', color: '#9f7aea', margin: 0}}>Total TypeScript</p>
                  <span style={{fontSize: '12px', color: '#9f7aea'}}>2023</span>
                </div>
              </div>

              {/* Course Card 4 */}
              <div style={{border: '1px solid rgba(159, 122, 234, 0.3)', borderRadius: '8px', padding: '30px', background: 'rgba(82, 39, 255, 0.05)'}}>
                <div style={{fontSize: '32px', marginBottom: '15px', color: '#9f7aea'}}>
                  <GraduationCap size={32} />
                </div>
                <h3 style={{fontSize: '18px', color: '#ffffff', margin: '0 0 5px 0'}}>UI/UX Design Principles</h3>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <p style={{fontSize: '14px', color: '#9f7aea', margin: 0}}>Coursera</p>
                  <span style={{fontSize: '12px', color: '#9f7aea'}}>2022</span>
                </div>
              </div>
            </div>
          </div>
        </section>    </>
  )
}

export default App
