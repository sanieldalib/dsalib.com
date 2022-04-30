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
      <div className="flex flex-col md:flex-row border-4 border-green-600 rounded-xl text-left py-4 px-4 hover:shadow-md dark:border-green-600 dark:bg-gray-800 bg-gray-100 items-center">
        <div className="w-full md:w-5/12">
          <a href={props.href} target="_blank">
            <img
              className="border-4 dark:border-green-500 border-green-600 rounded-md cursor-pointer"
              src={props.img}
            />
          </a>
        </div>
        <div className="mt-4 md:mt-0 md:ml-6 md:w-7/12">
          <Link href={props.href}>
            <h1 className="text-3xl font-semibold handwriting text-green-600 hover:text-green-700 mb-2 cursor-pointer">
              {props.name}
            </h1>
          </Link>
          <div className="text-lg text-gray-600 dark:text-gray-400 mb-2">
            {props.date}
          </div>
          <div className="text-xl dark:text-gray-100 text-gray-800 mb-2">
            {props.blurb}
          </div>
          {props.tech && (
            <div className="text-lg text-gray-600 dark:text-gray-400">
              Tech: {props.tech}
            </div>
          )}
          <div className="mt-4 pb-2">
            <DSLink
              href={props.href}
              className="font-bold bg-green-200 hover:bg-green-300  dark:bg-gray-700 text-green-700 hover:text-green-900 dark:text-green-500 dark:hover:text-green-800 rounded-md px-2 py-2 flex-grow-0 cursor-pointer"
            >
              <>{props.linkText} →</>
            </DSLink>
            {props.linkText2 && props.href2 && (
              <DSLink
                href={props.href2}
                className="ml-2 font-bold bg-green-200 hover:bg-green-300  dark:bg-gray-700 text-green-700 hover:text-green-900 dark:text-green-500 dark:hover:text-green-800 rounded-md px-2 py-2 flex-grow-0 cursor-pointer"
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
