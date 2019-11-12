import React from 'react';

class  WeatherTitle extends React.Component {
  render() {
    return (
      <div className="weatherTitle">
        {this.props.city && this.props.data.main &&
          <h1>{this.props.city}, {this.props.data.sys.country}</h1>
        }
        {!this.props.city && this.props.data.main &&
          <h1>{this.props.data.name}, {this.props.data.sys.country}</h1>
        }
      </div>
    );
  }
}

export default WeatherTitle;