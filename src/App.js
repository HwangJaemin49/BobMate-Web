import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SituationPage from './pages/FindPage/SituationPage';

function App() {
  return (
    <div className='root-wrap'>
      <BrowserRouter>
        <div id='wrapper'>
          <Header />
          <div id='main-content'>
            <Routes>
              <Route
                path='/find-page'
                element={<SituationPage></SituationPage>}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
