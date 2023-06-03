import React, { useState } from 'react';
import '../../styles/dropdownList.scss';

function DropdownList({ equipments }) {
      const [isOpen, setOpen] = useState(false);
      const handleOpen = () => {
            setOpen(!isOpen);
      };
      return (
            <div className={`${'dropdown'} ${isOpen ? 'active' : ''}`}>
                  <button className="dropdown-btn" onClick={handleOpen}>
                        Equipments
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

export default DropdownList;
