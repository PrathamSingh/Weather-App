import React from 'react';

class Temperature extends React.Component {
  render() {
    let temp, temp_min, temp_max;
    if(this.props.data.main) {
      let baseTemp = 1;
      let baseProd = 1;
      let unitChar = '\xB0F';

      if(this.props.isCelcius) {
        baseTemp =  273.15
        unitChar = '\xB0C';
      } else {
        baseTemp =  459.67
        baseProd = 1.8;
      }
      temp = String(((this.props.data.main.temp * baseProd) - baseTemp).toFixed(0)) + unitChar;
      temp_min = String(((this.props.data.main.temp_min * baseProd) - baseTemp).toFixed(0)) + unitChar;
      temp_max = String(((this.props.data.main.temp_max * baseProd) - baseTemp).toFixed(0)) + unitChar;

      return(
        <div className='temp'>
          <h1>{temp}</h1>
          {this.props.data.main.temp_max-this.props.data.main.temp_min>3 &&
          <h3>{temp_min} / {temp_max}</h3>
          }
        </div>
      );
    } else return null;
  }
}

export default Temperature;