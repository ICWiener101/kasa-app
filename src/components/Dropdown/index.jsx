import React, { useState } from 'react';
import '../../styles/dropdown.scss';

function Dropdown({ buttonText, content, isAbout, description, equipments }) {
      const [isOpen, setOpen] = useState(false);
      const handleOpen = () => {
            setOpen(!isOpen);
      };
      // const componentClass = {
      //       'about-page-width': isAbout,
      //       'apartement-details-page-width': !isAbout,
      // };

      if (!isAbout) {
            buttonText = 'Description';
            content = description;
      }

      return (
            <div
                  className={`${'dropdown'} ${
                        isAbout
                              ? 'about-page-width'
                              : 'apartement-details-page-width'
                  } ${isOpen ? 'active' : ''}`}
            >
                  <button className="dropdown-btn" onClick={handleOpen}>
                        {buttonText}
                  </button>
                  {isOpen && <div className="dropdown-content">{content}</div>}
            </div>
      );
}

export default Dropdown;
