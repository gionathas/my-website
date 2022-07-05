import ProjectCard from 'components/ProjectCard'
import routes from 'config/routes'
import Link from 'next/link'
import projects from 'public/projects.json'

const qwestions = projects.qwestions
const tmdb = projects.tmdb

const LatestProjectsSection = ({ className = '' }: { className?: string }) => {
  return (
    <section className={className}>
      <div className="flex items-baseline justify-between">
        <h2 className="text-xl font-semibold">Latest Projects 💎</h2>
        <Link href={routes.projects} passHref>
          <a>View all</a>
        </Link>
      </div>
      <div className="flex gap-x-2 mt-4">
        <ProjectCard project={qwestions} className="flex-1" />
        <ProjectCard project={tmdb} className="flex-1" />
      </div>
    </section>
  )
}

export default LatestProjectsSection
