import React from "react";


class movies extends React.Component {


  render() {
    console.log(this.props.weather);
    return (
      <div className="">
      <h3>{this.props.title[0]}</h3>
      <h3>{this.props.description[1]}</h3>
      <h3>{this.props.average_votes[2]}</h3>
      </div>
    );
  }
}
export default movies;
