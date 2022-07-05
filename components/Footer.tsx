import social from 'public/social.json'
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="w-full">
      <h4 className="text-center font-light text-sm text-neutral-500">
        © 2022 Gionatha Sturba. All Rights Reserved.
      </h4>
      <div className="flex justify-center items-center gap-x-2 my-2">
        <a className="text-black" href={social.linkedin}>
          <AiFillLinkedin className="w-4 h-4" />
        </a>
        <a className="text-black" href={social.github}>
          <AiFillGithub className="w-4 h-4" />
        </a>
        <a className="text-black" href={social.facebook}>
          <AiFillFacebook className="w-4 h-4" />
        </a>
        <a className="text-black" href={social.instagram}>
          <AiOutlineInstagram className="w-4 h-4" />
        </a>
        <a className="text-black" href={social.discord}>
          <BsDiscord className="w-4 h-4" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
