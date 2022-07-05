import ProjectCard from 'components/ProjectCard'
import { NextPage } from 'next'
import projects from 'public/projects.json'

const ProjectsPage: NextPage = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">My projects 💎</h2>
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 mt-7">
        {Object.entries(projects).map(([name, project]) => (
          <ProjectCard key={name} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage
