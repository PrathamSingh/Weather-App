import React from 'react';

class Cloudiness extends React.Component {
  render() {
    if(this.props.data.main) {
      let data = "";
      let arr = this.props.data.weather[0].description.split(" ");
      for (let i = 0; i < arr.length; i++) {
        data+=arr[i][0].toUpperCase() + arr[i].slice(1) + " ";
      }
      return(
        <div className="cloudiness">
          <p>{data}</p>
        </div>
      );
    } else return null;
  }
}

export default Cloudiness;