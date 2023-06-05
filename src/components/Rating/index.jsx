import React from 'react';
import '../../styles/rating.scss';
import { useParams } from 'react-router-dom';

function Rating({ rating }) {
      const renderStars = () => {
            const stars = [];
            for (let i = 0; i < 5; i++) {
                  const starClass = rating > i ? 'filled' : '';
                  stars.push(
                        <span key={i} className={`star ${starClass}`}>
                              &#9733;
                        </span>
                  );
            }
            return stars;
      };
      return <div className="rating">{renderStars()}</div>;
}

export default Rating;
