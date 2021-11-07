import Link from "next/link";

type NewsItemProps = {
  title: string;
  href: string;
  subtitle: string;
  linkText: string;
  date: string;
};

type NewsItemComponent = React.FC<NewsItemProps>;

const NewsItem: NewsItemComponent = (props) => {
  return (
    <Link href={props.href}>
      <div className="group border-2 border-green-200 rounded-xl text-left py-4 px-4 hover:shadow-md dark:border-green-500 dark:bg-gray-800 hover:scale-102 duration-150 transform cursor-pointer">
        <h3 className="font-medium text-lg dark:text-gray-300">{props.title}</h3>
        <p className="font-light text-md mt-1 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: props.subtitle}}></p>
        <p className="font-light text-sm mt-1 text-gray-600 dark:text-gray-500">{props.date}</p>
        <p className="mt-4 font-bold group-hover:underline text-green-400 group-hover:text-green-600">
          {props.linkText} →
        </p>
      </div>
    </Link>
  );
};

export default NewsItem;
