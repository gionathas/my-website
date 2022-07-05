import routes from 'config/routes'
import Image from 'next/image'
import ProfileImage from 'public/images/profile/main_profile.png'

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
        <h2 className="font-semibold text-xl">Gionatha Sturba</h2>
        <p className="font-light text-sm">
          Full Stack Engineer, SaaS Developer
        </p>
      </div>

      <div className="relative w-20 h-20 rounded-full ring-2 ring-orange-500/80">
        <Image
          src={ProfileImage}
          objectFit="cover"
          layout="fill"
          alt="profile"
          placeholder="blur"
        />
      </div>
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
      <br /> <br />
      Want to know more about me ?{' '}
      <a className="link" href={routes.bio}>
        Read my Bio
      </a>{' '}
      <br />
      Want to get in touch ?{' '}
      <a className="link" href={routes.contacts}>
        Contact me
      </a>
    </article>
  )
}

export default OverviewSection
