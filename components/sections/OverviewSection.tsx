import ResponsiveImage from 'components/ResponsiveImage'

import ProfileImage from 'public/images/profile/main_profile.png'
import socials from 'public/social.json'

const OverviewSection = ({ className = '' }: { className?: string }) => {
  return (
    <section className={className}>
      <OverviewHeader />
      <OverviewArticle />
    </section>
  )
}

const OverviewHeader = () => {
  return (
    <div className="flex flex-col items-center lg:justify-between lg:flex-row-reverse">
      <ResponsiveImage
        className="w-24 h-24 rounded-full"
        src={ProfileImage}
        alt="profile"
      />
      <div className="mt-2 lg:mt-0">
        <h2 className="text-4xl font-bold">Gionatha Sturba</h2>
        <p className="font-light dark:text-gray-400">
          Full Stack Developer, SaaS Developer
        </p>
      </div>
    </div>
  )
}

const OverviewArticle = () => {
  return (
    <article className="text-[16px] text-justify xs:text-left text-gray-800 dark:text-gray-400 mt-6 sm:mt-4 ">
      <p className="leading-relaxed">
        Passionate about building digital services to help the community solve
        specific problems. I ❤️ sharing my knowledge and works on{' '}
        <a
          className="link"
          href={socials.youtube}
          target="_blank"
          rel="noreferrer"
        >
          Youtube
        </a>
      </p>
    </article>
  )
}

export default OverviewSection
