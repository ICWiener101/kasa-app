import '../../styles/header.scss';
function Header({ image }) {
      return (
            <div className="header-container">
                  <img src={image} alt="" />
            </div>
      );
}

export default Header;
