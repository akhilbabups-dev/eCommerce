import React from 'react';
import './default.scss';
import Header from  './components/header';
import HomePage from './pages/homepage/homePage';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        <HomePage/>
      </div>
      
    </div>
  );
}

export default App;
