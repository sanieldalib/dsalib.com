type DefaultButtonProps = {
  className?: string;
};

type DefaultButton = React.FC<DefaultButtonProps>;

export const DefaultButton: DefaultButton = (props) => {
  return (
    <div
      className={`${props.className} font-medium py-2 px-4 rounded-md bg-green-500 hover:bg-green-400 transform duration-150 hover:shadow-md flex-grow text-center cursor-pointer`}
    >
      {props.children}
    </div>
  );
};
