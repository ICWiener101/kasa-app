import Card from './../Card/index';
import '../../styles/cardContainer.scss';
import appartmentList from '../../data/db';
import { useState, useEffect } from 'react';

function CardContainer() {
      const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
            const timer = setTimeout(() => {
                  const fetchedData = appartmentList;

                  setIsLoading(false);
            }, 1000);

            return () => clearTimeout(timer);
      }, []);
      if (isLoading) {
            return <div className="container-loading">Loading...</div>;
      }
      return (
            <div className="card-container">
                  {appartmentList.map((appartment) => (
                        <Card
                              key={appartment.id}
                              title={appartment.title}
                              cover={appartment.cover}
                              id={appartment.id}
                        />
                  ))}
            </div>
      );
}

export default CardContainer;
