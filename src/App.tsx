import React, { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import Terminal from './components/Terminal'
import Phone from './components/Phone'
import ProjectCard from './components/ProjectCard'
import projectsData from './data/projects.json'

function App() {
  const [showProjects, setShowProjects] = useState(false)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(projectsData)
  }, [])

  const handleShowProjects = () => {
    setShowProjects(true)
    setTimeout(() => {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="min-h-screen flex flex-col justify-center items-center p-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Phone />
          <Terminal />
        </div>
        <button
          onClick={handleShowProjects}
          className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center"
        >
          Voir mes projets
          <ChevronDown className="ml-2" />
        </button>
      </section>

      {showProjects && (
        <section id="projects" className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Mes Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} isEven={index % 2 === 0} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default App