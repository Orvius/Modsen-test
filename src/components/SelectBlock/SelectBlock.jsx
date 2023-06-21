import React from "react";
import  "./SelectBlock.css";

const SelectBlock = ({ title, options, onChange }) => {
  return (
    <div className="select__block">
      <h2 className="select-txt">{title}</h2>
      <select className="select-opt" onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBlock;