import React from 'react';
import './GridContainer.css'; // 스타일링을 위한 CSS 파일을 import

const ContentGrid = () => {
  // 예제 데이터 배열
  const contentData = [
    { id: 1, title: 'Item 1', imageUrl: 'https://placekitten.com/300/200' },
    { id: 2, title: 'Item 2', imageUrl: 'https://placekitten.com/300/201' },
    { id: 3, title: 'Item 3', imageUrl: 'https://placekitten.com/300/202' },
    { id: 4, title: 'Item 4', imageUrl: 'https://placekitten.com/300/203' },
    { id: 5, title: 'Item 5', imageUrl: 'https://placekitten.com/300/204' },
    { id: 6, title: 'Item 6', imageUrl: 'https://placekitten.com/300/205' },
    { id: 7, title: 'Item 7', imageUrl: 'https://placekitten.com/300/206' },
    { id: 8, title: 'Item 8', imageUrl: 'https://placekitten.com/300/207' },
    { id: 9, title: 'Item 9', imageUrl: 'https://placekitten.com/300/208' },
  ];

  return (
    <div className="grid-container">
      {contentData.map((item) => (
        <div key={item.id} className="grid-item">
          <img src={item.imageUrl} alt={`Item ${item.id}`} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ContentGrid;