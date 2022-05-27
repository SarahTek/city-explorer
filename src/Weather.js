
import React from "react";
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
render() {
    // console.log(this.props.weather);
    return (
      <div className="">
        {
          this.props.weather && this.props.weather.map(value => (
            <WeatherDay description={value.description} date={value.date}/>
          ))
        }
      </div>
    );
  }
}
export default Weather;
