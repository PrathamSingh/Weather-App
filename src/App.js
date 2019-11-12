import React from 'react';
import './index.css';

//Components
import LocationSearchBar from './components/LocationSearchBar.js';
import TempUnitButton from './components/TempUnitButton.js';
import WeatherTitle from './components/WeatherTitle.js';
import Clock from './components/Clock.js';
import Cloudiness from './components/Cloudiness.js';
import WeatherIcon from './components/WeatherIcon.js';
import Temperature from './components/Temperature.js';
import OtherWeatherData from './components/OtherWeatherData.js';
import WeatherData from './components/WeatherData.js';
//Components

class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      latitude: null,
      longitude: null,
      data: "",
      dayNight: "",
      city: "",
      isCelcius: Boolean(localStorage.getItem('tempUnit')) || false,
    };
  }

  setUnit = () => {
    if(this.state.isCelcius) {
      this.setState({
        isCelcius: false,
      });
      localStorage.setItem('tempUnit', '');
    } else {
      this.setState({
        isCelcius: true,
      });
      localStorage.setItem('tempUnit', '1');
    }
    
  }

  setCity = (city) => {
    this.setState({
      city: city,
    })
  }

  setLatLong = (latitude,longitude) => {
    this.setState({
      latitude: latitude,
      longitude: longitude,
    });
  };

  newData = (data) => {
    this.setState({
      data: data,
    })
  }

  day_Night = (time) => {
    this.setState({
      dayNight: time,
    })
  }

  render() {
    return(
      <div className="rootContainer">
        <WeatherData 
          setLatLong={this.setLatLong}
          newData={this.newData}
          data={this.state.data}
          latitude={this.state.latitude}
          longitude={this.state.longitude}
          setCity={this.setCity}
        />
        <TempUnitButton tempUnit={this.state.tempUnit} setUnit={this.setUnit} isCelcius={this.state.isCelcius}/>
        <LocationSearchBar setLatLong={this.setLatLong}  setCity={this.setCity}/>
        {(this.state.data.main)!==undefined || 
          <div className="lds-hourglass"></div>
        }
        {this.state.data.main &&
        <div className='Container'>
          <WeatherTitle city={this.state.city} country={this.state.country} data={this.state.data}/>
          <div className="info-section">
            <div className='leftBlock'>
              <Clock data={this.state.data} day_Night={this.day_Night}/>
              <WeatherIcon 
                data={this.state.data}
                dayNight={this.state.dayNight} 
              />
              <Temperature data={this.state.data} isCelcius={this.state.isCelcius}/>
              <Cloudiness 
                data={this.state.data}
              />
            </div>
          <div className="right-section">
            <OtherWeatherData data={this.state.data} />
          </div>
          </div>
        </div>
        }
      </div>
    );
  }
}

export default WeatherApp;