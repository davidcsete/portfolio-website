import { portfolioData } from '../../data/portfolio'

const Education = () => {
  const { education, certifications, courses, freelanceWork } = portfolioData

  return (
    <section id="education" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education & Learning</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            My educational background, certifications, and continuous learning journey
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Certifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Professional Certifications</h3>
            <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
              {certifications.map((cert) => (
                <div key={cert.id} className="card bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-200 shadow-lg">
                  <div className="card-body">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="card-title text-lg text-orange-800">{cert.name}</h4>
                          <p className="text-orange-700 font-semibold">{cert.issuer}</p>
                          <p className="text-sm text-base-content/70">Issued: {cert.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="badge badge-warning mb-2">{cert.status}</div>
                        <p className="text-xs text-base-content/70">Cloud Computing</p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                      <p className="text-sm text-orange-800">
                        Validates foundational knowledge of AWS Cloud services, security, architecture, 
                        pricing, and support to build credible cloud expertise.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Courses & Additional Learning */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Courses & Training</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <div key={course.id} className="card bg-base-100 shadow-lg">
                  <div className="card-body">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{course.name}</h4>
                        <p className="text-secondary text-sm font-medium mb-2">{course.institution}</p>
                        <p className="text-sm text-base-content/70 mb-3">{course.description}</p>
                        <div className="badge badge-success badge-sm">
                          {course.completed ? 'Completed' : 'In Progress'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Freelance Learning Experience */}
              {freelanceWork.map((work) => (
                <div key={work.id} className="card bg-base-100 shadow-lg">
                  <div className="card-body">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-info/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">Flutter Development</h4>
                        <p className="text-info text-sm font-medium mb-2">{work.company} - {work.position}</p>
                        <p className="text-sm text-base-content/70 mb-3">{work.description}</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {work.technologies.map((tech, index) => (
                            <span key={index} className="badge badge-info badge-xs">{tech}</span>
                          ))}
                        </div>
                        <div className="badge badge-outline badge-sm">
                          {work.startDate} - {work.endDate}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className="text-center">
            <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg max-w-3xl mx-auto">
              <div className="card-body">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
                <p className="text-base-content/80 leading-relaxed">
                  I believe in continuous learning and staying updated with the latest technologies. 
                  From formal education to hands-on freelance projects, I constantly expand my skill set 
                  to deliver cutting-edge solutions and maintain expertise in modern development practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education