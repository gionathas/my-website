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
        <h2 className="text-xl font-semibold">Gionatha Sturba</h2>
        <p className="text-sm font-light">
          Full Stack Engineer, SaaS Developer
        </p>
      </div>
      <ResponsiveImage
        className="w-20 h-20 rounded-full ring-2 ring-orange-500/80"
        src={ProfileImage}
        alt="profile"
        placeholder="blur"
      />
    </div>
  )
}

const OverviewArticle = () => {
  return (
    <article className="text-[15px] leading-relaxed tracking-normal">
      Welcome there 👋🏻 <br />
      I&apos;m Gionatha, a freelancer <strong>Full Stack Engineer</strong>,
      based in <strong>Italy 🇮🇹</strong>
      <br /> I&apos;m passionate about building digital services 👨🏻‍💻 (also known
      as <strong>SaaS</strong> applications) to help the community solve
      specific problems.
      <br /> I ❤️ sharing my knowledge and works on{' '}
      <a href={socials.youtube} target="_blank" rel="noreferrer">
        Youtube
      </a>{' '}
      🎥
      <br /> <br />
      Want to know more about me ?{' '}
      <Link className="link" href={routes.bio}>
        Read my Bio
      </Link>{' '}
      <br />
      Want to get in touch ?{' '}
      <Link className="link" href={routes.contacts}>
        Contact me
      </Link>
    </article>
  )
}

export default OverviewSection
