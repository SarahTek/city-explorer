import React from 'react';
import axios from 'axios';
import Map from './Map';
import Weather from './Weather';
import Button from 'react-bootstrap/Button';
import Movies from './Movies';



class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      allData: "",
      weather: [],
      error: '',
      movies: ''
    }
  }


  getLocation = async () => {

    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;
      console.log("Miami: ", url);
      const response = await axios.get(url);
      console.log("Response from Axios: ", response.data[0]);
      this.setState({ allData: response.data[0] }, this.callAll);
    } catch (error) {
      this.errorHandler(error);
    }

  };

  getWeather = async () => {
    try {

      const url = `${process.env.REACT_APP_SERVER}/weather?lat=${this.state.allData.lat}&lon=${this.state.allData.lon}`;

      const response = await axios.get(url);
      console.log(response);
      this.setState({
        weather: response.data
      });
    } catch (error) {
      this.errorHandler(error);
    };
  }

  getMovies = async () => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.allData.display_name}`;
      const response = await axios.get(url);
      this.setState({
        movies: response.data
      });
    } catch (error) {
      this.errorHandler(error);
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    this.getLocation();
  };


  callAll = () => {
    this.getWeather();
    this.getMovies();
  }

  errorHandler = (error) => {
    this.setState({ showError: `status code : ${error.response.status}` })
  }

  handleError = (error) => {
    console.log(error);
    this.setState({
      resError: "Something happen we can't fix the error",
      weather: [],
      allData: '',

    })
  };

  render() {

    console.log("this.state in App.js", this.state);
    return (
      <div className='Main'>
        <h1>Welcome to City Explorer!</h1>

        <input
          onChange={(event) => this.setState({ searchQuery: event.target.value })}
          placeholder="search for a city!"
        />
        <Button onClick={this.handleClick} type="submit" size="lg">Explore!</Button>
        {this.state.allData &&
          <h2>The city you searched for is {this.state.allData.display_name} , Long{this.state.allData.lon} ,  {this.state.allData.lat}</h2>
        }
        <Weather weather={this.state.weather} />
        <Movies movies={this.state.movies} />
        <Map allData={this.state.allData} />

      </div>
    );
  }
}


export default Main;
