import social from 'public/social.json'
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
import SocialLink from '../SocialLink'

const Footer = () => {
  return (
    <footer className="w-full mt-20">
      <h4 className="text-center font-light text-sm text-neutral-500">
        © 2022 Gionatha Sturba. All Rights Reserved.
      </h4>
      <ul className="flex justify-center items-center gap-x-2 my-2">
        <SocialLink
          className="text-black"
          icon={AiFillLinkedin}
          href={social.linkedin}
        />
        <SocialLink
          className="text-black"
          icon={AiFillGithub}
          href={social.github}
        />
        <SocialLink
          className="text-black"
          icon={AiFillFacebook}
          href={social.facebook}
        />
        <SocialLink
          className="text-black"
          icon={AiOutlineInstagram}
          href={social.instagram}
        />
        <SocialLink
          className="text-black"
          icon={BsDiscord}
          href={social.discord}
        />
      </ul>
    </footer>
  )
}

export default Footer
