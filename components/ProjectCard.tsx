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
      className={`text-black dark:text-white hover:no-underline group ${className}`}
      rel="noreferrer"
    >
      <ProjectThumbnail
        thumbnailSrc={project.thumbnailSrc}
        href={project.url}
        className="flex-1"
      />
      <div className="mt-2 text-center">
        <h3 className="text-base font-semibold">{project.title}</h3>
        <p className="mt-1 text-sm dark:text-gray-300">{project.description}</p>
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
      className={`relative w-full h-56 xs:h-36 rounded-lg overflow-hidden group-hover:blur-[1px] drop-shadow-lg cursor-pointer transition-transform duration-200 ${className}`}
      alt="Project Thumbnail"
    />
  )
}

export default ProjectCard
