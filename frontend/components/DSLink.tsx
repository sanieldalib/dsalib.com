import Link from "next/link";

type DSLinkProps = {
  href: string;
  className?: string;
};

type DSLinkComponent = React.FC<DSLinkProps>;

const DSLink: DSLinkComponent = (props) => {
  const isLocalLink = !props.href.startsWith("http");
  return (
    <span
      className={`bg-gray-700 text-green-400 hover:text-green-300 hover:bg-gray-600 rounded-md px-1 ${props.className}`}
    >
      {isLocalLink ? (
        <Link href={props.href} passHref>
          <a>{props.children}</a>
        </Link>
      ) : (
        <a href={props.href} target="_blank">
          {props.children}
        </a>
      )}
    </span>
  );
};

export default DSLink;
