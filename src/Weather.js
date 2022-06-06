
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import WeatherDay from './WeatherDay';
class Weather extends React.Component {
  render() {
    return (
      <Accordion defaultActiveKey="0">
        {
          this.props.weatherArr.map((dayObj, idx) => (
            <WeatherDay  key={idx} dayObj={dayObj} />
          ))
        }
      </Accordion>
    );
  }
}
export default Weather;
