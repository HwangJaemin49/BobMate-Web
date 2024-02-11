import React from 'react';
import './GridContainer.css';

const ContentGrid = ({ inputDataList, keyName }) => {
  return (
    <div className="grid-container">
      {inputDataList.map((item) => (
        <div key={item[keyName]} className="grid-item">
          {item.imgUrl ? (
            <a href={item.linkUrl}>
              <img src={item.imgUrl} alt={`Item ${item[keyName]}`} />
            </a>
          ) : (
            <div className="no-image" />
          )}
          <div style={{fontSize: '20px', marginTop: '5px'}}>{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ContentGrid;