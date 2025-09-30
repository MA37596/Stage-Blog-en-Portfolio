'use client'

import { useState, useEffect } from 'react'

const projectenData = [
  {
    id: 1,
    title: 'Game Website - Casino site',
    description:
      'Moderne portfolio website gebouwd met Next.js en Tailwind CSS, responsive design en smooth scrolling.',
    tags: ['PHP', 'CSS', 'JS'],
    categoryColor: 'PHP',
    url: 'https://github.com/rayanaghmer/portfolio',
    bgGradientFrom: 'from-blue-600',
    bgGradientTo: 'to-blue-800',
    image: '/casino.jpeg',
  },
  {
    id: 2,
    title: 'Pentesting - Mr Robot Capture The Flag',
    description:
      'Capture The Flag met tools als Nmap, John The Ripper, Nikto en brute force scripting.',
    tags: ['Cybersecurity', 'Penetration Testing'],
    categoryColor: 'green',
    url: '',
    bgGradientFrom: 'from-green-600',
    bgGradientTo: 'to-green-800',
    image: '/capturetheflag.jpg',
  },
  {
    id: 3,
    title: 'Mobile App Design - Mobile App UI/UX',
    description: 'Gamified buurtapp met punten verdienen en kortingen voor bewoners.',
    tags: ['Figma', 'UI/UX', 'Mobile App Design'],
    categoryColor: 'purple',
    url: 'https://www.figma.com/proto/ZDuc7sfMy9Y6Awb9mugM4I/High-Fidelity-Prototype?node-id=265-2270',
    bgGradientFrom: 'from-purple-600',
    bgGradientTo: 'to-purple-800',
    image: '/mobileappdesign.jpg',
  },
  {
    id: 4,
    title: 'Apple - E-commerce Website',
    description: 'Werkend e-commerce platform met HTML, CSS en JavaScript.',
    tags: ['PHP', 'CSS', 'JavaScript'],
    categoryColor: 'orange',
    url: 'http://193.233.19.222/apple/',
    bgGradientFrom: 'from-orange-600',
    bgGradientTo: 'to-orange-800',
    image: '/apple.png',
  },
  {
    id: 5,
    title: 'AGS Afsprakenplanner - Planning Dashboard',
    description: 'Interactief dashboard met PHP, CSS en SQL.',
    tags: ['PHP', 'CSS', 'SQL'],
    categoryColor: 'red',
    url: 'https://github.com/rayanaghmer/',
    bgGradientFrom: 'from-red-600',
    bgGradientTo: 'to-red-800',
    image: '/printplanner.png',
  },
  {
    id: 6,
    title: 'React - About Me Site',
    description:
      'Persoonlijke site gebouwd in React met top 10 albums en cookie-clicker game.',
    tags: ['React', 'Tailwind'],
    categoryColor: 'teal',
    url: 'https://37596.hosts2.ma-cloud.nl/reactapp/dist/',
    bgGradientFrom: 'from-teal-600',
    bgGradientTo: 'to-teal-800',
    image: '/react.jpg',
  },
  {
    id: 7,
    title: 'Cookie Clicker ',
    description: 'Simpele Cookie Clicker met verschillende functies',
    tags: ['HTML', 'CSS', 'JavaScript'],
    categoryColor: 'blue',
    url: 'http://193.233.19.222/cookieclicker/',
    bgGradientFrom: 'from-blue-600',
    bgGradientTo: 'to-blue-800',
    image: '/cookierclicker.webp',
  },
  {
    id: 8,
    title: 'Modal',
    description: 'Een modal die bedoeld is om de basisprincipes van modals te begrijpen.',
    tags: ['HTML', 'CSS'],
    categoryColor: 'orange',
    url: 'http://193.233.19.222/modal/',
    bgGradientFrom: 'from-orange-600',
    bgGradientTo: 'to-orange-800',
    image: '/modal.png',
  },
  {
    id: 9,
    title: 'BEM',
    description: 'Een portfolio-opdracht die bedoeld is om de basisprincipes van BEM te demonstreren.',
    tags: ['CSS'],
    categoryColor: 'purple',
    url: 'http://193.233.19.222/bem/',
    bgGradientFrom: 'from-purple-600',
    bgGradientTo: 'to-purple-800',
    image: '/bem.svg',
  },
  {
    id: 10,
    title: 'Fancy Card',
    description: 'Een interactieve kaartcomponent waarbij verschillende informatiekaarten overzichtelijk en visueel aantrekkelijk worden getoond. Ideaal voor nieuws, productinformatie of blogoverzicht. Gebouwd met HTML, CSS en JavaScript voor een moderne look.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    categoryColor: 'blue',
    url: 'http://193.233.19.222/fancycard/',
    bgGradientFrom: 'from-blue-600',
    bgGradientTo: 'to-blue-800',
    image: '/fancycard.webp',
  },
  {
    id: 11,
    title: 'Landingspage',
    description: 'Een strakke en functionele landingspagina met een duidelijke call-to-action en contactmogelijkheden. Geeft bezoekers direct inzicht en nodigt uit om verder te klikken. Samen gesteld uit HTML, CSS en JavaScript met aandacht voor snelheid en conversie.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    categoryColor: 'red',
    url: '#',
    bgGradientFrom: 'from-red-600',
    bgGradientTo: 'to-red-800',
    image: '/landingpage.png',
  },
  {
    id: 12,
    title: 'Accountancy',
    description: 'Een strakke en functionele landingspagina met een duidelijke call-to-action en contactmogelijkheden. Geeft bezoekers direct inzicht en nodigt uit om verder te klikken. Samen gesteld uit HTML, CSS en JavaScript met aandacht voor snelheid en conversie.',
    tags: ['HTML', 'Scss', 'JavaScript'],
    categoryColor: 'teal',
    url: '#',
    bgGradientFrom: 'from-teal-600',
    bgGradientTo: 'to-teal-800',
    image: '/accountancy.webp',
  },
  {
    id: 13,
    title: 'Grid',
    description: 'Illustratie en demonstratie van CSS Grid, waarmee geavanceerde lay-outs eenvoudig gemaakt kunnen worden. Hier leer je hoe je rasters en complexe webpagina-structuren opzet met CSS Grid.',
    tags: ['CSS'],
    categoryColor: 'green',
    url: 'http://193.233.19.222/grid/',
    bgGradientFrom: 'from-green-600',
    bgGradientTo: 'to-green-800',
    image: '/cssgrid.png',
  },
  {
    id: 14,
    title: 'Pokemon',
    description: 'Een kleurrijk en speels project waarin Pokémon-stijl en branding centraal staan. Dit voorbeeld is visueel gebaseerd op iconische Pokémon graphics en maakt gebruik van HTML, CSS en JavaScript voor diverse animaties en interacties.',
    tags: ['HTML', 'CSS','JavaScript'],
    categoryColor: 'purple',
    url: '#',
    bgGradientFrom: 'from-purple-600',
    bgGradientTo: 'to-purple-800',
    image: '/pokemon.png',
  },
  {
    id: 15,
    title: 'Color Game',
    description: 'Een spel (of functionaliteit) waarbij kleurherkenning en snelle interactie centraal staan. Gebruikers kiezen of herkennen kleuren, wat zorgt voor een leuke en leerzame ervaring gebouwd met HTML, CSS en JavaScript.',
    tags: ['HTML', 'CSS','JavaScript'],
    categoryColor: 'blue',
    url: 'http://193.233.19.222/html/',
    bgGradientFrom: 'from-blue-600',
    bgGradientTo: 'to-blue-800',
    image: '/colorgame.jpg',
  },
]

const filterOptions = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Flutter',
  'Cybersecurity',
  'Next.js',
  'Figma',
  'PHP',
  'SQL',
  'Tailwind',
  'UI/UX',
  'Penetration Testing',
  'Kali Linux',
]

export default function ProjectenPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [activeFilters, setActiveFilters] = useState([])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  const toggleFilter = (tag) => {
    setActiveFilters((prev) =>
      prev.includes(tag) ? prev.filter((f) => f !== tag) : [...prev, tag]
    )
  }

  const displayedProjecten =
    activeFilters.length === 0
      ? projectenData
      : projectenData.filter((proj) =>
          proj.tags.some((tag) => activeFilters.includes(tag))
        )

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      {/* Navigation Bar */}
      <header
        className={`flex items-center justify-between px-6 py-4 ${
          isDarkMode ? 'bg-slate-900' : 'bg-white'
        }`}
      >
        <div className="flex items-center space-x-4">
          <a href="/" className="text-xl font-bold hover:underline">
            Rayan Aghmer
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="/projecten"
              className={`hover:opacity-70 transition-opacity ${
                isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
              }`}
            >
              Projecten
            </a>
            <a
              href="/certificaten"
              className={`hover:opacity-70 transition-opacity ${
                isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
              }`}
            >
              Certificaten
            </a>
            <a
              href="/contact"
              className={`hover:opacity-70 transition-opacity ${
                isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
              }`}
            >
              Contact
            </a>
          </nav>
        </div>
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
      </header>

      {/* Filter Buttons */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <h2
          className={`text-lg font-semibold mb-4 ${
            isDarkMode ? 'text-green-400' : 'text-green-700'
          }`}
        >
          Filter projecten op technologie:
        </h2>
        <div className="flex flex-wrap gap-3">
          {filterOptions.map((tag) => {
            const active = activeFilters.includes(tag)
            return (
              <button
                key={tag}
                onClick={() => toggleFilter(tag)}
                className={`px-5 py-2 rounded-full font-semibold transition duration-300 border border-transparent shadow-md focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                  active
                    ? isDarkMode
                      ? 'bg-green-600 text-white shadow-green-700/50 hover:bg-green-700'
                      : 'bg-green-400 text-white shadow-green-400/60 hover:bg-green-500'
                    : isDarkMode
                    ? 'bg-green-900 text-green-300 hover:bg-green-700 hover:text-white'
                    : 'bg-green-100 text-green-700 hover:bg-green-300 hover:text-green-900'
                }`}
                aria-pressed={active}
              >
                {tag}
              </button>
            )
          })}
          {activeFilters.length > 0 && (
            <button
              onClick={() => setActiveFilters([])}
              className="px-5 py-2 rounded-full font-semibold border border-red-500 text-red-500 shadow-md hover:bg-red-500 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-red-400"
              aria-label="Reset filters"
            >
              Reset filters
            </button>
          )}
        </div>
      </section>

      {/* Project Cards */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {displayedProjecten.length === 0 ? (
          <p
            className={`text-center ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Geen projecten gevonden met de geselecteerde filters.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjecten.map((proj) => (
              <a
                key={proj.id}
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block rounded-xl p-6 backdrop-blur-sm transition-all duration-300 cursor-pointer transform hover:scale-105 border ${
                  isDarkMode
                    ? `bg-gradient-to-br ${proj.bgGradientFrom}/30 to-slate-900/30 border-${proj.categoryColor}-500/30 hover:border-${proj.categoryColor}-400/50`
                    : `bg-gradient-to-br ${proj.bgGradientFrom}/50 to-slate-100/50 border border-${proj.categoryColor}-300/50 hover:border-${proj.categoryColor}-400/70`
                }`}
              >
                <div
                  className={`w-full h-48 rounded-lg mb-4 overflow-hidden relative bg-gradient-to-br ${proj.bgGradientFrom} ${proj.bgGradientTo} flex items-center justify-center`}
                >
                  {proj.image ? (
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <span className="text-white font-semibold text-lg">
                      {proj.categoryColor.charAt(0).toUpperCase() +
                        proj.categoryColor.slice(1)}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                <p
                  className={`${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  } mb-4`}
                >
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDarkMode
                          ? `bg-${proj.categoryColor}-600/20 text-${proj.categoryColor}-300`
                          : `bg-${proj.categoryColor}-100 text-${proj.categoryColor}-800`
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        )}
      </main>

      <footer
        className={`py-12 px-6 mt-20 border-t ${
          isDarkMode
            ? 'border-gray-700 bg-gradient-to-r from-slate-900/50 to-blue-900/50 text-gray-400'
            : 'border-gray-200 bg-gradient-to-r from-blue-50/50 to-slate-50/50 text-gray-600'
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          &copy; 2025 Rayan Aghmer. Alle rechten voorbehouden.
        </div>
      </footer>
    </div>
  )
}
