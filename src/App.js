import React from 'react';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import './index.css';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
export default App;
