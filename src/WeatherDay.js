import React from "react";
import Accordion from "react-bootstrap/Accordion";


class WeatherDay extends React.Component {
  render() {
    return (
      <Accordion.Item eventKey={this.props.idx} key={this.props.idx}>
        <Accordion.Header>Date: {this.props.dayObj.day}</Accordion.Header>
        <Accordion.Body>Forcast Description: {this.props.dayObj.description}</Accordion.Body>
      </Accordion.Item>

    )
  }

}
export default WeatherDay;
