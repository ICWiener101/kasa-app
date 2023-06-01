import redLogo from '../../assets/red-logo.png';
import '../../styles/nav.scss';

function Nav() {
      return (
            <div className="nav">
                  <div className="logo">
                        <img src={redLogo} alt="" />
                  </div>
                  <div>
                        <ul>
                              <li>
                                    <a href="#">Acceuil</a>
                              </li>
                              <li>
                                    <a href="#">A Propos</a>
                              </li>
                        </ul>
                  </div>
            </div>
      );
}

export default Nav;
