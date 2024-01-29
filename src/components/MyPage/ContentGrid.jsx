import React from 'react';
import './GridContainer.css'; // 스타일링을 위한 CSS 파일을 import

const ContentGrid = () => {
  // 예제 데이터 배열
  const contentData = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
    { id: 4, title: 'Item 4' },
    { id: 5, title: 'Item 5' },
    { id: 6, title: 'Item 6' },
    { id: 7, title: 'Item 7' },
    { id: 8, title: 'Item 8' },
    { id: 9, title: 'Item 9' },
  ];

  return (
    <div className="grid-container">
      {contentData.map((item) => (
        <div key={item.id} className="grid-item">
          {item.imageUrl ? ( 
            <img src={item.imageUrl} alt={`Item ${item.id}`} />
          ) : (
            <div className="no-image" />
          )}
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ContentGrid;