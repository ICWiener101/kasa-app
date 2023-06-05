import React, { useState } from 'react';
import '../../styles/dropdown.scss';

function Dropdown({ buttonText, content, isAbout, description, equipments }) {
      const [isOpen, setOpen] = useState(false);
      const handleOpen = () => {
            setOpen(!isOpen);
      };

      if (!isAbout) {
            if (description !== undefined) {
                  return (
                        <div
                              className={`${'dropdown'} ${
                                    isAbout
                                          ? 'about-page-width'
                                          : 'apartement-details-page-width'
                              } ${isOpen ? 'active' : ''}`}
                        >
                              <button
                                    className="dropdown-btn"
                                    onClick={handleOpen}
                              >
                                    Description
                              </button>
                              {isOpen && (
                                    <div className="dropdown-content">
                                          {description}
                                    </div>
                              )}
                        </div>
                  );
            }
            if (equipments !== undefined) {
                  return (
                        <div
                              className={`${'dropdown'} ${
                                    isAbout
                                          ? 'about-page-width'
                                          : 'apartement-details-page-width'
                              } ${isOpen ? 'active' : ''}`}
                        >
                              <button
                                    className="dropdown-btn"
                                    onClick={handleOpen}
                              >
                                    Equipment
                              </button>
                              {isOpen && (
                                    <ul className="dropdown-content">
                                          {equipments.map((item, index) => (
                                                <li key={index}>{item}</li>
                                          ))}
                                    </ul>
                              )}
                        </div>
                  );
            }
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
