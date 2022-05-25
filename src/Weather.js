
import React from "react";


class Weather extends React.Component {


  render() {
    console.log(this.props.weather);
    return (
      <div className="">
      {
        this.props.weather && this.props.weather.map(value => (
          <h3>{value.description} {value.date}</h3>
        ))
      }
      </div>
    );
  }
}
export default Weather;
