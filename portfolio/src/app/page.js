'use client'

import { useState, useEffect } from 'react'

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [gradientColors, setGradientColors] = useState({
    dark: {
      from: 'slate-900',
      via: 'blue-900',
      to: 'slate-900',
    },
    light: {
      from: 'blue-50',
      via: 'blue-100',
      to: 'slate-50',
    },
  })
  const [isEnglish, setIsEnglish] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) setIsDarkMode(savedTheme === 'dark')

    const savedGradients = localStorage.getItem('gradientColors')
    if (savedGradients) setGradientColors(JSON.parse(savedGradients))
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  const getGradientStyle = () => {
    const colors = isDarkMode ? gradientColors.dark : gradientColors.light
    const colorMap = {
      'slate-900': '#0f172a',
      'gray-900': '#111827',
      'blue-900': '#1e3a8a',
      'purple-900': '#581c87',
      'red-900': '#7f1d1d',
      'green-900': '#14532d',
      'yellow-900': '#713f12',
      'pink-900': '#831843',
      'blue-50': '#eff6ff',
      'blue-100': '#dbeafe',
      'purple-50': '#faf5ff',
      'purple-100': '#f3e8ff',
      'red-50': '#fef2f2',
      'red-100': '#fee2e2',
      'green-50': '#f0fdf4',
      'green-100': '#dcfce7',
      'yellow-50': '#fefce8',
      'yellow-100': '#fef3c7',
      'pink-50': '#fdf2f8',
      'pink-100': '#fce7f3',
      'slate-50': '#f8fafc',
      'slate-100': '#f1f5f9',
      'gray-50': '#f9fafb',
      'gray-100': '#f3f4f6',
    }
    return {
      background: `linear-gradient(to bottom right, ${colorMap[colors.from]}, ${colorMap[colors.via]}, ${colorMap[colors.to]})`,
    }
  }

  const texts = {
    nl: {
      projecten: 'Projecten',
      certificaten: 'Certificaten',
      contact: 'Contact',
      welkom: 'Mijn portfolio met alle opdrachten, certificaten en projecten.',
      expertise:
        'Met zowel ervaring in web development als cybersecurity en app Design',
      zieMeer: 'Zie meer',
      mijnWerk: 'Mijn Werk',
      project1:
      'Een dynamische en interactieve casino website, gebouwd met PHP voor server-side logica, CSS voor een aantrekkelijke en gebruiksvriendelijke stijl, en JavaScript voor interactieve spellen en functies. Deze site biedt spelers een veilige en vloeiende ervaring met diverse casinospellen, responsive design en snelle reacties, zodat zowel desktop- als mobiele gebruikers optimaal plezier beleven',
      project2:
        'Een Capture The Flag-opdracht voor het vak Security, waarin ik kennis maakte met tools zoals Nmap, John The Ripper, Nikto en een zelfgeschreven bruteforce-script',
      project3:
        'Een gamified buurtapp waarin bewoners punten verdienen door activiteiten voor de wijk te doen en deze kunnen inwisselen voor kortingen bij lokale winkels.',
      project4: 'Een functionele en responsive e-commerce website gericht op Apple-producten, gebouwd met HTML, CSS en JavaScript. De site biedt gebruikers een overzichtelijke winkelervaring met productpagina’s, een intuïtieve interface en snelle navigatie, waarbij moderne webtechnologieën zorgen voor optimale prestaties en gebruiksvriendelijkheid.',
      project6:
        'Een moderne, responsieve persoonlijke website gebouwd met React en gestyled met Tailwind CSS. De site bevat een overzichtelijke en aantrekkelijke presentatie van jouw profiel, vaardigheden en projecten, met soepele animaties en een strak ontwerp dat optimaal werkt op alle apparaten',
      casino: 'Casino site',
      mrRobot: 'Mr Robot Capture The Flag',
      mobileApp: 'Mobile App UI/UX',
      ecommerce: 'E-commerce Website',
      afsprakenplanner: 'Simpele Afsprakenplanner',
      aboutSite: 'About Me Site',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      footer: 'Alle rechten voorbehouden.',
      fullStack: 'Full Stack',
      webDev: 'Web Development',
      cyber: 'Cybersecurity',
      figma: 'Figma',
      uiux: 'UI/UX',
      mobileAppDesign: 'Mobile App Design',
      html: 'HTML',
      css: 'CSS',
      js: 'JavaScript',
      php: 'PHP',
      sql: 'SQL',
      react: 'React',
      tailwind: 'Tailwind',
      responsiveness: 'Responsiveness',
      kali: 'Kali Linux',
      penetesting: 'Penetesting',
    },
    en: {
      projecten: 'Projects',
      certificaten: 'Certificates',
      contact: 'Contact',
      welkom: 'My portfolio with all assignments, certificates and projects.',
      expertise: 'With experience in web development, cybersecurity and app Design',
      zieMeer: 'See more',
      neemContact: 'Contact Me',
      mijnWerk: 'My Work',
      project1:
      '',
      project2:
        'Capture The Flag challenge for Security, where I learned about tools such as Nmap, John The Ripper, Nikto and a custom bruteforce scripts.',
      project3:
        'A gamified community app where residents earn points for neighborhood activities and can redeem them for discounts at local stores.',
      project4: 'Working e-commerce website made with HTML, CSS and JavaScript.',
      project5: 'Interactive appointment planner made with PHP, CSS and SQL.',
      project6:
        "A personal 'About Me' website built in React, with a top 10 favorite albums section and a built-in cookie-clicker game.",
      casino: 'Casino site',
      mrRobot: 'Mr Robot Capture The Flag',
      mobileApp: 'Mobile App UI/UX',
      ecommerce: 'E-commerce Website',
      afsprakenplanner: 'Simple Appointment Planner',
      aboutSite: 'About Me Site',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      footer: 'All rights reserved.',
      fullStack: 'Full Stack',
      webDev: 'Web Development',
      cyber: 'Cybersecurity',
      figma: 'Figma',
      uiux: 'UI/UX',
      mobileAppDesign: 'Mobile App Design',
      html: 'HTML',
      css: 'CSS',
      js: 'JavaScript',
      php: 'PHP',
      sql: 'SQL',
      react: 'React',
      tailwind: 'Tailwind',
      responsiveness: 'Responsiveness',
      kali: 'Kali Linux',
      penetesting: 'Penetesting',
    },
  }

  const t = isEnglish ? texts.en : texts.nl

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}
      style={getGradientStyle()}
    >
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">Rayan Aghmer</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="/projecten"
            className={`hover:opacity-70 transition-opacity ${
              isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
            }`}
          >
            {t.projecten}
          </a>
          <a
            href="/certificaten"
            className={`hover:opacity-70 transition-opacity ${
              isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
            }`}
          >
            {t.certificaten}
          </a>
          <a
            href="/contact"
            className={`hover:opacity-70 transition-opacity ${
              isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
            }`}
          >
            {t.contact}
          </a>
        </nav>
        <div className="flex items-center space-x-2">
          {/* Thema Switcher */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isDarkMode
                ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* Taal wissel button */}
          <button
            onClick={() => setIsEnglish((v) => !v)}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isDarkMode
                ? 'bg-gray-800 hover:bg-gray-700'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            aria-label="Taal"
          >
            {isEnglish ? (
              <svg viewBox="0 0 24 24" width="24" height="24">
                <rect width="24" height="24" fill="#00247d" />
                <path
                  d="M0,0 24,24 M24,0 0,24"
                  stroke="#fff"
                  strokeWidth="4"
                />
                <path
                  d="M12,0 12,24 M0,12 24,12"
                  stroke="#fff"
                  strokeWidth="6"
                />
                <path
                  d="M0,0 24,24 M24,0 0,24"
                  stroke="#cf142b"
                  strokeWidth="2"
                />
                <path
                  d="M12,0 12,24 M0,12 24,12"
                  stroke="#cf142b"
                  strokeWidth="2"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="24" height="24">
                <rect x="0" y="0" width="24" height="8" fill="#21468B" />{' '}
                {/* blauw onderaan */}
                <rect x="0" y="8" width="24" height="8" fill="#fff" />
                <rect x="0" y="16" width="24" height="8" fill="#ae1c28" />{' '}
                {/* rood bovenaan */}
              </svg>
            )}
          </button>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Rayan Aghmer
          </h1>

          <p
            className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {t.welkom}{' '}
            <strong className={isDarkMode ? 'text-white' : 'text-gray-900'}>
              {t.expertise}
            </strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() =>
                document
                  .getElementById('werk-sectie')
                  .scrollIntoView({ behavior: 'smooth' })
              }
              className={`border px-8 py-4 rounded-lg font-medium transition-all duration-300 ${
                isDarkMode
                  ? 'bg-transparent border-white text-white hover:bg-white hover:text-black'
                  : 'bg-transparent border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
              }`}
            >
              {t.zieMeer}
            </button>
          </div>
          <div className="flex items-center justify-center text-gray-400">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </main>

      <section id="werk-sectie" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {t.mijnWerk}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Casino site */}
            <a
              href="https://github.com/rayanaghmer/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className={`block backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer ${
                isDarkMode
                  ? 'bg-gradient-to-br from-blue-800/20 to-slate-800/20 border border-blue-500/20 hover:border-blue-400/40'
                  : 'bg-gradient-to-br from-blue-100/50 to-slate-100/50 border border-blue-300/30 hover:border-blue-400/50'
              }`}
            >
              <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src="/casino.jpeg"
                  alt="Casino site"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.casino}</h3>
              <p
                className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
              >
                {t.project1}
              </p>
              <div className="flex flex-wrap gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    isDarkMode ? 'bg-blue-600/20 text-blue-300' : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {t.react}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    isDarkMode ? 'bg-blue-600/20 text-blue-300' : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {t.tailwind}
                </span>
              </div>
            </a>

            {/* E-commerce Website */}
            <a
              href="https://github.com/rayanaghmer/ecommerce-platform"
              target="_blank"
              rel="noopener noreferrer"
              className={`block backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer ${
                isDarkMode
                  ? 'bg-gradient-to-br from-orange-600/20 to-orange-800/20 border border-orange-600/20 hover:border-orange-500/40'
                  : 'bg-gradient-to-br from-orange-100/50 to-orange-200/50 border border-orange-200/50 hover:border-orange-400/70'
              }`}
            >
              <div className="w-full h-48 bg-gradient-to-br from-orange-600 to-orange-800 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src="/apple.png"
                  alt="Ecommerce website"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.ecommerce}</h3>
              <p
                className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
              >
                {t.project4}
              </p>
              <div className="flex flex-wrap gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    isDarkMode ? 'bg-orange-600/20 text-orange-300' : 'bg-orange-100 text-orange-800'
                  }`}
                >
                  {t.php}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    isDarkMode ? 'bg-orange-600/20 text-orange-300' : 'bg-orange-100 text-orange-800'
                  }`}
                >
                  {t.css}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    isDarkMode ? 'bg-orange-600/20 text-orange-300' : 'bg-orange-100 text-orange-800'
                  }`}
                >
                  {t.js}
                </span>
              </div>
            </a>
            {/* About Me Site */}
            <a
              href="https://github.com/rayanaghmer/cicd-pipeline"
              target="_blank"
              rel="noopener noreferrer"
              className={`block backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer ${
                isDarkMode
                  ? 'bg-gradient-to-br from-teal-600/20 to-teal-800/20 border border-teal-600/20 hover:border-teal-500/40'
                  : 'bg-gradient-to-br from-teal-100/50 to-teal-200/50 border border-teal-200/50 hover:border-teal-400/70'
              }`}
            >
              <div className="w-full h-48 bg-gradient-to-br from-teal-600 to-teal-800 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src="/react.jpg"
                  alt="About Me Site"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.aboutSite}</h3>
              <p
                className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
              >
                {t.project6}
              </p>
              <div className="flex flex-wrap gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    isDarkMode ? 'bg-teal-600/20 text-teal-300' : 'bg-teal-100 text-teal-800'
                  }`}
                >
                  {t.react}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    isDarkMode ? 'bg-teal-600/20 text-teal-300' : 'bg-teal-100 text-teal-800'
                  }`}
                >
                  {t.tailwind}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    isDarkMode ? 'bg-teal-600/20 text-teal-300' : 'bg-teal-100 text-teal-800'
                  }`}
                >
                  {t.responsiveness}
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer
        className={`py-12 px-6 border-t ${
          isDarkMode
            ? 'border-gray-700 bg-gradient-to-r from-slate-900/50 to-blue-900/50'
            : 'border-gray-200 bg-gradient-to-r from-blue-50/50 to-slate-50/50'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Rayan Aghmer
              </h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Web Developer & App Designer</p>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/MA37596"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                  isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span className="font-medium">{t.github}</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rayan-a-372002350/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                  isDarkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <span className="font-medium">{t.linkedin}</span>
              </a>
            </div>
          </div>
          <div className={`mt-8 pt-8 border-t text-center ${isDarkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500'}`}>
            <p>&copy; 2025 Rayan Aghmer. {t.footer}</p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(${isDarkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)'} 1px, transparent 1px),
                linear-gradient(90deg, ${isDarkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)'} 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          ></div>
          <div className={`absolute top-20 left-20 w-32 h-32 border rounded-full ${isDarkMode ? 'border-blue-400 opacity-5' : 'border-blue-600 opacity-10'}`}></div>
          <div className={`absolute bottom-20 right-20 w-24 h-24 border rounded-full ${isDarkMode ? 'border-blue-300 opacity-5' : 'border-blue-500 opacity-10'}`}></div>
          <div className={`absolute top-1/2 left-1/4 w-16 h-16 border rounded-full ${isDarkMode ? 'border-blue-500 opacity-5' : 'border-blue-700 opacity-10'}`}></div>
        </div>
      </div>
    </div>
  )
}
