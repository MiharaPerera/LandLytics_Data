"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./RegulationsFilter.module.css";

function FilterDropdown({
  placeholderText,
  iconSrc,
  className,
  headerClassName = styles.header,
  textClassName = styles.exampleText,
  imgClassName = styles.img3,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const dropdownRef = useRef(null);

  // Sample dropdown items - these would typically come from props
  const items = [
    "General Requirements",
    "Subdivision Standards",
    "Land Use Regulations",
    "Zoning Requirements",
    "Environmental Compliance",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setActiveIndex(-1);
    }
  };

  const handleItemClick = (item, index) => {
    setSelectedItem(item);
    setIsOpen(false);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
        break;
      case "Enter":
      case "Space":
        e.preventDefault();
        if (activeIndex >= 0) {
          handleItemClick(items[activeIndex], activeIndex);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={className} ref={dropdownRef} onKeyDown={handleKeyDown}>
      <button
        className={headerClassName}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className={textClassName}>{selectedItem || placeholderText}</span>
        <img src={iconSrc} alt="Dropdown arrow" className={imgClassName} />
      </button>
      <div
        className={`${styles.itemsFrame} ${isOpen ? styles.itemsFrameOpen : ""}`}
        aria-hidden={!isOpen}
        role="listbox"
        tabIndex={-1}
      >
        {isOpen &&
          items.map((item, index) => (
            <div
              key={index}
              role="option"
              aria-selected={selectedItem === item}
              className={`${styles.dropdownItem} ${activeIndex === index ? styles.activeItem : ""}`}
              onClick={() => handleItemClick(item, index)}
              tabIndex={-1}
            >
              {item}
            </div>
          ))}
      </div>
    </div>
  );
}

export default FilterDropdown;
