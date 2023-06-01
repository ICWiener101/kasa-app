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
                        />
                  ))}
            </div>
      );
}

export default CardContainer;
