import ResponsiveImage from './ResponsiveImage'

export type ProjectCardProps = {
  project: {
    title: string
    description: string
    url: string
    thumbnailSrc: string
  }
  className?: string
}

const ProjectCard = ({ project, className = '' }: ProjectCardProps) => {
  return (
    <a
      href={project.url}
      target="_blank"
      className={`text-gray-900 dark:text-white hover:no-underline group ${className}`}
      rel="noreferrer"
    >
      <ProjectThumbnail
        thumbnailSrc={project.thumbnailSrc}
        href={project.url}
        className="flex-1"
      />
      <div className="mt-2 text-center">
        <h3 className="text-base font-bold">{project.title}</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {project.description}
        </p>
      </div>
    </a>
  )
}

type ProjectThumbnailProps = {
  thumbnailSrc: string
  href: string
  className?: string
}

const ProjectThumbnail = ({
  thumbnailSrc,
  className = '',
}: ProjectThumbnailProps) => {
  return (
    <ResponsiveImage
      src={thumbnailSrc}
      className={`relative w-full h-44 ring-1 ring-gray-50/10 xs:h-36 rounded-lg overflow-hidden xs:group-hover:scale-105 drop-shadow-md cursor-pointer transition-transform duration-200 ${className}`}
      alt="Project Thumbnail"
    />
  )
}

export default ProjectCard
