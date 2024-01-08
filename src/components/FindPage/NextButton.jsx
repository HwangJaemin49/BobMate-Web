import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

const NextButton = ({ children, link }) => {
  return (
    <Link
      to={link}
      className={classNames(
        'mx-2 py-1 px-3 border-2 border-slate-950 rounded-md',
        'hover:scale-105 transition-transform ease-in-out duration-500'
      )}
    >
      {children}
    </Link>
  );
};

export default NextButton;
