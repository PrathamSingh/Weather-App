import React from 'react';

class SearchBar extends React.Component {
  handleSubmit = (e) => {
    this.props.onSubmit(e.target[0].value,e.target[1].value);
    e.preventDefault();
  };

  render() {
    return(
      <div className="search">
        <form  onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country Code" />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default SearchBar;