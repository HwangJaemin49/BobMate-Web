import React from 'react';

const FindResultScreen = ({ results }) => {
  return (
    <div>
      {results.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
};

export default FindResultScreen;
