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
    <a className={className} href={href}>
      <Icon className="w-4 h-4 inline" />
      {title && (
        <span className="text-sm font-medium ml-1 hover:underline hover:underline-offset-4">
          {title}
        </span>
      )}
    </a>
  )
}

export default SocialLink
