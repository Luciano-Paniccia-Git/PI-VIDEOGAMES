import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

//COMPONENTES
import Landing from './components/Landing/Landing';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Landing}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
