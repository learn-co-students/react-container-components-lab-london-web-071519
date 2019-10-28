import React, {Component} from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;
const searchURL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  state = {reviews: [], searchTerm: ''};
  handleSubmit = (e) => {
    e.preventDefault();
    fetch(URL + this.state.searchTerm)
      .then((resp) => resp.json())
      .then((resp) => this.setState({reviews: resp.results}));
  };
  handleChange = (e) => {
    e.persist();
    this.setState({searchTerm: e.target.value});
  };
  render() {
    return (
      <div className="searchContainer">
        <div className="ui large header">Search for Reviews</div>
        <form className="ui action input" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <button className="ui icon button" onClick={this.handleSubmit}>
            <i className="search icon" />
          </button>
        </form>
        {this.state.reviews.length > 0 && (
          <MovieReviews reviews={this.state.reviews} />
        )}
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
