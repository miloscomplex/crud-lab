import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    restaurantName: ''
  }

  handleOnChange(event) {
    this.setState({
      restaurantName: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()
    this.props.addRestaurant(this.state.restaurantName)
    this.setState({
      restaurantName: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={ (event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.restaurantName}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
