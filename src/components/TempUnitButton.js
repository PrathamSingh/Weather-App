import React from 'react';

class TempUnitButton extends React.Component {
  handleChange = () => {
    this.props.setUnit();
  }
  
  render() {
    return (
      <div className="unitConverter">
        <p className="tempUnit">&#8451;</p>
        <div className="switchContainer">
          <label>
            <input type="checkbox" checked={!this.props.isCelcius} onChange={this.handleChange} className="switch" />
            <div className="slider">
              <div className="circle"></div>
            </div>
          </label>
        </div>
        <p className="tempUnit">&#8457;</p>
      </div>
    );
  }
}

export default TempUnitButton;