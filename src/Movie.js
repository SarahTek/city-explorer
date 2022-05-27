import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


class Movie extends React.Component {
  render() {
    return (
      <Container>
        <Card >
          <Card.Img src={this.props.image_url} />
          <Card.Body>
            <Card.Header>{this.props.title}</Card.Header>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>{this.props.average_votes}</Card.Text>
            <Card.Text>{this.props.total_votes}</Card.Text>
            <Card.Text>{this.props.popularity}</Card.Text>
            <Card.Text>{this.props.released_on}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );

  }

}



export default Movie;
