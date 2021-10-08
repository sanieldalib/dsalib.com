type DSLinkProps = {
    href: string
}

type DSLinkComponent = React.FC<DSLinkProps>;

const DSLink: DSLinkComponent = (props) => {
    return (
        <span className="bg-green-50 hover:bg-green-100">
            <a href={props.href} target='_blank'>
                {props.children}
            </a>
        </span>
    )
}

export default DSLink;