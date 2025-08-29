import { useState, useEffect, useRef } from 'react'
import { useScrollSpy } from '../../hooks/useScrollSpy'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'education', 'contact']
  const activeSection = useScrollSpy(sections)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false) // Close mobile menu after navigation
  }

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ]

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex flex-1 justify-center">
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeSection === item.id 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden" ref={menuRef}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 right-4 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 animate-fadeIn">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 text-sm transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="border-t border-gray-200 mt-2 pt-2 px-4">
              <a
                href="mailto:davidcsetefogel@gmail.com"
                className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Get In Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Navigation