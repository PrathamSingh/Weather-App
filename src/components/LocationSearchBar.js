import React from 'react';
import { LocationSearchAPI } from '../APIKeys.js';

class LocationSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : null,
      queryText: "",
      showList: false,
    };
  }

  handleChange = (e) => {
    if(e.target.value.length>0) {
      this.setState({
        queryText: e.target.value,
        showList: true,
      });
      this.fetchDataByText(e.target.value);
    } else {
      this.setState({
        data: null,
        queryText: "",
      });
    }
  };

  toggleDropdown = (showList) => {
    this.setState({showList});
  }

  handleClick = (featureIndex) => {
    let features = this.state.data.features[featureIndex];
    let longitude = features.geometry.coordinates[0];
    let latitude = features.geometry.coordinates[1];
    this.props.setLatLong(latitude,longitude);
    this.setState({queryText: features.text});
    this.toggleDropdown(false);
    this.props.setCity(features.text);
  }

  handleBlur = () => {
    setTimeout(() => {
      this.toggleDropdown(false);
    },100)
  }

  fetchDataByText = (queryText) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+queryText+'.json?access_token=' + LocationSearchAPI;
    fetch(url)
    .then(results => results.json())
    .then((sdata) => {
      this.setState({
        data : sdata,
      });
    });
  }

  render() {
    return (
      <div className="locationSearchBar">
        <div className="location-search-container">
        <input type="text" onChange={this.handleChange} value={this.state.queryText} onBlur={this.handleBlur} 
          placeholder="Search for location"
        />
        {this.state.showList &&
        <ul className="searchList">
          {/* {options} */}
          {this.state.data && this.state.data.features && this.state.data.features.length > 0 &&
            this.state.data.features.map((data, index) => {
              return (
                <li  key={index}
                    className="options"
                    onClick={() => {
                      this.handleClick(index)
                      }}
                  >
                  {data["place_name"]}
                </li>
              )
            })
          }
        </ul>
        }
        </div>
      </div>
    );
  }
}



export default LocationSearchBar;