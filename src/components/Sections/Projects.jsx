import { useState } from 'react'
import { portfolioData } from '../../data/portfolio'

const Projects = () => {
  const { projects } = portfolioData
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('all')

  const categories = ['all', 'Personal Project', 'Professional Achievement', 'Freelance Project']
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const openModal = (project) => {
    setSelectedProject(project)
    document.getElementById('project_modal').showModal()
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.getElementById('project_modal').close()
  }

  return (
    <section id="projects" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            A showcase of my work including personal projects and professional achievements
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="tabs tabs-boxed">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`tab ${filter === category ? 'tab-active' : ''}`}
              >
                {category === 'all' ? 'All Projects' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className={`card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  project.featured ? 'ring-2 ring-primary ring-offset-2 ring-offset-base-100' : ''
                }`}
              >
                <div className="card-body">
                  {/* Project Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="card-title text-lg mb-2">
                        {project.name}
                        {project.featured && (
                          <div className="badge badge-primary badge-sm ml-2">Featured</div>
                        )}
                      </h3>
                      {project.company && (
                        <p className="text-sm text-primary font-semibold">{project.company}</p>
                      )}
                      <div className="badge badge-outline badge-sm mt-1">
                        {project.category}
                      </div>
                    </div>
                  </div>

                  {/* Project Image Placeholder */}
                  <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>

                  {/* Description */}
                  <p className="text-sm mb-4 line-clamp-3">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="badge badge-primary badge-xs">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="badge badge-ghost badge-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="card-actions justify-between items-center">
                    <button 
                      onClick={() => openModal(project)}
                      className="btn btn-sm btn-outline"
                    >
                      Learn More
                    </button>
                    
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-primary"
                      >
                        Live Demo
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Project Highlight - Workout Cooker */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 shadow-xl">
            <div className="card-body">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold">Workout Cooker</h3>
                    <div className="badge badge-primary">Live Project</div>
                  </div>
                  <p className="text-lg mb-4">
                    A comprehensive fitness tracking and workout planning platform built with the latest Rails 8 
                    and modern frontend technologies. Features real-time interactions powered by Hotwired and Stimulus.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="badge badge-primary">Rails 8</span>
                    <span className="badge badge-primary">Hotwired</span>
                    <span className="badge badge-primary">Stimulus</span>
                    <span className="badge badge-outline">Full Stack</span>
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href="https://workout-cooker.fly.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Visit Live Site
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="w-full lg:w-80 h-48 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <p className="text-sm font-semibold">Workout Cooker</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <dialog id="project_modal" className="modal">
        <div className="modal-box max-w-4xl">
          {selectedProject && (
            <>
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </form>
              
              <h3 className="font-bold text-2xl mb-4">{selectedProject.name}</h3>
              
              {selectedProject.company && (
                <p className="text-primary font-semibold mb-2">{selectedProject.company}</p>
              )}
              
              <div className="badge badge-outline mb-4">{selectedProject.category}</div>
              
              <p className="mb-6">{selectedProject.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="badge badge-primary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {selectedProject.liveUrl && (
                <div className="modal-action">
                  <a 
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Live Project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </section>
  )
}

export default Projects