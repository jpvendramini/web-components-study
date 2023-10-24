import React, { useRef, useState } from "react";

const SearchInputComponent = ({ value, onChange }) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(value || "");

  const handleInput = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    // Call the onChange function if it's provided
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="searchInputContainer">
      <img src="/icons/search.svg" alt="Search icon" width="18px" height="17px" style={{ marginLeft: ".5rem" }} />
      <input
        type="text"
        className="searchInput"
        placeholder="Search a book by its name or author"
        ref={inputRef}
        value={inputValue}
        onChange={handleInput}
      />
    </div>
  );
};

export default SearchInputComponent;
