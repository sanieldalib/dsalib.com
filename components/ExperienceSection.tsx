import DSLink from "./DSLink";

type ExperienceItemProps = {
  title: string;
  image: string;
  date: string;
  location: string;
  items?: string[];
  link?: string;
  company?: string;
  swap?: boolean;
};

type ExperienceItemComponent = React.FC<ExperienceItemProps>;

export const ExperienceItem: ExperienceItemComponent = (props) => {
  return (
    <div className="flex mb-6">
      <div className="flex-shrink-0 pt-2">
        <img className="w-12" src={props.image} />
      </div>
      <div className="pl-4 dark:text-green-500">
        {props.link && props.company ? (
          props.swap ? (
            <h2 className="text-lg font-semibold">
              <DSLink href={props.link}>{props.company}</DSLink>, {props.title}
            </h2>
          ) : (
            <h2 className="text-lg font-semibold">
              {props.title}, <DSLink href={props.link}>{props.company}</DSLink>
            </h2>
          )
        ) : (
          <h2 className="text-lg font-semibold">{props.title}</h2>
        )}

        <div className="text-md text-opacity-70 text-gray-500 dark:text-gray-200 mt-0.5 ml-1">
          {props.date} • {props.location}
        </div>
        <ul className="list-disc list-inside pt-1">
          {props.items &&
            props.items.map((item) => (
              <li className="text-sm text-gray-700 dark:text-gray-400" key={item}>
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

type ExperienceSectionProps = {
  title: string;
};

type ExperienceSectionComponent = React.FC<ExperienceSectionProps>;

export const ExperienceSection: ExperienceSectionComponent = (props) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-1 handwriting dark:text-green-600">{props.title}</h1>
      <hr className="font-bold border-t-4 border-green-900 mb-4 dark:border-green-900"></hr>
      {props.children}
    </div>
  );
};
