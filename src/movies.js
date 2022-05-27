import React from "react";
import Movie from './Movie';

class Movies extends React.Component {
render() {
    return (
      <div className="">
        {
          this.props.movies && this.props.movies.map(movie => (

            <Movie image_url = {movie.image_url}
            titile={movie.title}
            description = {movie.description}
            released_on = {movie.released_on}
            total_votes = {movie.total_votes}
            average_votes = {movie.average_votes}
            popularity = {movie.popularity}/>

          ))
        
        }
      </div>
    );
  }
}
export default Movies;
