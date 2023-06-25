import React from 'react';
import '../../styles/rating.scss';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Rating({ rating }) {
      const renderStars = () => {
            const stars = [];
            for (let i = 0; i <= 4; i++) {
                  const starClass = rating > i ? 'filled' : '';
                  stars.push(
                        <span key={i} className={`star ${starClass}`}>
                              <FontAwesomeIcon icon={faStar} />
                        </span>
                  );
            }
            return stars;
      };
      return <div className="rating">{renderStars()}</div>;
}

export default Rating;
