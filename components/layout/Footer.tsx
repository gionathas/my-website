import social from 'public/social.json'
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineInstagram,
} from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
import SocialLink from '../SocialLink'

const Footer = () => {
  return (
    <footer className="w-full mt-20">
      <h4 className="text-sm font-light text-center text-neutral-500">
        © 2022 Gionatha Sturba. All Rights Reserved.
      </h4>
      <ul className="flex items-center justify-center my-2 text-black gap-x-2">
        <SocialLink
          className="text-black dark:text-white"
          icon={AiFillYoutube}
          href={social.youtube}
        />
        <SocialLink
          className="text-black dark:text-white"
          icon={AiFillLinkedin}
          href={social.linkedin}
        />
        <SocialLink
          className="text-black dark:text-white"
          icon={AiFillGithub}
          href={social.github}
        />
        <SocialLink
          className="text-black dark:text-white"
          icon={AiFillFacebook}
          href={social.facebook}
        />
        <SocialLink
          className="text-black dark:text-white"
          icon={AiOutlineInstagram}
          href={social.instagram}
        />
        <SocialLink
          className="text-black dark:text-white"
          icon={BsDiscord}
          href={social.discord}
        />
      </ul>
    </footer>
  )
}

export default Footer
