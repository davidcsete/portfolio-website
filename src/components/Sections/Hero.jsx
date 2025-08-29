import { useState, useEffect } from 'react'
import { portfolioData } from '../../data/portfolio'

const Hero = () => {
  const { personal } = portfolioData
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const phrases = [
    'Full Stack Developer',
    'Ruby on Rails Expert',
    'React Developer',
    'AWS Certified Professional'
  ]

  useEffect(() => {
    const currentPhrase = phrases[currentIndex]
    
    if (displayText.length < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setDisplayText('')
        setCurrentIndex((prev) => (prev + 1) % phrases.length)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [displayText, currentIndex, phrases])

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 pt-16 px-4">
      <div className="hero-content text-center w-full">
        <div className="max-w-4xl mx-auto">
          {/* Name and Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {personal.name}
          </h1>
          
          {/* Animated Typing Effect */}
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary mb-6 h-8 md:h-12 flex items-center justify-center">
            <span className="font-semibold text-center">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Summary */}
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Highly proficient Full Stack Developer with expertise in Ruby on Rails, React, 
            and modern web technologies. Passionate about building scalable, high-performance 
            web applications with a focus on code quality and user experience.
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-8 text-sm md:text-base text-base-content/70">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>{personal.location}</span>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <button 
              onClick={scrollToContact}
              className="btn btn-primary btn-md md:btn-lg w-full sm:w-auto"
            >
              Get In Touch
              <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            
            <button 
              onClick={scrollToProjects}
              className="btn btn-outline btn-md md:btn-lg w-full sm:w-auto"
            >
              View My Work
              <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero