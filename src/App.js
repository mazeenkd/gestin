import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import {Overview } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import { Navbar, Sidebar } from './components';
import Infos from './pages/Infos';
import CPgeneral from './pages/CPgeneral';
import CPdivers from './pages/CPdivers';
import CPenseign from './pages/CPenseign';
import LoginPage from './pages/LoginPage';
import CPmodules from './pages/CPmodules';
function App() {

  return (
    <BrowserRouter>
    <div>
              <Routes>
                {/* dashboard  */}
                {/* <Route path="/" element={<LoginPage/>} /> */}
                <Route path="/" element={(<Overview/>)} />
                <Route path="/Infos" element={(<Infos/>)} />
                {/* <Route path="/modules" element={(<CPmodules/>)} /> */}
                <Route path="/enseignants" element={(<CPenseign/>)} />
                <Route path="/divers" element={(<CPdivers/>)} />
                <Route path="/general" element={(<CPgeneral/>)} />
                
              </Routes>
            </div>
    
    </BrowserRouter>
  );
}

export default App;
