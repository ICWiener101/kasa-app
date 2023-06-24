import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
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
                                    Description{' '}
                                    <FontAwesomeIcon
                                          className="chevron"
                                          icon={faChevronRight}
                                    />
                              </button>
                              <div
                                    className={`dropdown-content ${
                                          isOpen ? 'open' : ''
                                    }`}
                              >
                                    <p> {description}</p>
                              </div>
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
                                    Equipments
                                    <FontAwesomeIcon
                                          className="chevron"
                                          icon={faChevronRight}
                                    />
                              </button>

                              <ul
                                    className={`dropdown-content ${
                                          isOpen ? 'open' : ''
                                    }`}
                              >
                                    {equipments.map((item, index) => (
                                          <li key={index}>{item}</li>
                                    ))}
                              </ul>
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
                        <FontAwesomeIcon
                              className="chevron"
                              icon={faChevronRight}
                        />
                  </button>
                  <div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
                        <p> {content} </p>
                  </div>
            </div>
      );
}

export default Dropdown;
