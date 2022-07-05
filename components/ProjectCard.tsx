import { redirectTo } from 'lib/utils/helpers'
import Image from 'next/image'
import { useState } from 'react'

export type ProjectCardProps = {
  project: {
    title: string
    description: string
    demoHref: string
    thumbnailSrc: string
  }
  className?: string
}

const ProjectCard = ({ project, className = '' }: ProjectCardProps) => {
  const handleClick = () => {
    redirectTo(project.demoHref)
  }

  return (
    <div className={className}>
      <ProjectThumbnail
        onClick={handleClick}
        thumbnailSrc={project.thumbnailSrc}
        href={project.demoHref}
        className="flex-1"
      />
      <div className="mt-2 text-center">
        <h3 className="text-sm font-medium">{project.title}</h3>
        <p className="text-xs">{project.description}</p>
      </div>
    </div>
  )
}

type ProjectThumbnailProps = {
  thumbnailSrc: string
  href: string
  onClick: () => void
  className?: string
}

const ProjectThumbnail = ({
  thumbnailSrc,
  onClick,
  className = '',
}: ProjectThumbnailProps) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div
      onClick={onClick}
      className={`relative w-full h-36 rounded-lg overflow-hidden hover:blur-[1px] drop-shadow-lg cursor-pointer transition-transform duration-200 ${className}`}
    >
      <Image
        src={thumbnailSrc}
        className={`duration-200 ease-in-out ${
          isLoading ? 'grayscale blur-md' : 'grayscale-0 blur-0'
        }`}
        layout="fill"
        objectFit="cover"
        alt="Project Thumbnail"
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  )
}

export default ProjectCard
