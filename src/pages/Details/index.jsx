import React from 'react';
import appartmentList from '../../data/db';
import { useParams } from 'react-router-dom';
import Carousel from './../../components/Carousel/index';

function Details() {
      const { id } = useParams();
      const appartment = appartmentList.find((item) => item.id === id);

      return (
            <div className="details-wrapper">
                  <Carousel pictures={appartment.pictures} />
                  <div className="image-carousel">{appartment.title}</div>
            </div>
      );
}

export default Details;
