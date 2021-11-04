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
      <div className="pl-4">
        {props.link && props.company ? (
          props.swap ? (
            <h2 className="text-lg font-medium">
              <DSLink href={props.link}>{props.company}</DSLink>, {props.title}
            </h2>
          ) : (
            <h2 className="text-lg font-medium">
              {props.title}, <DSLink href={props.link}>{props.company}</DSLink>
            </h2>
          )
        ) : (
          <h2 className="text-lg font-medium">{props.title}</h2>
        )}

        <div className="text-sm text-opacity-70 text-gray-500 mt-0.5">
          {props.date} • {props.location}
        </div>
        <ul className="list-disc list-inside pt-1">
          {props.items &&
            props.items.map((item) => (
              <li className="text-md text-gray-700" key={item}>
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
      <h1 className="text-2xl font-semibold mb-1 handwriting">{props.title}</h1>
      <hr className="font-bold border-t-4 border-green-900 mb-4"></hr>
      {props.children}
    </div>
  );
};
