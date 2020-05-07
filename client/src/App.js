import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import MainComponent from './containers/MainComponent/MainComponent';

function App() {
  return (
    <BrowserRouter className="App">
        <MainComponent />
    </BrowserRouter>
  );
}

export default App;
