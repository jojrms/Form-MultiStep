import React from 'react';
import {MultiStepForm} from './components/MultiStepForm';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<MultiStepForm/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
