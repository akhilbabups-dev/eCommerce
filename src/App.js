import React from 'react';
import './default.scss';
import Header from  './components/header';
import HomePage from './pages/homepage/index';
import Registration from './pages/Registration';
import {Route} from 'react-router-dom';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        <switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/registration" component={Registration}/>
          </switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
