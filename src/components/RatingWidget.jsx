import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../RatingWidget.css';

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleClick = (value) => {
    setRating(value); // Set the selected rating
  };

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0); // Reset after submitting
    }
  };

  return (
    <div className="rating-widget">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= (hoveredRating || rating) ? 'star selected' : 'star'}
          onMouseEnter={() => setHoveredRating(star)}
          onMouseLeave={() => setHoveredRating(0)}
          onClick={() => handleClick(star)}
        >
          ☆
        </span>
      ))}
      <button onClick={handleSubmit}>Submit Rating</button>
    </div>
  );
};

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default RatingWidget;
