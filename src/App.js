import React from 'react';
import './default.scss';
import Header from  './components/header';
import HomePage from './pages/homePage';
function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
    </div>
  );
}

export default App;
