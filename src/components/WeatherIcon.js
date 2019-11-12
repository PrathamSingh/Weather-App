import React from 'react';
import IconId from './icon.js';

class WeatherIcon extends React.Component {
  render() {
      if(this.props.data.main && this.props.dayNight) {
          const id = IconId[this.props.data.weather[0].id];
          const dayNight = this.props.dayNight;
          const url = "http://openweathermap.org/img/wn/" + id + dayNight + "@2x.png";
          return(
              <div className='icon'>
                  <img src={url} alt={this.props.data.weather[0].id}/>
              </div>
          );
      } else return null;
  }
}

export default WeatherIcon;