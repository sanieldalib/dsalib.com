import DSLink from "./DSLink";

type ExperienceItemProps = {
  title: any[];
  image: string;
  date: string;
  location: string;
  items?: any[];
};

type ExperienceItemComponent = React.FC<ExperienceItemProps>;

export const ExperienceItem: ExperienceItemComponent = (props) => {
  return (
    <div className="flex mb-6">
      <div className="flex-shrink-0 pt-2">
        <img className="w-12" src={props.image} />
      </div>
      <div className="pl-4 dark:text-green-500">
        <h2 className="text-xl font-semibold">{props.title}</h2>

        <div className="text-lg text-gray-500 dark:text-gray-400 mt-0.5 ml-1">
          {props.date} • {props.location}
        </div>
        <ul className="list-disc list-inside pt-1">
          {props.items &&
            props.items.map((item, idx) => (
              <li
                className="text-lg text-gray-700 dark:text-gray-300"
                key={idx}
              >
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
      <h1 className="text-3xl font-semibold mb-1 handwriting dark:text-green-600">
        {props.title}
      </h1>
      <hr className="font-bold border-t-4 border-green-900 mb-4 dark:border-green-900"></hr>
      {props.children}
    </div>
  );
};
