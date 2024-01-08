import classNames from 'classnames';

const MaxWidthWrapper = ({ className, children }) => {
  return (
    <div className={classNames('mx-auto w-full', className)}>{children}</div>
  );
};

export default MaxWidthWrapper;
