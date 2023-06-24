import '../../styles/card.scss';
import { Link } from 'react-router-dom';

function Card({ cover, title, id }) {
      return (
            <Link to={`/details/${id}`}>
                  <div className="card" key={id}>
                        <div className="cover-image">
                              <img src={cover} alt="" />
                        </div>
                        <h3>{title}</h3>
                  </div>
            </Link>
      );
}

export default Card;
