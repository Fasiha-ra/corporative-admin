import React from 'react';
import { DropdownWrapper } from './Dropdown.styles';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggleDropdown, items, children }) => {
  return (
    <DropdownWrapper>
      <button className="dropdown-button" onClick={toggleDropdown}>
        {children}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {items.map((item, index) => (
            <Link to={item.link} key={index}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
