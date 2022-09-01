import ProjectCard from 'components/ProjectCard'
import videos from 'public/projects/videos.json'
import social from 'public/social.json'
import {
  ProjectPreviewsSection,
  ProjectsPreviewsContent,
} from '../ProjectPreviews'

const LatestVideos = ({ className }: { className?: string }) => {
  return (
    <ProjectPreviewsSection
      className={className}
      title={'Popular Posts 🎥'}
      viewAllHref={social.youtube}
      externalLink
    >
      <ProjectsPreviewsContent className="mt-4">
        <ProjectCard project={videos.kanban_board} className="flex-1" />
        <ProjectCard project={videos.speed_typing} className="flex-1" />
      </ProjectsPreviewsContent>
    </ProjectPreviewsSection>
  )
}

export default LatestVideos
