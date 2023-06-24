import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import appartmentList from '../../data/db';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
      faChevronRight,
      faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import '../../styles/carousel.scss';

function Carousel({ pictures }) {
      const [currentSlide, setCurrentSlide] = useState(0);
      const nextSlide = () => {
            setCurrentSlide((prevSlide) =>
                  prevSlide === pictures.length - 1 ? 0 : prevSlide + 1
            );
      };
      const prevSlide = () => {
            setCurrentSlide((prevSlide) =>
                  prevSlide === 0 ? pictures.length - 1 : prevSlide - 1
            );
      };
      return (
            <div className="carousel">
                  <img
                        src={pictures[currentSlide]}
                        alt={`Image ${currentSlide + 1}`}
                        key={currentSlide + 1}
                  />
                  <button className="btn-previous" onClick={prevSlide}>
                        {' '}
                        <FontAwesomeIcon
                              className="chevron-left"
                              icon={faChevronLeft}
                        />
                  </button>
                  <button className="btn-next" onClick={nextSlide}>
                        {' '}
                        <FontAwesomeIcon
                              className="chevron-right"
                              icon={faChevronRight}
                        />
                  </button>
            </div>
      );
}

export default Carousel;
