import { FaLinkedinIn, FaGithub, FaStrava, FaInstagram } from "react-icons/fa";

type SocialsProps = {
    center?: boolean
}

export const Socials:React.FC<SocialsProps> = (props) => {
  return (
    <div className={`space-x-1 flex flex-row ${props.center && 'justify-center'}`}>
      <a href="https://github.com/sanieldalib" target="_blank">
        <div className="text-gray-700 hover:bg-gray-100 hover:text-gray-600 px-1 py-1 rounded-md text-md font-medium cursor-pointer">
          <FaGithub />
        </div>
      </a>
      <a href="https://linkedin.com/in/dsalib" target="_blank">
        <div className="text-gray-700 hover:bg-gray-100 hover:text-gray-600 px-1 py-1 rounded-md text-md font-medium cursor-pointer">
          <FaLinkedinIn />
        </div>
      </a>
      <a href="https://www.strava.com/athletes/3343611" target="_blank">
        <div className="text-gray-700 hover:bg-gray-100 hover:text-gray-600 px-1 py-1 rounded-md text-md font-medium cursor-pointer">
          <FaStrava />
        </div>
      </a>
      <a href="https://instagram.com/sanieldalib" target="_blank">
        <div className="text-gray-700 hover:bg-gray-100 hover:text-gray-600 px-1 py-1 rounded-md text-md font-medium cursor-pointer">
          <FaInstagram />
        </div>
      </a>
    </div>
  );
};
