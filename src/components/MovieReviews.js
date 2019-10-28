// Code MovieReviews Here

import React from 'react';

const MovieReviews = ({reviews}) => {
  return (
    <div className="ui inverted segment review-list">
      <div className="ui inverted relaxed divided list">
        {reviews.map((review, id) => (
          <div className="item review" key={id}>
            <div className="content">
              <div className="header">{review.display_title}</div>
              {review.summary_short}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieReviews;
