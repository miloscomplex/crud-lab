import { combineReducers } from 'redux'
import cuid from 'cuid';

const rootReducer = combineReducers({
  restaurants: manageRestaurants,
  reviews: manageReviews
})

export default rootReducer

function manageRestaurants(state = [], action) {
  let idx

  switch (action.type) {

    case 'ADD_RESTAURANT':

      const newRestaurant = {
        id: cuid(),
        text: action.payload
      }

      return [ ...state, newRestaurant]

    case 'DELETE_RESTAURANT':
      // debugger
      //return  [ state, state.filter(restaurant => restaurant.id !== action.payload) ]
      idx = state.findIndex(rest => rest.id  === action.payload)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]

    default:
      return state
  }
}

function manageReviews(state = [], action) {
  let idx
  switch (action.type) {

    case 'ADD_REVIEW':

      const newReview = {
        id: cuid(),
        restaurantId: action.review.restaurantId,
        text: action.review.text
      }

      return [ ...state, newReview ]

    case 'DELETE_REVIEW':
      //return { reviews: state.reviews.filter(review => review.id !== action.payload )}
      idx = state.findIndex(review => review.id  === action.payload)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]

    default:
      return state

  }
}
