import ProjectThumbnail from 'components/ProjectThumbnail'
import Link from 'next/link'
import projects from 'public/projects.json'

const firstProject = projects[0]
const secondProject = projects[1]

const LatestProjectsSection = ({ className = '' }: { className?: string }) => {
  return (
    <section className={className}>
      <div className="flex items-baseline justify-between">
        <h2 className="text-xl font-semibold">Latest Projects 💎</h2>
        <Link href={'#'} passHref>
          <a>View all</a>
        </Link>
      </div>
      <div className="flex gap-x-2 mt-4">
        <LatestProject
          title={firstProject.title}
          description={firstProject.description}
          thumbnailSrc={firstProject.thumbnailSrc}
          demoHref={firstProject.demo}
          className="flex-1"
        />
        <LatestProject
          title={secondProject.title}
          description={secondProject.description}
          thumbnailSrc={secondProject.thumbnailSrc}
          demoHref={secondProject.demo}
          className="flex-1"
        />
      </div>
    </section>
  )
}

const LatestProject = ({
  title,
  description,
  demoHref,
  thumbnailSrc,
  className = '',
}: {
  title: string
  description: string
  demoHref: string
  thumbnailSrc: string
  className?: string
}) => {
  return (
    <div className={className}>
      <ProjectThumbnail
        thumbnailSrc={thumbnailSrc}
        href={demoHref}
        className="flex-1"
      />
      <div className="mt-2 text-center">
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  )
}

export default LatestProjectsSection
