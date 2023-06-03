import redLogo from '../../assets/red-logo.png';
import '../../styles/nav.scss';
import { Link } from 'react-router-dom';

function Nav() {
      return (
            <div className="nav">
                  <div className="logo">
                        <img src={redLogo} alt="" />
                  </div>

                  <ul>
                        <li>
                              <Link to="/">Acceuil</Link>
                        </li>
                        <li>
                              <Link to="/about">A Propos</Link>
                        </li>
                  </ul>
            </div>
      );
}

export default Nav;
