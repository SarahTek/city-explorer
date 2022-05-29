
import React from 'react';
import Image from 'react-bootstrap/Image';

class Location extends React.Component {
    render() {
        return (
            <>
                <h2>here is the map for {this.props.locationObj.display_name} </h2>
                <p>Lat/Lon: {this.props.locationObj.lat},{this.props.locationObj.lon}</p>
                <Image className='map' roundedCircle src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.props.locationObj.lat},${this.props.locationObj.lon}&zoom=12`} alt={this.props.locationObj.display_name} />
            </>
        )
    }
}

export default Location;
