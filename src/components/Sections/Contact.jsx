import { useState } from 'react'
import { portfolioData } from '../../data/portfolio'

const Contact = () => {
  const { personal } = portfolioData
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus] = useState('')
  const [isSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      title: 'Email',
      value: personal.email,
      link: `mailto:${personal.email}`,
      description: 'Send me an email anytime'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      title: 'Phone',
      value: personal.phone,
      link: `tel:${personal.phone}`,
      description: 'Call me for urgent matters'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Location',
      value: personal.location,
      link: `https://maps.google.com/?q=${encodeURIComponent(personal.location)}`,
      description: 'Based in Hungary'
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: 'https://www.linkedin.com/in/david-csete-1035311ba/', // Replace with actual LinkedIn URL
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      url: 'https://github.com/davidcsete', // Replace with actual GitHub URL
      color: 'text-gray-800 hover:text-gray-900'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Ready to work together? I'd love to hear about your project and discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid  gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
              
              <div className="space-y-6 mb-8 max-w-md mx-auto">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target={method.title === 'Location' ? '_blank' : '_self'}
                    rel={method.title === 'Location' ? 'noopener noreferrer' : ''}
                    className="flex items-center gap-4 p-4 rounded-lg bg-base-200 hover:bg-base-300 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{method.title}</h4>
                      <p className="text-primary">{method.value}</p>
                      <p className="text-sm text-base-content/70">{method.description}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4 justify-center">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full bg-base-200 flex items-center justify-center transition-colors ${social.color}`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="mt-8 p-4 bg-success/10 border border-success/20 rounded-lg max-w-md mx-auto">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <div>
                    <p className="font-semibold text-success">Available for new projects</p>
                    <p className="text-sm text-base-content/70">Currently accepting freelance and full-time opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-base-300 text-center">
          <p className="text-base-content/70">
            © 2024 {personal.name}. Built with React, Tailwind CSS, and DaisyUI.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact