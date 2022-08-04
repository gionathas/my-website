import { IconType } from 'react-icons/lib'

export const SocialLink = ({
  href,
  icon: Icon,
  title,
  className = '',
}: {
  href: string
  icon: IconType
  title?: string
  className?: string
}) => {
  return (
    <a className={className} target="_blank" rel="noreferrer" href={href}>
      <Icon className="inline w-4 h-4" />
      {title && (
        <span className="ml-1 text-sm font-medium hover:underline hover:underline-offset-4">
          {title}
        </span>
      )}
    </a>
  )
}

export default SocialLink
