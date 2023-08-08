import ResponsiveImage from 'components/ResponsiveImage'
import { NextPage } from 'next'
import BioImage from 'public/images/bio.jpeg'

const BiographyPage: NextPage = () => {
  return (
    <>
      <ResponsiveImage
        className="hidden w-full rounded-md md:block h-72"
        src={BioImage}
        objectPosition="100% 70%"
        alt="bio profile"
        priority={true}
      />
      <ShortBio className="mt-5" />
      <BioArticle className="mt-8" />
    </>
  )
}

const ShortBio = ({ className }: { className?: string }) => {
  return (
    <ul className={`list-disc text-sm space-y-1.5 pl-4 ${className}`}>
      <li>
        <strong className="mr-1.5">1996</strong> Born in Teramo, Italy 🇮🇹
      </li>
      <li>
        <strong className="mr-1.5">2015 - 2018</strong> Graduating in Computer
        Science at University of Pisa
      </li>
      <li>
        <strong className="mr-1.5">2018 - 2022</strong> Working as Java Backend
        Developer
      </li>
      <li>
        <strong className="mr-1.5">2022 - 2023</strong> Self-taught education /
        Portfolio building
      </li>
      <li>
        <strong className="mr-1.5">2023 - present</strong> Working as Frontend
        Engineer at ProntoPro
      </li>
    </ul>
  )
}

const BioArticle = ({ className }: { className?: string }) => {
  return (
    <article className={className}>
      <p className="leading-7 tracking-normal ">
        I embarked on my journey as a <b>Software Engineer</b> during my time at
        the University of Pisa, where I pursued a degree in Computer Science.
        <br /> <br />
        Upon completing my studies, I transitioned into the role of a{' '}
        <b>Java Backend Developer</b> for a local company. This initial
        professional experience enriched me with diverse IT projects, fostering
        connections and enabling me to evolve both as an engineer and an
        individual.
        <br /> <br />
        Yet, a desire for a new chapter in my career began to blossom within me.
        I yearned for a venture that would allow me to explore my potential
        independently. This yearning led me to step away from my routine job and
        dive into acquiring fresh tech skills, primarily centered around Web
        development.
        <br /> <br />
        Amidst mastering these new and exciting technologies, I also dedicated
        myself to crafting a portfolio that showcased my capabilities. Through
        projects that I meticulously developed, I shared my accomplishments on
        my personal webpage and notably on my <b>YouTube</b> channel.
        <br /> <br />A year of unwavering dedication bore fruit when I secured
        the role of a <b>Frontend Engineer</b> at <b>ProntoPro</b>, my current
        professional home. Here, I continue to channel my passion for technology
        into meaningful contributions.
      </p>
    </article>
  )
}

export default BiographyPage
