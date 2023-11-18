import ProjectCard from 'components/ProjectCard'
import videos from 'public/projects/videos.json'
import social from 'public/social.json'
import {
  ProjectPreviewsSection,
  ProjectsPreviewsContent,
} from '../ProjectPreviews'

const FeaturedVideos = ({ className }: { className?: string }) => {
  return (
    <ProjectPreviewsSection
      className={className}
      title={'Featured Posts 🍿'}
      viewAllHref={social.youtube}
      externalLink
    >
      <ProjectsPreviewsContent className="mt-4">
        <ProjectCard project={videos.fullstackApp} className="flex-1" />
        <ProjectCard project={videos.treecraft} className="flex-1" />
      </ProjectsPreviewsContent>
    </ProjectPreviewsSection>
  )
}

export default FeaturedVideos
