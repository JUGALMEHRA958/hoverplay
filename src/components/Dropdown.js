import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (event) => {
    const selectedValue = event.target.value;
    setSelectedItem(selectedValue);
    setIsOpen(false);
    handleToggle();
  };

  return (
    <div class="dropdown">
      <button
        class="dropbtn"
        onMouseEnter={handleToggle}
        // onMouseLeave={handleToggle}
      >
        Dropdown
      </button>
      <div
        class="dropdown-content"
        style={isOpen ? { display: 'block' } : { display: 'none' }}
      >
        {items.map((item, index) => (
          <a
            key={index}
            href="#"
            value={item}
            onClick={handleItemClick}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
