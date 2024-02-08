import React, { useEffect } from 'react';
import scrollUp from '../../utils/scrollUp';

const ResultPageWrapper = ({ children }) => {
  useEffect(() => {
    scrollUp();
  }, []);
  return <>{children}</>;
};

export default ResultPageWrapper;
