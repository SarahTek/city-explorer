import React from "react";
import Card from 'react-bootstrap/Card';

class Movies extends React.Component {

  render() {
    return (
      <div className="">
        {
          this.props.movies && this.props.movies.map(value => (
      <Card >
        <Card.Img src={value.image_url}/>
        <Card.Body>
        <Card.Header>{value.title}</Card.Header>
        <Card.Text>{value.description}</Card.Text>
        <Card.Text>{value.average_votes}</Card.Text>
        <Card.Text>{value.total_votes}</Card.Text>
        <Card.Text>{value.popularity}</Card.Text>
        <Card.Text>{value.released_on}</Card.Text>
        </Card.Body>
      </Card>
          ))
        }
      </div>
    );
  }
}
export default Movies;
