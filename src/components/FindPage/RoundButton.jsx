import classnames from 'classnames';

const RoundButton = ({ onClick, value, isSelected, children, className }) => {
  return (
    <button
      className={classnames(
        'rounded-full bg-white flex flex-col items-center justify-center text-center   border-grayscale-800 border-2 ',
        'hover:scale-105  transition-transform ease-in-out duration-200 ',
        { 'scale-105': isSelected },
        className
      )}
      value={value}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RoundButton;
