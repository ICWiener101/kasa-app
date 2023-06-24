import React from 'react';
import appartmentList from '../../data/db';
import { useParams } from 'react-router-dom';
import Carousel from './../../components/Carousel/index';
import Info from './../../components/Info/index';
import '../../styles/details.scss';
import Error from './../Error/index';
import { useState, useEffect } from 'react';

function Details() {
      const { id } = useParams();
      const appartment = appartmentList.find((item) => item.id === id);
      if (!appartment) {
            return <Error />;
      }
      const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
            const timer = setTimeout(() => {
                  const fetchedData = appartmentList;

                  setIsLoading(false);
            }, 1500);

            return () => clearTimeout(timer);
      }, []);
      if (isLoading) {
            return <div className="details-loading">Loading...</div>;
      }
      return (
            <div className="details-wrapper">
                  <Carousel pictures={appartment.pictures} />
                  <Info
                        rating={appartment.rating}
                        title={appartment.title}
                        description={appartment.description}
                        hostName={appartment.host.name}
                        hostPicture={appartment.host.picture}
                        equipments={appartment.equipments}
                        location={appartment.location}
                        tags={appartment.tags}
                  />
            </div>
      );
}

export default Details;
