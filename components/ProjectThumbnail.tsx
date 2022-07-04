import Image from 'next/image'

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
    <div
      className={`relative w-full h-36 rounded-lg overflow-hidden hover:blur-[1px] drop-shadow-lg cursor-pointer transition-transform duration-200 ${className}`}
    >
      <Image
        src={thumbnailSrc}
        layout="fill"
        objectFit="cover"
        alt="Project Thumbnail"
      />
    </div>
  )
}

export default ProjectThumbnail
