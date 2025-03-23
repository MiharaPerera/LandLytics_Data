import React, { useState, useRef, useEffect } from "react";
import styles from "./RegulationFilter.module.css";

// Function with hooks for managing dropdown open//closed state, tracking items in the dropdown and referancing
function FilterDropdown({ placeholderText, iconSrc, items, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle item selection
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    onChange(item);
  };

  // useEffect hook to handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Adding event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button className={styles.header} onClick={toggleDropdown}>
        <span className={styles.exampleText}>
          {selectedItem || placeholderText}
        </span>
        <img
          src="/assets/downArrow.png"
          alt="Dropdown arrow"
          className={styles.img3}
        />
      </button>

      {/*Dropdown renders if isOpen is true*/}
      {isOpen && (
        <div className={`${styles.itemsFrame} ${styles.itemsFrameOpen}`}>
          {items.map((item, index) => (
            <div
              key={index}
              className={styles.dropdownItem}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterDropdown;
