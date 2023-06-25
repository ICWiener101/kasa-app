import '../../styles/error.scss';
import { Link } from 'react-router-dom';

function Error() {
      return (
            <div className="error">
                  <p className="error-code">404</p>
                  <p className="error-message">
                        Oups! La page que vous demandez n'existe pas.
                  </p>
                  <p className="link-to-home">
                        <Link to="/">Retourner sur la page d'accueil</Link>
                  </p>
            </div>
      );
}

export default Error;
