import  "./SelectBlock.css";

import React from "react";
import PropTypes from "prop-types";

function SelectBlock({ title, options, onChange }) {
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

SelectBlock.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectBlock;