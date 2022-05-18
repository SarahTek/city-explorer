import React from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Main/> 
        <Footer/>
       
      </div >
    );
  }
}
export default App;
