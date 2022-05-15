import React from 'react';
import axios from 'axios';
import Map from './Map'
import Weather from './Weather'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      allData: "",
      weather: []
    }
  }
  getLocation = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;
    console.log("Miami: ", url);
    const response = await axios.get(url);

    console.log("Response from Axios: ", response.data[0]);
    this.setState({ allData: response.data[0] })

  };


  getWeather = async () => {
    const url = `http://localhost:3001/weather?type=${this.state.searchQuery}`;

    const response = await axios.get(url);
    this.setState({
      weather: response.data.arr.map(banana => (`In this ${banana.date}  ${banana.description}`))
    })
  };


  handleClick = (event) => {
    event.preventDefault();
    this.getLocation();
    this.getWeather();
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
        <button onClick={this.handleClick} >Explore!</button>
        {this.state.allData &&
          <h2>The city you searched for is {this.state.allData.display_name} , Long{this.state.allData.lon} ,  {this.state.allData.lat}</h2>
        }
        <Weather weather = {this.state.weather}/>
        <Map allData={this.state.allData} />
      </div>
    );
  }
}


export default Main;
