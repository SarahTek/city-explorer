import React from 'react';
import './App.css';
import axios from 'axios';
 import Header from './Header';
 import Container from 'react-bootstrap/Container';
 import Alert from 'react-bootstrap/Alert';
 import Movies from './Movies';
 import Weather from './Weather';
 import SearchForm from './SearchForm'
import Location from './Location';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      locationObj: {},
      showError: false,
      errorMessage: "",
      weatherArr: [],
      moviesArr: [],

    }
  }

  handleChange = (event) => {
    let typedCity = event.target.value;
    this.setState({ city: typedCity })
    console.log(typedCity);
  }

  getLocation = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.city}&format=json`;
    console.log('URL: ', url);
    try {
      let response = await axios.get(url);
      console.log('Location Response: ', response.data[0]);
      this.setState({ locationObj: response.data[0] }, this.getWeatherAndMovies);
    } catch (error) {
      this.setState({
        showError: true,
        errorMessage: error.response.status + ': ' + error.response.data.error
      })
    }
  };

  getWeather = async () => {

    const url = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.city}`
    try {
      let response = await axios.get(url);
      console.log('Weather Response: ', response.data);
      this.setState({
        weatherArr: response.data
      });
    } catch (error) {
      this.setState({
        showError: true,
        errorMessage: error.response.status + ': ' + error.response.data.error
      })
    }
  };

  getMovies = async () => {

    const url = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.city}`
    try {
      let response = await axios.get(url);
      console.log('Movie Response: ', response.data);
      this.setState({
        moviesArr: response.data
      });
    } catch (error) {
      this.setState({
        showError: true,
        errorMessage: error.response.status + ': ' + error.response.data.error
      })
    }
  };

  handleSubmit = async (event) => {
    event.preventDefault();
   await  this.getLocation();
   await this.getWeather();
   await this.getMovies();
  }


  render() {
    return (
      <div className='Main'>
        <h1>Hello</h1>
        <Header />
        <SearchForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        {this.state.locationObj.display_name &&
          <Container className='container'>
            <Location locationObj={this.state.locationObj} />
            <Weather weatherArr={this.state.weatherArr} />
            <Movies moviesArr={this.state.moviesArr} />
          </Container>
        }

        {this.state.showError &&
          <Alert variant='danger'>{this.state.errorMessage}</Alert>
        }
      </div>
    );
  }
}


export default App;
