import React from "react";



class Map extends React.Component {


  render() {
    return (
      <div className="">
        <img alt= 'map' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.map}&format=json`} />
      </div>
    );
  }
}
export default Map;
