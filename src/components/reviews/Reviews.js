import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = filtered => filtered.map( review => <Review review={review} key={review.id} delete={this.props.deleteReview} /> )

  render() {
    const { reviews } = this.props

    const filtered = reviews.filter( review => this.props.restaurantId === review.restaurantId )

    return (
      <ul>
        { this.renderReviews(filtered) }
      </ul>
    );
  }
};

export default Reviews;
