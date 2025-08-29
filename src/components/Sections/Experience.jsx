import { useState } from 'react'
import { portfolioData } from '../../data/portfolio'

const Experience = () => {
  const { experience, freelanceWork } = portfolioData
  const [expandedCard, setExpandedCard] = useState(null)

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  const allExperience = [...experience, ...freelanceWork]

  return (
    <section id="experience" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            My professional journey as a Full Stack Developer across various companies and technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary/30"></div>

            {allExperience.map((job, index) => (
              <div key={job.id} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-base-100 z-10"></div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="card-body">
                      {/* Header */}
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="card-title text-xl">{job.position}</h3>
                          <p className="text-primary font-semibold">{job.company}</p>
                          <p className="text-sm text-base-content/70">{job.location}</p>
                        </div>
                        <div className="badge badge-outline">
                          {job.startDate} - {job.endDate}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mb-4">{job.description}</p>

                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="badge badge-primary badge-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements - Expandable */}
                      {job.achievements && job.achievements.length > 0 && (
                        <div>
                          <button
                            onClick={() => toggleCard(job.id)}
                            className="btn btn-ghost btn-sm mb-2"
                          >
                            Key Achievements
                            <svg 
                              className={`w-4 h-4 ml-2 transition-transform ${expandedCard === job.id ? 'rotate-180' : ''}`}
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          
                          {expandedCard === job.id && (
                            <div className="space-y-2 animate-fadeIn">
                              {job.achievements.map((achievement, achIndex) => (
                                <div key={achIndex} className="flex items-start gap-2">
                                  <svg className="w-4 h-4 text-success mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                  <p className="text-sm">{achievement}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4+</div>
            <div className="text-sm text-base-content/70">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <div className="text-sm text-base-content/70">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-base-content/70">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <div className="text-sm text-base-content/70">AWS Certification</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience