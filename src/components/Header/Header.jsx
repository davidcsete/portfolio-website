import Navigation from './Navigation'
import { portfolioData } from '../../data/portfolio'

const Header = () => {
  const { personal } = portfolioData

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <button
              onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })}
              className="text-lg md:text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              {personal.name}
            </button>
          </div>
          
          <Navigation />
          
          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <a
              href={`mailto:${personal.email}`}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header