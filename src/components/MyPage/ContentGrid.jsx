import {React} from 'react';
import './GridContainer.css'; // 스타일링을 위한 CSS 파일을 import

const ContentGrid = ({inputDataList, keyName}) => {
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
          <h4 style={{ fontSize: '20px' }}>{item.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default ContentGrid;