import { combineReducers } from 'redux'
import cuid from 'cuid';

let defaultState = {
  restaurants: [],
  reviews: []
}

const rootReducer = combineReducers({
  restaurants: manageRestaurants,
  reviews: manageReviews
})

export default rootReducer

function manageRestaurants(state = defaultState, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':

      const restaurant = {
        id: cuid(),
        text: action.payload
      }

      return { ...state, restaurants: [...state.restaurants, restaurant] }

    case 'DELETE_RESTAURANT':

      return { restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.payload )}

    default:
      return state
  }
}

function reviewManager(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_REVIEW':

      const review = {
        id: cuid(),
        restaurantId: action.payload.restaurantId,
        text: action.payload.text
      }

      return { ...state, reviews: [...state.reviews, review] }

    case 'DELETE_REVIEW':

      return { reviews: state.reviews.filter(review => review.id !== action.payload )}

    default:
      return state 

  }
}
