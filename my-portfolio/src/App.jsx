import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Toast from './components/Toast'
{/*import { SpeedInsights } from '@vercel/speed-insights/react'*/}

const translations = {
  en: {
    greeting: "Good to see you!",
    name: "I'M ARTŪRAS SEMENČIUK",
    tagline: "Student, developer, and lifelong learner.",
    aboutSection: "01 — ME",
    aboutTitle: "About Me",
    aboutText1: "Hello, I am Artūras, a second-year Software Engineering student at Vilnius University. I am 21 years old. Since childhood, I have been deeply immersed in computing, a field that consistently presents new opportunities for learning. As I approach the end of my second year, I am actively seeking an internship and/or a permanent employment opportunity. I am a fast learner, highly communicative, responsible, exceptionally motivated to improve, and always ready to embrace new challenges.",
    aboutText2: "Throughout my academic and personal life, I have contributed to a variety of projects. These range from configuring basic Microsoft applications to developing a 'Kahoot' clone this year, which is available on my GitHub.",
    aboutText3: "Therefore, I am highly receptive to your proposals, ranging from foundational consultancy to more complex projects.",
    experienceSection: "02 — EXPERIENCE",
    experienceTitle: "Experience",
    jobTitle: "Manager of MIDI LAN Party • MIDI",
    jobTitle1: "Mathematics Tutor (5th - 12th Grade)",
    jobDate: "2025 — 2026",
    jobDate1: "2024 — 2026",
    jobDate2: "Currently",
    jobTitle2: "EPAM SAP Development trainee",
    jobDescription: "I organized a two-day event hosted at the Cyber City venue (April 18–19, 2026), which attracted over 150 participants. Serving as the event lead, I ensured reliable, high-speed internet connectivity for all attendees, which involved configuring network switches to allocate individual IP addresses to each user. Furthermore, I successfully secured sponsorships to provide prizes for the competition winners. Learn more about the event here.",
    skillsSection: "03 — SKILLS",
    skillsTitle1: "General Skills",
    skillsTitle: "Technical Skills",
    educationSection: "04 — EDUCATION",
    educationTitle: "Completed Courses",
    course1: "Procedural Programming (C)",
    course2: "Object-Oriented Programming (Java and C++)",
    course3: "Software Engineering Fundamentals",
    course4: "Project Management",
    course5: "CCNA Introduction to Networks",
    course6: "CCNA Routing, Switching, and Wireless Essentials",
    course7: "RDBMS and SQL (PostgreSQL)",
    course8: "English for Academic Purposes and Research C1",
    course9: "Linux System Administration",
    course10: "Algorithms and Data Structures",
    university: "VU MIF",
    emailCopied: "Email address copied to clipboard!",
  },
  lt: {
    greeting: "Malonu Jus matyti!",
    name: "ESU ARTŪRAS SEMENČIUK",
    tagline: "Nuolat besimokantis studentas ir kūrėjas.",
    aboutSection: "01 — AŠ",
    aboutTitle: "Apie Mane",
    aboutText1: "Sveiki, esu Vilniaus Universiteto programų sistemų 2 kurso studentas - Artūras. Man 21-eri. Nuo mažų dienų laiką leidau prie kompiuterio, kuris vis sugeba išmokyti kažką naujo. Šiuo metu baigiu antrą kursą ir ieškau praktikos ir (ar) pastovios darbovietės. Greitai mokausi, esu komunikabilus, atsakingas, begalo motyvuotas tobulėti ir nebijantis naujų iššūkių.",
    aboutText2: "Per dvejus studijų metus ir per savo 21 metus, esu prisidėjęs prie įvairių projektų. Nuo paprastų Microsoft aplikacijų konfigūravimo iki šiais metais sukurto \"Kahoot\" analogo (galite rasti GitHub).",
    aboutText3: "Tad esu atviras, Jūsų pasiūlymams nuo paprasčiausio konsultavimo iki sudėtingesnių projektų.",
    experienceSection: "02 — PATIRTIS",
    experienceTitle: "Patirtis",
    jobTitle: "MIDI LAN Party vadovas • MIDI",
    jobTitle1: "Matematikos korepetitorius (5-12 klasių mokiniams)",
    jobTitle2: "EPAM SAP Development trainee programos dalyvis",
    jobDate: "2025 — 2026",
    jobDate1: "2024 — 2026",
    jobDate2: "Dabar",
    jobDescription: "Organizavau dviejų dienų renginį Cyber City patalpose (2026 metų balandžio 18-19 d.). Šiame renginyje dalyvavo daugiau nei 150 dalyvių. Aš, kaip renginio vadovas, užtikrinau, kad kiekvienas dalyvis turėtų kokybišką interneto greitį (teko konfigūruoti tinklo komutatorių, kad kiekvienas dalyvis turėtų savo IP adresą). Bei, šiam renginiui pritraukiau rėmėjų, kurie padėjo nugalėtojus apdovanti. Plačiau apie renginį čia.",
    skillsSection: "03 — ĮGŪDŽIAI",
    skillsTitle1: "Bendri Įgūdžiai",
    skillsTitle: "Techniniai Įgūdžiai",
    educationSection: "04 — EDUKACIJA",
    educationTitle: "Baigti Kursai",
    course1: "Procedūrinis Programavimas (C)",
    course2: "Objektinis Programavimas (Java ir C++)",
    course3: "Programų sistemų inžinerijos pagrindai",
    course4: "Projektų Valdymas",
    course5: "CCNA Įvadas į Tinklus",
    course6: "CCNA \"Switching, Routing and Wireless Essentials\"",
    course7: "Reliacinių duomenų bazių sistemų valdymas ir SQL (PostgreSQL)",
    course8: "Akademinė ir mokslinė anglų kalba C1",
    course9: "Linux sistemos administravimas",
    course10: "Algoritmai ir duomenų struktūros",
    university: "VU MIF",
    emailCopied: "El. pašto adresas nukopijuotas į iškarpinę!",
  }
};

function App() {
  const [language, setLanguage] = useState('en');
  const [showToast, setShowToast] = useState(false);

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
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText('arturas.semenciuk@gmail.com');
    setShowToast(true);
  };

  return (
    <>
      {/*<SpeedInsights />*/}
      <Toast show={showToast} message={translations[language].emailCopied} />
      <Navigation language={language} translations={translations} />
      <Hero language={language} translations={translations} onLanguageChange={setLanguage} />
      <About language={language} translations={translations} onEmailCopy={handleEmailCopy} />
      <Experience language={language} translations={translations} />
      <Skills language={language} translations={translations} />
      <Education language={language} translations={translations} />
    </>
  )
}

export default App