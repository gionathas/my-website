import ProjectCard from 'components/ProjectCard'
import { NextPage } from 'next'
import projects from 'public/projects/works.json'

const ProjectsPage: NextPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-x-4 gap-y-12 xs:gap-y-10">
        {Object.entries(projects).map(([name, project]) => (
          <ProjectCard key={name} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage
