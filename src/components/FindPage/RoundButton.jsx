import classnames from 'classnames';
import Typography from './Typography';

const RoundButton = ({
  title,
  onClick,
  value,
  isSelected,
  children,
  className,
}) => {
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
      <Typography.H3>{title}</Typography.H3>
      {children ? <Typography.Body2>{children}</Typography.Body2> : <></>}
    </button>
  );
};

export default RoundButton;
