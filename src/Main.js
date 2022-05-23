import React from 'react';
import axios from 'axios';
import Map from './Map'
import Weather from './Weather'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import './index.css'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      allData: "",
      weather: [],
      resError: "",
      showMap: false,
      showInfo: false,
    }
  }
  getLocation = async (event) => {
    event.preventDefault();
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;
      console.log("Miami: ", url);
      const response = await axios.get(url);
      console.log("Response from Axios: ", response.data[0]);
      this.setState({ allData: response.data[0], showInfo: true, showMap: true })
    } catch (error) {
      this.handleError(error)
    }
    this.getWeather();
  };

  getWeather = async () => {
    try {
      const url = `http://localhost:3001/weather?type=${this.state.searchQuery}`;
      console.log(url);
      const response = await axios.get(url);
      console.log(response);
      this.setState({
        weather: response.data.arr.map(banana => (`In this ${banana.date}  ${banana.description}`))
      })
    } catch (error) {
      console.log(typeof error);
      this.handleError(error);
    };
  }

  getMovie = async () => {
    try {
      const url = ${process.env.};

    }catch(error){
      console.log(error)
      this.handleError(error)
    };
  }

  handleError = (error) => {
    console.log(error);
    this.setState({
      resError: "Something happen we can't fix the error",
      //  Code ${error.response.status}, ${error.response.data.error}`,
      weather: [],
      allData: '',

    })
  }


  render() {
    console.log("this.state in App.js", this.state);
    return (
      <div className='Main'>
        <h1>Welcome to City Explorer!</h1>

        <Form onSubmit={this.getLocation}>
          <Form.Group className="value" controlId="name">
            <Form.Label>Search</Form.Label>
            <Form.Control
              onChange={(event) => this.setState({ searchQuery: event.target.value })}
              placeholder="search for a city!"
            />
          </Form.Group>
          <Button type='submit' >Explore </Button>
        </Form>
        <>
          <Weather weather={this.state.weather} />
          {this.state.showMap &&

            <Map allData={this.state.allData} />
          }
          {this.state.showInfo &&
            <div>
              <h2>The city you searched for is {this.state.allData.display_name}  </h2>
              <h2>The Longitude for the sity you searched is: {this.state.allData.lon}</h2>
              <h2>The Latitude for the sity you searched is: {this.state.allData.lat}</h2>

            </div>
          }
        </>
        <h3>{this.state.resError}</h3>
      </div>
    );
  }
}


export default Main;
