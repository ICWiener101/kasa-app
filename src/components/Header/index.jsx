import '../../styles/header.scss';
function Header({ image }) {
      return (
            <div className="header-container">
                  <img src={image} alt="" />
                  <p className="slogan">Chez vous, partout et ailleurs</p>
            </div>
      );
}

export default Header;
