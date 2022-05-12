import React from 'react';
import axios from 'axios';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      cityName: "",
      long: "",
      lati: ""
    }
  }
  getLocation = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;
    console.log("Miami: ", url);
    const response = await axios.get(url);

    console.log("Response from Axios: ", response.data[0]);
    this.setState({
      cityName: response.data[0].display_name,
      long: response.data[0].lon,
      lati: response.data[0].lat,
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
        <button onClick={this.getLocation}>Explore!</button>
      </div>
    );
  }
}


export default Main;
