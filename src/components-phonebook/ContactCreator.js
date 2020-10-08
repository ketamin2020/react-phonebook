import React, { Component } from "react";

export default class ContactCreator extends Component {
  state = {
    name: "",
    number: "",
  };

  handleAddContact = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    const { name, number } = this.state;
    const { createTask } = this.props;
    e.preventDefault();
    createTask(name, number);
    this.setState({
      name: "",
      number: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleAddContact}
            />
          </label>

          <label>
            Number
            <input
              type="tel"
              name="number"
              placeholder="tel.number"
              value={this.state.number}
              onChange={this.handleAddContact}
            />
          </label>

          <button type="submit"> Add contact</button>
        </form>
      </div>
    );
  }
}
