import React from "react";
import PropTypes from "prop-types";
export default function filterContact({ value, onChangeFilter }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="Search Contact"
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </div>
  );
}

filterContact.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
