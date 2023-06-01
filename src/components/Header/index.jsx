import headerBackground from '../../assets/header-background.png';
import '../../styles/header.scss';
function Header() {
      return (
            <div className="header-container">
                  <img src={headerBackground} alt="" />
            </div>
      );
}

export default Header;
