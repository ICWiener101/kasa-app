import React, { useState } from 'react';
import '../../styles/dropdownList.scss';

function DropdownList({ equipments }) {
      const [isOpen, setOpen] = useState(false);
      const [currentPage, setCurrentPage] = useState('About');
      const handleOpen = () => {
            setOpen(!isOpen);
      };

      const handleCurrentPage = (page) => {
            setCurrentPage(page);
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
