import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LightPillar from './bitsBackground/background'
import TextPressure from './bitsText/text'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{overflow: 'hidden', background: '#0a0a0a', width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
          <LightPillar
            topColor="#5227FF"
            bottomColor="#FF9FFC"
            intensity={1}
            rotationSpeed={0.3}
            glowAmount={0.002}
            pillarWidth={5}
            pillarHeight={0.4}
            noiseIntensity={0.5}
            pillarRotation={25}
            interactive={true}
            mixBlendMode="screen"
            quality="high"
          />
        </div>
        <div style={{position: 'relative', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
          <TextPressure
            text="Welcome to my resume"
            flex
            alpha={false}
            stroke={false}
            width
            weight
            italic
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={36}
          />
        </div>
    </>
  )
}

export default App
