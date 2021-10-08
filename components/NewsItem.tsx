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
      <div className="group border border-green-100 bg-green-100 bg-opacity-70 rounded-xl text-left p-2 hover:shadow-md hover:bg-opacity-100 cursor-pointer">
        <h3 className="font-medium text-xl">{props.title}</h3>
        <p className="font-light text-md mt-1"> {props.subtitle}</p>
        <p className="font-light text-sm mt-1 text-gray-600">{props.date}</p>
        <p className="no-underline mt-4 group-hover:underline text-blue-400">
          {props.linkText} →
        </p>
      </div>
    </Link>
  );
};

export default NewsItem;
