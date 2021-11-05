import { FaLinkedinIn, FaGithub, FaStrava, FaInstagram } from "react-icons/fa";

type SocialsProps = {
    center?: boolean
}


export const Socials:React.FC<SocialsProps> = (props) => {
  return (
    <div className={`space-x-1 flex flex-row ${props.center && 'justify-center'}`}>
      <a href="https://github.com/sanieldalib" target="_blank">
        <div className="hover:bg-gray-100 text-green-800 hover:text-green-900 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-green-700 px-1 py-1 rounded-md text-md font-medium cursor-pointer">
          <FaGithub />
        </div>
      </a>
      <a href="https://linkedin.com/in/dsalib" target="_blank">
        <div className="hover:bg-gray-100 text-green-800 hover:text-green-900 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-green-700 px-1 py-1 rounded-md text-md font-medium cursor-pointer">
          <FaLinkedinIn />
        </div>
      </a>
      <a href="https://www.strava.com/athletes/3343611" target="_blank">
        <div className="hover:bg-gray-100 text-green-800 hover:text-green-900 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-green-700 px-1 py-1 rounded-md text-md font-medium cursor-pointer">
          <FaStrava />
        </div>
      </a>
      <a href="https://instagram.com/sanieldalib" target="_blank">
        <div className="hover:bg-gray-100 text-green-800 hover:text-green-900 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-green-700 px-1 py-1 rounded-md text-md font-medium cursor-pointer">
          <FaInstagram />
        </div>
      </a>
    </div>
  );
};
