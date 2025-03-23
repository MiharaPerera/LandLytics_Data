import React, { useState } from "react";
import styles from "./RegulationFilter.module.css";

const FilterDropdown = ({ placeholderText, items = [], onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleSelect = (item) => {
    setSelectedItem(item);
    onChange(item); // Send selected item back to parent component
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className={styles.dropdownBox}>
      {/* Dropdown Header */}
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.exampleText}>
          {selectedItem || placeholderText}
        </span>
        <img
          src={isOpen ? "/icons/up-arrow.svg" : "/icons/down-arrow.svg"}
          alt="Toggle Dropdown"
          className={styles.img3}
        />
      </div>

      {/* Dropdown Options */}
      <div
        className={`${styles.itemsFrame} ${
          isOpen ? styles.itemsFrameOpen : ""
        }`}
      >
        {items.length === 0 ? (
          <div className={styles.dropdownItem}>No options available</div>
        ) : (
          items.map((item) => (
            <div
              key={item}
              className={`${styles.dropdownItem} ${
                item === selectedItem ? styles.activeItem : ""
              }`}
              onClick={() => handleSelect(item)}
            >
              {item}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FilterDropdown;
