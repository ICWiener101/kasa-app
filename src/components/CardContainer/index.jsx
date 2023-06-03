import Card from './../Card/index';
import '../../styles/cardContainer.scss';
import appartmentList from '../../data/db';

function CardContainer() {
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
