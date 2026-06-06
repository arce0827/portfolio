import { GraduationCap } from "lucide-react";

export default function Education({ language, translations }) {
  return (
    <section id="education" data-fade-in style={{padding: '100px 20px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', opacity: 0, fontFamily: 'var(--font-inter)'}}>
      <div style={{maxWidth: '1000px', width: '100%'}}>
        <p style={{fontSize: '14px', color: '#9f7aea', letterSpacing: '2px', marginBottom: '10px', textTransform: 'uppercase'}}>{translations[language].educationSection}</p>
        <h2 className='section-title font-syncopate' style={{fontSize: '56px', fontWeight: '300', letterSpacing: '3px', color: '#ffffff', margin: '0 0 60px 0', textTransform: 'uppercase'}}>
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

          

          {/* Course Card 8 */}
          <div style={{border: '1px solid rgba(159, 122, 234, 0.3)', borderRadius: '8px', padding: '30px', background: 'rgba(82, 39, 255, 0.05)'}}>
            <div style={{fontSize: '32px', marginBottom: '15px', color: '#9f7aea'}}>
              <GraduationCap size={32} />
            </div>
            <h3 className="font-inter" style={{fontSize: '18px', color: '#ffffff', margin: '0 0 5px 0'}}>{translations[language].course8}</h3>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <p className="font-inter" style={{fontSize: '14px', color: '#9f7aea', margin: 0}}>{translations[language].university}</p>
              <span className="font-inter" style={{fontSize: '12px', color: '#9f7aea'}}>2024</span>
            </div>
          </div>

          {/* Course Card 9 */}
          <div style={{border: '1px solid rgba(159, 122, 234, 0.3)', borderRadius: '8px', padding: '30px', background: 'rgba(82, 39, 255, 0.05)'}}>
            <div style={{fontSize: '32px', marginBottom: '15px', color: '#9f7aea'}}>
              <GraduationCap size={32} />
            </div>
            <h3 className="font-inter" style={{fontSize: '18px', color: '#ffffff', margin: '0 0 5px 0'}}>{translations[language].course9}</h3>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <p className="font-inter" style={{fontSize: '14px', color: '#9f7aea', margin: 0}}>{translations[language].university}</p>
              <span className="font-inter" style={{fontSize: '12px', color: '#9f7aea'}}>2024</span>
            </div>
          </div>

           {/* Course Card 10 */}
          <div style={{border: '1px solid rgba(159, 122, 234, 0.3)', borderRadius: '8px', padding: '30px', background: 'rgba(82, 39, 255, 0.05)'}}>
            <div style={{fontSize: '32px', marginBottom: '15px', color: '#9f7aea'}}>
              <GraduationCap size={32} />
            </div>
            <h3 className="font-inter" style={{fontSize: '18px', color: '#ffffff', margin: '0 0 5px 0'}}>{translations[language].course10}</h3>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <p className="font-inter" style={{fontSize: '14px', color: '#9f7aea', margin: 0}}>{translations[language].university}</p>
              <span className="font-inter" style={{fontSize: '12px', color: '#9f7aea'}}>2025</span>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
