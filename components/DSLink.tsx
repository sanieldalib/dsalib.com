type DSLinkProps = {
    href: string
}

type DSLinkComponent = React.FC<DSLinkProps>;

const DSLink: DSLinkComponent = (props) => {
    return (
        <span className="bg-green-50 hover:bg-green-100  dark:bg-gray-800 dark:text-green-500 dark:hover:text-green-800 rounded-md px-1 py-px">
            <a href={props.href} target='_blank'>
                {props.children}
            </a>
        </span>
    )
}

export default DSLink;