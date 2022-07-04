import Image from 'next/image'

const OverviewSection = ({ className = '' }: { className?: string }) => {
  return (
    <section className={className}>
      {' '}
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
          src="/images/profile/main_profile.png"
          objectFit="cover"
          layout="fill"
          alt="profile"
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
      {/* <br />I used to be a Java Backend Engineer (working full time for an
    italian company for several years) but then i got into the world of
    Frontend development and decided to continue my career on my own
    becoming a Full Stack Engineer. <br /> */}
      <br /> <br />
      Want to know more about me ?{' '}
      <a className="link" href="#">
        Read my Bio
      </a>{' '}
      <br />
      Want get in touch ?{' '}
      <a className="link" href="#">
        Contact me
      </a>
    </article>
  )
}

export default OverviewSection
