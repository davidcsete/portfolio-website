import { portfolioData } from '../../data/portfolio'
import profilePicture from '../../assets/images/profile_picture.png'

const About = () => {
  const { personal } = portfolioData

  const highlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Full Stack Expertise",
      description: "Proficient in both backend and frontend development with modern frameworks"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "High Performance",
      description: "Focus on building scalable, secure, and high-performance web applications"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Code Quality",
      description: "Comprehensive testing and modern deployment practices ensure reliable solutions"
    }
  ]

  return (
    <section id="about" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src={profilePicture} 
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full -z-10"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Hello! I'm {personal.name.split(' ')[0]}
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                {personal.summary}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{highlight.title}</h4>
                    <p className="text-base-content/70">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="pt-6 border-t border-base-300">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a 
                    href={`mailto:${personal.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a 
                    href={`tel:${personal.phone}`}
                    className="hover:text-primary transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary"
              >
                Let's Work Together
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About