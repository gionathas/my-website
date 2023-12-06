import ProjectCard from 'components/ProjectCard'
import routes from 'config/routes'
import works from 'public/projects/works.json'
import {
  ProjectPreviewsSection,
  ProjectsPreviewsContent,
} from '../ProjectPreviews'

const FeaturedProjects = ({ className = '' }: { className?: string }) => {
  return (
    <ProjectPreviewsSection
      className={className}
      title={'Featured Projects 💎'}
      viewAllHref={routes.projects}
    >
      <ProjectsPreviewsContent className="mt-4">
        <ProjectCard project={works.tmdb} className="flex-1" />
        <ProjectCard project={works.kanban} className="flex-1" />
      </ProjectsPreviewsContent>
    </ProjectPreviewsSection>
  )
}

export default FeaturedProjects
