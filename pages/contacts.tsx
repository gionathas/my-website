import ResponsiveImage from 'components/ResponsiveImage'
import SocialLink from 'components/SocialLink'
import { NextPage } from 'next'
import ProfileImage from 'public/images/profile/contacts_profile.png'
import social from 'public/social.json'
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const ContactsPage: NextPage = () => {
  return (
    <div className="flex items-center justify-center gap-x-4">
      <ResponsiveImage
        className="w-40 h-40"
        src={ProfileImage}
        alt="contacts profile"
      />
      <ul className="flex flex-col items-start gap-y-1">
        <SocialLink
          className="text-cyan-700"
          icon={AiFillLinkedin}
          title="Linkedin"
          href={social.linkedin}
        />
        <SocialLink
          className="text-cyan-700"
          icon={AiFillGithub}
          title="GitHub"
          href={social.github}
        />
        <SocialLink
          className="text-cyan-700"
          icon={AiFillFacebook}
          title="Facebook"
          href={social.facebook}
        />
        <SocialLink
          className="text-cyan-700"
          icon={AiOutlineInstagram}
          title="Instagram"
          href={social.instagram}
        />
        <SocialLink
          className="text-cyan-700"
          icon={BsDiscord}
          title="Discord"
          href={social.discord}
        />
        <SocialLink
          className="text-cyan-700"
          icon={MdEmail}
          title={social.email}
          href={`mailto: ${social.email}`}
        />
      </ul>
    </div>
  )
}

export default ContactsPage
