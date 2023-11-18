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
    <div className="flex flex-col items-center lg:justify-between lg:flex-row-reverse">
      <ResponsiveImage
        className="w-24 h-24 rounded-full"
        src={ProfileImage}
        alt="profile"
      />
      <div className="mt-2 text-center lg:text-left lg:mt-0 xl:text-left">
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
    <article className="mt-6 text-base text-center text-gray-300 lg:text-left sm:mt-4 ">
      <p className="leading-relaxed">
        <span>Crafting digital solutions for everyday challenges.</span>
        <br />
        <span>
          I ❤️ spreading my knowledge on&nbsp;
          <Link
            href={socials.youtube}
            target="_blank"
            rel="no-referrer"
            className="text-orange-400 hover:underline underline-offset-4 "
          >
            Youtube
          </Link>
        </span>
        <span>&nbsp;and through my&nbsp;</span>
        <Link
          href={routes.blog}
          className="text-orange-400 hover:underline underline-offset-4 "
        >
          Blog
        </Link>
      </p>
    </article>
  )
}

export default OverviewSection
