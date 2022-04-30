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
      className={`bg-green-50 hover:bg-green-200  dark:bg-gray-700 dark:text-green-500 dark:hover:text-green-800 rounded-md px-1 ${props.className}`}
    >
      {isLocalLink ? (
        <Link href={props.href}>{props.children}</Link>
      ) : (
        <a href={props.href} target="_blank">
          {props.children}
        </a>
      )}
    </span>
  );
};

export default DSLink;
