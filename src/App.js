import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Tour from './components/Main.js/Tour';
import {BrowserRoute , Routes , Route} from 'react-router-dom';


function App() {
  return (<BrowserRoute>
    <Navbar/>
    <Routes>
    
     <Route path="/tour" element={<Tour/>}/>
     </Routes>
     
  </BrowserRoute>
   
    
  );
}

export default App;
