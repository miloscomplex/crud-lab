import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux'
import

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput />
        <Restaurants />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addRestaurant: text => dispatch({ type: 'ADD_RESTAURANT', payload: text }),
  deleteRestaurant: id => dispatch({ type: 'DELETE_RESTAURANT', payload: id })
})

const mapStateToProps => ({ restaurants }) => ({ restaurants })

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
