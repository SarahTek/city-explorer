
import React from "react";


class Weather extends React.Component {


  render() {
    console.log(this.props.weather);
    return (
      <div className="">
      <h3>{this.props.weather[0]}</h3>
      <h3>{this.props.weather[1]}</h3>
      <h3>{this.props.weather[2]}</h3>
      </div>
    );
  }
}
export default Weather;
