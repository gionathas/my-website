import { NextPage } from 'next'
import Image from 'next/image'
import BioImage from 'public/images/bio.jpeg'

const BiographyPage: NextPage = () => {
  return (
    <div>
      <div className="relative w-full h-72  overflow-hidden rounded-md">
        <Image
          src={BioImage}
          layout="fill"
          objectFit="cover"
          objectPosition="100% 70%"
          alt="bio profile"
          quality={100}
          placeholder="blur"
        />
      </div>
      <ShortBio className="mt-5" />
      <BioArticle className="mt-8" />
    </div>
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
        Science 💻 at University of Pisa 🇮🇹
      </li>
      <li>
        <strong className="mr-1.5">2018 - 2022</strong> Working full time as
        Java Backend Engineer 👨🏻‍💻 for an Italian Company
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
      <p className="text-sm leading-7 tracking-normal">
        My career as a <strong>Software Engineer</strong> started back when i
        began to study Computer Science at the University of Pisa 🇮🇹
        <br /> <br />
        After i finished my studies, i started working as a{' '}
        <strong>Java Backend Engineer</strong> for an Italian Company 🇮🇹, where
        i worked in different kind of projects: from pure Enterprise
        Applications to <strong>IoT</strong> Applications 📍. <br />
        Back then my tech stack was mostly based on Java and Spring Boot ♨️ (for
        the development phase), while for the deployment phase we used Docker
        and Kubernetes 🐳 <br /> <br />
        It was a nice experience, it helped me a lot to grow as a SWE and to
        taste what it means to work in the world of Software Development. <br />
        <br />
        At some point i started realizing that i wanted something different for
        my career, i wanted to set out on my own and see what I could achieve
        with my skills alone 🚶🏻 <br />
        So i decided to left my daily job and started to learn new tech skills
        related to the Web development 🌐. <br /> <br />
        I started learning React, Javascript, Typescript, NodeJS etc.. and began
        to build my own projects 🔨. This gave me the opportunity to be able to
        express my creativity under the form of digital services that everyone
        could use. <br /> <br />
        Now i work as a freelancer, but i&apos;m also open for new exciting
        opportunities that can come. <br /> <br />
        Gionatha
      </p>
    </article>
  )
}

export default BiographyPage
