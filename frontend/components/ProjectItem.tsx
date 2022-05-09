import Link from "next/link";
import DSLink from "./DSLink";

type ProjectItemProps = {
  name: string;
  img: string;
  date: string;
  blurb?: any[] | string;
  linkText: any[] | string;
  href: string;
  linkText2?: any[] | string;
  href2?: string;
  tech?: any[] | string;
};

const ProjectItem = (props: ProjectItemProps) => {
  return (
    <div className="mb-8" key={props.name}>
      <div className="flex flex-col md:flex-row border-4 border-green-600 rounded-xl text-left py-4 px-4 hover:shadow-md bg-gray-800 items-center">
        <div className="w-full md:w-5/12">
          <a href={props.href} target="_blank">
            <img
              className="border-4 border-green-600 rounded-md cursor-pointer"
              src={props.img}
            />
          </a>
        </div>
        <div className="mt-4 md:mt-0 md:ml-6 md:w-7/12">
          <Link href={props.href} passHref>
            <a>
              <h1 className="text-3xl font-bold text-green-500 hover:text-green-400 cursor-pointer">
                {props.name}
              </h1>
            </a>
          </Link>
          <div className="text-md text-gray-400 mb-2">{props.date}</div>
          <div className="text-xl text-gray-100 mb-2">{props.blurb}</div>
          {props.tech && (
            <div className="text-md text-gray-400">Tech: {props.tech}</div>
          )}
          <div className="mt-4 pb-2">
            <DSLink
              href={props.href}
              className="font-bold hover:bg-green-300 bg-gray-700 text-green-500 hover:text-green-800 rounded-md px-2 py-2 flex-grow-0 cursor-pointer"
            >
              <>{props.linkText} →</>
            </DSLink>
            {props.linkText2 && props.href2 && (
              <DSLink
                href={props.href2}
                className="ml-2 font-bold  hover:bg-green-300 bg-gray-700 text-green-500 hover:text-green-800 rounded-md px-2 py-2 flex-grow-0 cursor-pointer"
              >
                <>{props.linkText2} →</>
              </DSLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectItem;
