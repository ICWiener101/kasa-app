import PropTypes from 'prop-types';
import '../../styles/card.scss';

function Card({ cover, title, id }) {
      return (
            <div className="card">
                  <div className="cover-image">
                        <img src={cover} alt="" />
                  </div>
                  <h3>{title}</h3>
            </div>
      );
}

export default Card;
