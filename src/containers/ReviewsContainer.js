import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';


class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} />
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({ type: 'ADD_REVIEW', payload: review }),
  deleteReview: id => dispatch({ type: 'DELETE_REVIEW', payload: id })
})

const mapStateToProps => ({ reviews }) => ({ reviews })

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
