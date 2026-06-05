import { useState } from 'react'
import TextPressure from '../bitsText/text'
import LightPillar from '../bitsBackground/background'

export default function Hero({ language, translations, onLanguageChange }) {
  return (
    <>
      <div style={{overflow: 'hidden', background: '#0a0a0a', width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
          <LightPillar
            topColor="#5227FF"
            bottomColor="#FF9FFC"
            intensity={0.8}
            rotationSpeed={0.3}
            glowAmount={0.004}
            pillarWidth={5}
            pillarHeight={0.4}
            noiseIntensity={0.5}
            pillarRotation={25}
            interactive={true}
            mixBlendMode="screen"
            quality="medium"
          />
          <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(10, 10, 10, 0.3)', pointerEvents: 'none', zIndex: 1}}></div>
        </div>

      <section id="hero" style={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '60px 20px', textAlign: 'center'}}>
        <div style={{position: 'fixed', top: 90, right: 790, display: 'flex', gap: '10px', zIndex: 10}}>
          <button onClick={() => onLanguageChange('en')} style={{padding: '8px 16px', background: language === 'en' ? '#5227FF' : 'rgba(82, 39, 255, 0.3)', color: '#ffffff', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: 'var(--font-inter)', fontWeight: '500'}}>EN</button>
          <button onClick={() => onLanguageChange('lt')} style={{padding: '8px 16px', background: language === 'lt' ? '#5227FF' : 'rgba(82, 39, 255, 0.3)', color: '#ffffff', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: 'var(--font-inter)', fontWeight: '500'}}>LT</button>
        </div>
        <div style={{maxWidth: '900px'}}>
          <TextPressure text={translations[language].greeting} fontSize={48} color="#ffffff" fontWeight={700} letterSpacing={0} />
          <h1 class="hero-name font-syncopate" style={{fontSize: '52px', fontWeight: '400', color: '#ffffff', margin: '-15px 0 30px 0', lineHeight: '1.3', letterSpacing: '0px'}}>
            <span style={{color: '#ffffff', fontFamily: 'var(--font-syncopate)'}}>
              {translations[language].name}
            </span>
          </h1>
          <p className="hero-tagline font-inter" style={{fontSize: '18px', color: '#c9a9e8', lineHeight: '1.7', margin: '50px auto 30px', maxWidth: '700px', fontFamily: 'var(--font-inter)'}}>
            {translations[language].tagline}
          </p>
        </div>
      </section>
    </>
  )
}
