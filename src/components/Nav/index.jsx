import logo from '../../assets/svg-logo.svg';
import '../../styles/nav.scss';
import { Link } from 'react-router-dom';

function Nav() {
      return (
            <div className="nav">
                  <div className="logo">
                        <Link to="/">
                              <img src={logo} alt="" />
                        </Link>
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
