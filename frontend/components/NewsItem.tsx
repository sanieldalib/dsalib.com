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
    <Link href={props.href} passHref>
      <a>
        <div className="group border-2  rounded-xl text-left py-4 px-4 hover:shadow-md border-green-500 bg-gray-800  hover:scale-102 duration-150 transform cursor-pointer">
          <h3 className="font-medium text-lg text-gray-300">{props.title}</h3>
          <p
            className="font-light text-md mt-1 text-gray-400"
            dangerouslySetInnerHTML={{ __html: props.subtitle }}
          ></p>
          <p className="font-light text-sm mt-1 text-gray-500">{props.date}</p>
          <div className="mt-4">
            <span className="font-bold bg-gray-700 text-green-500 group-hover:text-green-800 rounded-md px-1 py-px flex-grow-0">
              {props.linkText} →
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default NewsItem;
