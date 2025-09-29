'use client'

import { useState, useEffect } from 'react'

const projectenData = [
  {
    id: 1,
    title: 'Project 1 - Casino site',
    description: 'Moderne portfolio website gebouwd met Next.js en Tailwind CSS, responsive design en smooth scrolling.',
    tags: ['Next.js', 'React', 'Tailwind'],
    categoryColor: 'HTML',
    url: 'https://github.com/rayanaghmer/portfolio',
    bgGradientFrom: 'from-blue-600',
    bgGradientTo: 'to-blue-800',
    image: '/casino.jpeg' 
  },
  {
    id: 2,
    title: 'Project 2 - Mr Robot Capture The Flag',
    description: 'Capture The Flag met tools als Nmap, John The Ripper, Nikto en brute force scripting.',
    tags: ['Cybersecurity', 'Penetration Testing'],
    categoryColor: 'green',
    url: 'https://github.com/rayanaghmer/mr-robot-ctf',
    bgGradientFrom: 'from-green-600',
    bgGradientTo: 'to-green-800',
    image: '/capturetheflag.jpg'
  },
  {
    id: 3,
    title: 'Project 3 - Mobile App UI/UX',
    description: 'Gamified buurtapp met punten verdienen en kortingen voor bewoners.',
    tags: ['Figma', 'UI/UX', 'Flutter'],
    categoryColor: 'purple',
    url: 'https://www.figma.com/file/example/mobile-app-design',
    bgGradientFrom: 'from-purple-600',
    bgGradientTo: 'to-purple-800'
  },
  {
    id: 4,
    title: 'Project 4 - E-commerce Website',
    description: 'Werkend e-commerce platform met HTML, CSS en JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    categoryColor: 'orange',
    url: 'https://github.com/rayanaghmer/ecommerce-platform',
    bgGradientFrom: 'from-orange-600',
    bgGradientTo: 'to-orange-800'
  },
  {
    id: 5,
    title: 'Project 5 - Business Intelligence Dashboard',
    description: 'Interactief dashboard met PHP, CSS en SQL.',
    tags: ['PHP', 'CSS', 'SQL'],
    categoryColor: 'red',
    url: 'https://github.com/rayanaghmer/',
    bgGradientFrom: 'from-red-600',
    bgGradientTo: 'to-red-800'
  },
  {
    id: 6,
    title: 'Project 6 - About Me Site',
    description: 'Persoonlijke site gebouwd in React met top 10 albums en cookie-clicker game.',
    tags: ['React', 'Tailwind'],
    categoryColor: 'teal',
    url: 'https://github.com/rayanaghmer/',
    bgGradientFrom: 'from-teal-600',
    bgGradientTo: 'to-teal-800'
  },
  { id: 7, title: 'Cookie Clicker ', description: 'Simpele Cookie Clicker met verschillende functies', tags: ['HTML', 'CSS', 'Javascript'], categoryColor: 'blue', url: '#', bgGradientFrom: 'from-blue-600', bgGradientTo: 'to-blue-800' },
  { id: 8, title: 'Project 8', description: 'Beschrijving project 8', tags: ['HTML', 'CSS'], categoryColor: 'orange', url: '#', bgGradientFrom: 'from-orange-600', bgGradientTo: 'to-orange-800' },
  { id: 9, title: 'Project 9', description: 'Beschrijving project 9', tags: ['Flutter', 'UI/UX'], categoryColor: 'purple', url: '#', bgGradientFrom: 'from-purple-600', bgGradientTo: 'to-purple-800' },
  { id: 10, title: 'Project 10', description: 'Beschrijving project 10', tags: ['Next.js', 'Tailwind'], categoryColor: 'blue', url: '#', bgGradientFrom: 'from-blue-600', bgGradientTo: 'to-blue-800' },
  { id: 11, title: 'Project 11', description: 'Beschrijving project 11', tags: ['PHP', 'SQL'], categoryColor: 'red', url: '#', bgGradientFrom: 'from-red-600', bgGradientTo: 'to-red-800' },
  { id: 12, title: 'Project 12', description: 'Beschrijving project 12', tags: ['JavaScript', 'React'], categoryColor: 'teal', url: '#', bgGradientFrom: 'from-teal-600', bgGradientTo: 'to-teal-800' },
  { id: 13, title: 'Project 13', description: 'Beschrijving project 13', tags: ['Cybersecurity'], categoryColor: 'green', url: '#', bgGradientFrom: 'from-green-600', bgGradientTo: 'to-green-800' },
  { id: 14, title: 'Project 14', description: 'Beschrijving project 14', tags: ['Figma', 'UI/UX'], categoryColor: 'purple', url: '#', bgGradientFrom: 'from-purple-600', bgGradientTo: 'to-purple-800' },
  { id: 15, title: 'Project 15', description: 'Beschrijving project 15', tags: ['React', 'Tailwind'], categoryColor: 'blue', url: '#', bgGradientFrom: 'from-blue-600', bgGradientTo: 'to-blue-800' },
  { id: 16, title: 'Project 16', description: 'Beschrijving project 16', tags: ['HTML', 'CSS', 'JavaScript'], categoryColor: 'orange', url: '#', bgGradientFrom: 'from-orange-600', bgGradientTo: 'to-orange-800' },
  { id: 17, title: 'Project 17', description: 'Beschrijving project 17', tags: ['Flutter', 'UI/UX'], categoryColor: 'purple', url: '#', bgGradientFrom: 'from-purple-600', bgGradientTo: 'to-purple-800' },
  { id: 18, title: 'Project 18', description: 'Beschrijving project 18', tags: ['PHP', 'SQL'], categoryColor: 'red', url: '#', bgGradientFrom: 'from-red-600', bgGradientTo: 'to-red-800' },
  { id: 19, title: 'Project 19', description: 'Beschrijving project 19', tags: ['React', 'JavaScript'], categoryColor: 'teal', url: '#', bgGradientFrom: 'from-teal-600', bgGradientTo: 'to-teal-800' },
  { id: 20, title: 'Project 20', description: 'Beschrijving project 20', tags: ['Cybersecurity', 'Penetration Testing'], categoryColor: 'green', url: '#', bgGradientFrom: 'from-green-600', bgGradientTo: 'to-green-800' },
  { id: 21, title: 'Project 21', description: 'Beschrijving project 21', tags: ['HTML', 'JavaScript', 'React'], categoryColor: 'blue', url: '#', bgGradientFrom: 'from-blue-600', bgGradientTo: 'to-blue-800' }
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
  'Kali Linux'
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

  const displayedProjecten = activeFilters.length === 0
    ? projectenData
    : projectenData.filter(proj =>
        proj.tags.some(tag => activeFilters.includes(tag))
      )

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
        <h1 className="text-3xl font-bold">Projecten</h1>
        <button 
          onClick={toggleTheme}
          className={`p-2 rounded-lg transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </header>

      {/* Filter Buttons */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <h2 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>
          Filter projecten op technologie:
        </h2>
        <div className="flex flex-wrap gap-3">
          {filterOptions.map((tag) => {
            const active = activeFilters.includes(tag)
            return (
              <button
                key={tag}
                onClick={() => toggleFilter(tag)}
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 border ${
                  active
                    ? isDarkMode
                      ? 'bg-green-600 text-white border-green-600'
                      : 'bg-green-200 text-green-800 border-green-200'
                    : isDarkMode
                      ? 'bg-transparent text-green-400 border-green-400 hover:bg-green-700 hover:text-white'
                      : 'bg-transparent text-green-700 border-green-700 hover:bg-green-300 hover:text-green-900'
                }`}
              >
                {tag}
              </button>
            )
          })}
          {activeFilters.length > 0 && (
            <button 
              onClick={() => setActiveFilters([])}
              className="px-4 py-2 rounded-full font-medium border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
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
          <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Geen projecten gevonden met de geselecteerde filters.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjecten.map(proj => (
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
                <div className={`w-full h-48 rounded-lg mb-4 overflow-hidden relative bg-gradient-to-br ${proj.bgGradientFrom} ${proj.bgGradientTo} flex items-center justify-center`}>
                  {proj.image ? (
                    <>
                      <img 
                        src={proj.image} 
                        alt={proj.title} 
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg">
                        <span className="text-white font-semibold text-lg bg-green-700 px-4 py-2 rounded-lg">{proj.categoryColor.charAt(0).toUpperCase() + proj.categoryColor.slice(1)}</span>
                      </div>
                    </>
                  ) : (
                    <span className="text-white font-semibold text-lg">{proj.categoryColor.charAt(0).toUpperCase() + proj.categoryColor.slice(1)}</span>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>{proj.description}</p>
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

      <footer className={`py-12 px-6 mt-20 border-t ${
        isDarkMode 
          ? 'border-gray-700 bg-gradient-to-r from-slate-900/50 to-blue-900/50 text-gray-400' 
          : 'border-gray-200 bg-gradient-to-r from-blue-50/50 to-slate-50/50 text-gray-600'
      }`}>
        <div className="max-w-6xl mx-auto text-center">
          &copy; 2025 Rayan Aghmer. Alle rechten voorbehouden.
        </div>
      </footer>
    </div>
  )
}
