import ResponsiveImage from 'components/ResponsiveImage'

import routes from 'config/routes'
import Link from 'next/link'
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
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-semibold">Gionatha Sturba</h2>
        <p className="font-light">Full Stack Developer, SaaS Developer</p>
      </div>
      <ResponsiveImage
        className="w-24 h-24 rounded-full ring-2 ring-orange-500/80"
        src={ProfileImage}
        alt="profile"
      />
    </div>
  )
}

const OverviewArticle = () => {
  return (
    <article className="text-[16px] mt-4 md:mt-2 leading-relaxed tracking-normal">
      Welcome there 👋🏻 <br />
      I&apos;m Gionatha, a freelancer <strong>
        Full Stack Developer 👨🏻‍💻
      </strong>{' '}
      based in <strong>Italy 🇮🇹</strong>
      <br /> I&apos;m passionate about building digital services (also known as{' '}
      <strong>SaaS</strong> applications) to help the community solve specific
      problems.
      <br /> I ❤️ sharing my knowledge and works on{' '}
      <a
        className="link"
        href={socials.youtube}
        target="_blank"
        rel="noreferrer"
      >
        Youtube
      </a>{' '}
      🎥
      <br /> <br />
      Want to know more about me?{' '}
      <Link className="link" href={routes.bio}>
        Read my Bio
      </Link>{' '}
      <br />
      Want to get in touch?{' '}
      <Link className="link" href={routes.contacts}>
        Contact me
      </Link>
    </article>
  )
}

export default OverviewSection
