import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SituationSelectPage from './pages/FindPage/SituationSelectPage';
import NormalSituationPage from './pages/FindPage/Situation/NormalSituationPage';
import SpecificSituationPage from './pages/FindPage/Situation/SpecificSituationPage';
import ContentSelectPage from './pages/FindPage/ContentSelectPage';

function App() {
  return (
    <div className='root-wrap'>
      <BrowserRouter>
        <div id='wrapper'>
          {/* <Header /> */}
          <div id='main-content'>
            <Routes>
              <Route
                path='/find/select-page'
                element={<SituationSelectPage />}
              />
              <Route path='/find/normal' element={<NormalSituationPage />} />
              <Route
                path='/find/specific'
                element={<SpecificSituationPage />}
              />
              <Route
                path='/find/select-content'
                element={<ContentSelectPage />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
