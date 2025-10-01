'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function CertificatenPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [gradientColors, setGradientColors] = useState({
    dark: {
      from: 'slate-900',
      via: 'blue-900', 
      to: 'slate-900'
    },
    light: {
      from: 'blue-50',
      via: 'blue-100',
      to: 'slate-50'
    }
  })
  const [showColorPicker, setShowColorPicker] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    }
  
    const savedGradients = localStorage.getItem('gradientColors')
    if (savedGradients) {
      setGradientColors(JSON.parse(savedGradients))
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  const updateGradientColor = (mode, position, color) => {
    const newColors = {
      ...gradientColors,
      [mode]: {
        ...gradientColors[mode],
        [position]: color
      }
    }
    setGradientColors(newColors)
    localStorage.setItem('gradientColors', JSON.stringify(newColors))
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
      'gray-100': '#f3f4f6'
    }
    
    return {
      background: `linear-gradient(to bottom right, ${colorMap[colors.from]}, ${colorMap[colors.via]}, ${colorMap[colors.to]})`
    }
  }

  const certificaten = [
    {
      id: 2,
      title: 'Introduction To CyberSecurity',
      description: 'Certificaat voor cybersecurity fundamentals inclusief penetration testing, vulnerability assessment en security best practices.',
      tags: ['Penetration Testing', 'Security Analysis', 'Kali Linux'],
      categoryColor: 'green',
      url: 'https://www.credly.com/badges/6502612c-b8df-45b4-9f45-62162a444564/linked_in_profile',
      bgGradientFrom: 'from-green-600',
      bgGradientTo: 'to-green-800',
      label: 'CyberSecurity',
    },
    {
      id: 3,
      title: 'Cybersecurity Fundamentals',
      description: 'Cybersecurity fundamentals omvatten de basisprincipes en praktijken die organisaties helpen systemen, netwerken en data te beveiligen.',
      tags: ['Nmap', 'John The Ripper', 'WireShark'],
      categoryColor: 'purple',
      url: 'https://www.credly.com/badges/1336b598-e6fe-4dd5-bd5d-b1684ac03090/linked_in_profile',
      bgGradientFrom: 'from-purple-600',
      bgGradientTo: 'to-purple-800',
      label: 'CyberSecurity',
    },
  ]

  return (
    <div 
      className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
      style={getGradientStyle()}
    >
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <div className={`w-6 h-6 transform rotate-45 transition-colors duration-300 ${isDarkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
          <span className="text-xl font-bold">Portfolio Rayan</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className={`hover:opacity-70 transition-opacity ${isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'}`}>Home</Link>
          <Link href="/projecten" className={`hover:opacity-70 transition-opacity ${isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'}`}>Projecten</Link>
          <Link href="/certificaten" className={`hover:opacity-70 transition-opacity ${isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'}`}>Certificaten</Link>
          <Link href="/contact" className={`hover:opacity-70 transition-opacity ${isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'}`}>Contact</Link>
        </nav>


        <div className="flex items-center space-x-2">
          {/* Color Picker */}
          <button
            onClick={() => setShowColorPicker(!showColorPicker)}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-pink-400' : 'bg-gray-200 hover:bg-gray-300 text-pink-600'
            }`}
            aria-label="Color picker"
          >
            {/* icon svg */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
            }`}
            aria-label="Toggle theme"
          >
            {/* icon svg */}
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
              </svg>
            )}
          </button>
        </div>
      </header>


      {/* Color Picker Panel */}
      {showColorPicker && (
        <div className={`fixed top-20 right-6 z-50 p-6 rounded-xl shadow-lg backdrop-blur-sm border ${
          isDarkMode ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-gray-200'
        }`}>
          {/* Color picker content can be added here */}
        </div>
      )}


      {/* Main Content */}
      <main className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Mijn Certificaten
          </h1>
          
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {certificaten.map(cert => (
              cert.url && cert.url !== '#' ? (
                <Link
                  key={cert.id}
                  href={cert.url}
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer max-w-md mx-auto ${
                    isDarkMode 
                      ? `bg-gradient-to-br ${cert.bgGradientFrom}/20 to-slate-800/20 border border-${cert.categoryColor}-500/20 hover:border-${cert.categoryColor}-400/40` 
                      : `bg-gradient-to-br ${cert.bgGradientFrom}/50 to-slate-100/50 border border-${cert.categoryColor}-300/30 hover:border-${cert.categoryColor}-400/50`
                  }`}
                >
                  <div className={`w-full h-48 bg-gradient-to-br ${cert.bgGradientFrom} ${cert.bgGradientTo} rounded-lg mb-4 flex items-center justify-center`}>
                    <span className="text-white font-semibold text-lg">{cert.label}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{cert.title}</h3>
                  <p className={`mb-4 text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{cert.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    {cert.tags.map(tag => (
                      <span 
                        key={tag} 
                        className={`px-3 py-1 rounded-full text-sm ${
                          isDarkMode 
                            ? `bg-${cert.categoryColor}-600/20 text-${cert.categoryColor}-300` 
                            : `bg-${cert.categoryColor}-100 text-${cert.categoryColor}-800`
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ) : (
                <div
                  key={cert.id}
                  className={`backdrop-blur-sm rounded-xl p-6 cursor-default max-w-md mx-auto ${
                    isDarkMode 
                      ? `bg-gradient-to-br ${cert.bgGradientFrom}/20 to-slate-800/20 border border-${cert.categoryColor}-500/20` 
                      : `bg-gradient-to-br ${cert.bgGradientFrom}/50 to-slate-100/50 border border-${cert.categoryColor}-300/30`
                  }`}
                >
                  <div className={`w-full h-48 bg-gradient-to-br ${cert.bgGradientFrom} ${cert.bgGradientTo} rounded-lg mb-4 flex items-center justify-center`}>
                    <span className="text-white font-semibold text-lg">{cert.label}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{cert.title}</h3>
                  <p className={`mb-4 text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{cert.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    {cert.tags.map(tag => (
                      <span 
                        key={tag} 
                        className={`px-3 py-1 rounded-full text-sm ${
                          isDarkMode 
                            ? `bg-${cert.categoryColor}-600/20 text-${cert.categoryColor}-300` 
                            : `bg-${cert.categoryColor}-100 text-${cert.categoryColor}-800`
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`py-12 px-6 border-t ${isDarkMode ? 'border-gray-700 bg-gradient-to-r from-slate-900/50 to-blue-900/50' : 'border-gray-200 bg-gradient-to-r from-blue-50/50 to-slate-50/50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Rayan Aghmer
              </h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Web Developer & App Designer
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link
                href="https://github.com/MA37596"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                  isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="font-medium">GitHub</span>
              </Link>
              
              <Link
                href="https://www.linkedin.com/in/rayan-a-372002350/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                  isDarkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="font-medium">LinkedIn</span>
              </Link>
            </div>
          </div>
          
          <div className={`mt-8 pt-8 border-t text-center ${isDarkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500'}`}>
            <p>&copy; 2025 Rayan Aghmer. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>

      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(${isDarkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)'} 1px, transparent 1px),
                linear-gradient(90deg, ${isDarkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)'} 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
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
