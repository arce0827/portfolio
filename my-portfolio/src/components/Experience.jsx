import { Briefcase } from "lucide-react";

export default function Experience({ language, translations }) {
  return (
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
              {language === 'en' ? (
                <>
                  I organized a two-day event hosted at the Cyber City venue (April 18–19, 2026), which attracted over 150 participants. Serving as the event lead, I ensured reliable, high-speed internet connectivity for all attendees, which involved configuring network switches to allocate individual IP addresses to each user. Furthermore, I successfully secured sponsorships to provide prizes for the competition winners. Learn more about the event{' '}
                  <a href="https://www.facebook.com/events/cyber-city/midi-2026-lan-party/1528178071582585/" target="_blank" rel="noopener noreferrer" style={{color: '#ff9ffc', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s ease', cursor: 'pointer'}} onMouseEnter={(e) => e.target.style.color = '#ffc0ff'} onMouseLeave={(e) => e.target.style.color = '#ff9ffc'}>
                    here
                  </a>
                  .
                </>
              ) : (
                <>
                  Organizavau dviejų dienų renginį Cyber City patalpose (2026 metų balandžio 18-19 d.). Šiame renginyje dalyvavo daugiau nei 150 dalyvių. Aš, kaip renginio vadovas, užtikrinau, kad kiekvienas dalyvis turėtų kokybišką interneto greitį (teko konfigūruoti tinklo komutatorių, kad kiekvienas dalyvis turėtų savo IP adresą). Bei, šiam renginiui pritraukiau rėmėjų, kurie padėjo nugalėtojus apdovanti. Plačiau apie renginį{' '}
                  <a href="https://www.facebook.com/events/cyber-city/midi-2026-lan-party/1528178071582585/" target="_blank" rel="noopener noreferrer" style={{color: '#ff9ffc', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s ease', cursor: 'pointer'}} onMouseEnter={(e) => e.target.style.color = '#ffc0ff'} onMouseLeave={(e) => e.target.style.color = '#ff9ffc'}>
                    čia
                  </a>
                  .
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
