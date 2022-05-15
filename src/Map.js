import React from "react";



class Map extends React.Component {


  render() {
    return (
      <div className="">
        <img alt= 'map' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.props.allData.lat},${this.props.allData.lon}&zoom=18&size=<width>x<height>&format=<format>&maptype=<MapType>&markers=icon:<icon>`} />
      </div>
    );
  }
}
export default Map;
