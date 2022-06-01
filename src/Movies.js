import React from "react";
import Row from "react-bootstrap/Row";
import Movie from './Movie';

class Movies extends React.Component {
  render() {
    return (
      <div className="">
        <h3>Movies</h3>
        <Row sm={2} md={3} lg={4} >
          {
            this.props.moviesArr.map((movie, idx) => (
              <Movie movie={movie} idx={idx} />
            ))}
        </Row>
      </div>
    )
  }
}
export default Movies;
