import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ContactList extends Component {
  render() {
    const { items, removeContact } = this.props;
    return (
      <ul className="items">
        {items.map(({ id, name, contact }) => (
          <li key={id} className="list">
            <p>{name}:</p> <p>{contact}</p>
            <button
              type="button"
              className="btn"
              onClick={() => removeContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  items: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
