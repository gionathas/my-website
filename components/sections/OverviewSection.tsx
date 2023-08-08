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
      <div className="mt-2 text-center lg:mt-0 xl:text-left">
        <h2 className="text-3xl font-bold ">Gionatha Sturba</h2>
        <p className="font-light text-gray-400">
          Frontend Engineer, Content Creator
        </p>
      </div>
    </div>
  )
}

const OverviewArticle = () => {
  return (
    <article className="mt-6 text-base text-center text-gray-400 xs:text-left sm:mt-4 ">
      <p className="leading-relaxed">
        <span>
          Passionate about building digital services to solve daily problems.
        </span>
        <br />
        <span>
          I ❤️ sharing my knowledge and works on{' '}
          <a
            className="link"
            href={socials.youtube}
            target="_blank"
            rel="noreferrer"
          >
            Youtube
          </a>
        </span>
      </p>
    </article>
  )
}

export default OverviewSection
