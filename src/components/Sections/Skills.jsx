import { portfolioData } from '../../data/portfolio'

const Skills = () => {
  const { skills, certifications } = portfolioData

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: skills.languages.filter(lang => !['English', 'Romanian', 'Hungarian'].includes(lang)),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "text-blue-500"
    },
    {
      title: "Frameworks & Libraries",
      skills: skills.frameworks,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: "text-green-500"
    },
    {
      title: "Databases",
      skills: skills.databases,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      color: "text-purple-500"
    },
    {
      title: "Tools & DevOps",
      skills: skills.tools,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: "text-orange-500"
    },
    {
      title: "Testing",
      skills: skills.testing,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "text-red-500"
    }
  ]

  const languages = skills.languages.filter(lang => ['English', 'Romanian', 'Hungarian'].includes(lang))

  return (
    <section id="skills" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Technical Skills */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="card-body">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-base-200 ${category.color}`}>
                      {category.icon}
                    </div>
                    <h3 className="card-title text-lg">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="badge badge-primary badge-outline hover:badge-primary transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Languages */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* AWS Certification */}
          <div className="card bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-200 shadow-lg">
            <div className="card-body text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="card-title justify-center mb-2">AWS Certified</h3>
              <p className="text-orange-700 font-semibold mb-2">Cloud Practitioner</p>
              <p className="text-sm text-base-content/70">
                Certified in Amazon Web Services fundamentals and cloud computing best practices
              </p>
              <div className="badge badge-warning mt-4">Active Certification</div>
            </div>
          </div>

          {/* Languages */}
          <div className="card bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-200 shadow-lg">
            <div className="card-body text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="card-title justify-center mb-4">Languages</h3>
              <div className="space-y-3">
                {languages.map((language, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium">{language}</span>
                    <span className="badge badge-primary badge-sm">
                      {language === 'English' ? 'Fluent' : 'Native'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="stats stats-vertical lg:stats-horizontal shadow-lg bg-base-100">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="stat-title">Programming Languages</div>
              <div className="stat-value text-primary">{skillCategories[0].skills.length}</div>
            </div>
            
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="stat-title">Frameworks</div>
              <div className="stat-value text-secondary">{skillCategories[1].skills.length}</div>
            </div>
            
            <div className="stat">
              <div className="stat-figure text-accent">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="stat-title">Certifications</div>
              <div className="stat-value text-accent">{certifications.length}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills