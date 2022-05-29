import React from "react";
import { Col, Card } from "react-bootstrap";
// import Movie from './Movie';

class Movie extends React.Component {
  render() {
    return (

              <Col key={this.props.idx} >
                <Card style={{ width: "18rem" }}>

                  <Card.Img veriant="top" src={this.props.movie.image_url} alt={this.props.movie.title} />
                  <Card.Body>
                    <Card.Text>Titile: {this.props.movie.title}</Card.Text>
                    <Card.Text>Description: {this.props.movie.description}</Card.Text>
                    <Card.Text>Released_on: {this.props.movie.released_on}</Card.Text>
                    <Card.Text> Total_votes: {this.props.movie.total_votes}</Card.Text>
                    <Card.Text>Average_votes: {this.props.movie.average_votes}</Card.Text>
                    <Card.Text>Popularity: {this.props.movie.popularity} </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
      
    );
  }
}


export default Movie;
