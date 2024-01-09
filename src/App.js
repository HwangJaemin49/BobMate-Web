import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FindMatePage from './pages/FindPage/FindMatePage';
import FindResultPage from './pages/FindPage/FindResultPage';

function App() {
  return (
    <div className='root-wrap'>
      <BrowserRouter>
        <div id='wrapper'>
          <Header />
          <div id='main-content'>
            <Routes>
              <Route path='/find' element={<FindMatePage />} />
              <Route path='/find-result' element={<FindResultPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
