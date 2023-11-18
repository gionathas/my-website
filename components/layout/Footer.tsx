import { SocialLink } from 'components/Link'
import social from 'public/social.json'
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineInstagram,
} from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="w-full mt-20 mb-4">
      <h4 className="text-sm font-light text-center text-neutral-500">
        {`© ${new Date().getFullYear()}  Gionatha Sturba. All Rights Reserved.`}
      </h4>
      <ul className="flex items-center justify-center my-2 text-black gap-x-2">
        <SocialLink
          className="text-white"
          icon={AiFillYoutube}
          href={social.youtube}
        />
        <SocialLink
          className="text-white"
          icon={AiFillLinkedin}
          href={social.linkedin}
        />
        <SocialLink
          className="text-white"
          icon={AiFillGithub}
          href={social.github}
        />
        <SocialLink
          className="text-white"
          icon={AiFillFacebook}
          href={social.facebook}
        />
        <SocialLink
          className="text-white"
          icon={AiOutlineInstagram}
          href={social.instagram}
        />
        <SocialLink
          className="text-white"
          icon={BsDiscord}
          href={social.discord}
        />
      </ul>
      <div className="text-center">
        <a
          className="text-sm text-neutral-500 hover:no-underline"
          href="https://bit.ly/3g6iSi7"
          target={'_blank'}
          rel="noreferrer"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  )
}

export default Footer
