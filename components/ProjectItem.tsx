import Link from "next/link";

type ProjectItemProps = {
  title: string;
  href: string;
  subtitle: string;
  linkText: string;
  date: string;
};

type ProjectItem = React.FC<ProjectItemProps>;

const ProjectItem: ProjectItem = (props) => {
  return (
    <Link href={props.href}>
      <div className="group border-2 border-green-200 rounded-xl text-left py-4 px-4 hover:shadow-md dark:border-green-500 dark:bg-gray-800 hover:scale-102 duration-150 transform cursor-pointer">
        <h3 className="font-medium text-lg dark:text-gray-300">{props.title}</h3>
        <p className="font-light text-md mt-1 dark:text-gray-400">{props.subtitle}</p>
        <p className="font-light text-sm mt-1 text-gray-600 dark:text-gray-500">{props.date}</p>
        <div className='mt-4'>
        <span className="font-bold bg-green-50 group-hover:bg-green-100  dark:bg-gray-700 dark:text-green-500 dark:group-hover:text-green-800 rounded-md px-1 py-px flex-grow-0">
          {props.linkText} →
        </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
