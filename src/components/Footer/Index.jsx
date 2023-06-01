import React from 'react';
import whiteLogo from '../../assets/white-logo.png';
import '../../styles/footer.scss';

export default function Footer() {
      return (
            <div className="footer">
                  <img src={whiteLogo} alt="stupid image does not load"></img>
                  <p>&copy; 2020 Kasa. All rights reserved</p>
            </div>
      );
}
