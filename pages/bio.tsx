import ResponsiveImage from 'components/ResponsiveImage'
import { NextPage } from 'next'
import BioImage from 'public/images/bio.jpeg'

const BiographyPage: NextPage = () => {
  return (
    <>
      <ResponsiveImage
        className="w-full rounded-md h-72"
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
        <strong className="mr-1.5">2018 - 2022</strong> Working full time as a
        Java Backend Developer
      </li>
      <li>
        <strong className="mr-1.5">2022 - present</strong> Working as a
        freelancer
      </li>
    </ul>
  )
}

const BioArticle = ({ className }: { className?: string }) => {
  return (
    <article className={className}>
      <p className="leading-7 tracking-normal ">
        My career as a <strong>Software Developer</strong> started back then
        when i began studying CS at the University of Pisa.
        <br /> <br />
        After completing the studies I started working as a{' '}
        <strong>Java Backend Developer</strong> for an italian company, where I
        was involved in different kind of projects: from pure enterprise
        applications development to IoT infrastructures. <br /> <br />
        It was a great first experience, lasted for more than 3 years, in which
        I grew both as a software engineer and as a person. <br />
        <br />
        At some point i began realizing that i wanted something different for my
        career. I wanted to set out on my own and see what I could achieve with
        my skills alone. <br /> <br />
        So i decided to left my daily job and started to learn new tech skills
        mainly related to Web development. <br /> <br />
        While studying some fancy new stuff i&apos;ve also started building my
        own projects and showcasing the results on Youtube, to both share my
        experiences and to take the opportunity to teach what i&apos;ve learned.
        <br /> <br />
        Currently i&apos;m working as a freelancer, but i&apos;m open for new
        exciting job opportunities that could come in the future. <br /> <br />
      </p>
    </article>
  )
}

export default BiographyPage
