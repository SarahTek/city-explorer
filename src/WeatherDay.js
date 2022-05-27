import React from "react";
import { Card, Container } from "react-bootstrap";
// import weatherDay from './weatherDay';


class WeatherDay extends React.Component {

  render() {
    return (
      <Container>
        <Card.Title>this.props.date</Card.Title>
        <Card.Text>{this.props.description}</Card.Text>
      </Container>
    )
  }

}
export default WeatherDay;
