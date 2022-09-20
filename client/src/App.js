import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

//COMPONENTES
import Landing from './components/Landing/Landing';
import Detail from './components/Detail/Detail';
import Home from './components/Home/Home'
import Create from './components/Create/Create'



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;
