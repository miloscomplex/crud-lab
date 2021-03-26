import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    review: ''
  }

  handleOnChange(event) {
    this.setState({
      review: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addReview(this.state.review);
    this.setState({
      review: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.review}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>

      </div>
    );
  }
};

export default ReviewInput;
