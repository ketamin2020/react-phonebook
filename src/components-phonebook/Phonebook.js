import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactCreator from "./ContactCreator";
import ContactList from "./ContactList";
import Section from "./Section";
import FilterContact from "./FilterContact";

export default class Phonebook extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  changeFilter = (filter) => {
    this.setState({ filter });
  };
  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  showSortTask = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  createTask = (contactName, number) => {
    const sameName = this.state.contacts.some(
      (item) => item.name === contactName
    );

    if (sameName) {
      alert(`${contactName} is already in contacts`);
      return;
    } else if (!contactName || !number) {
      alert("Enter phone number or name");
      return;
    }

    const contact = {
      id: uuidv4(),
      name: contactName,
      contact: number,
    };

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };
  render() {
    const sortTask = this.showSortTask();
    const { contacts, filter } = this.state;
    return (
      <div>
        <Section title="Phonebook">
          <ContactCreator createTask={this.createTask} />
        </Section>
        <Section title={contacts.length > 0 && "Contacts"}>
          {contacts.length > 1 && (
            <FilterContact value={filter} onChangeFilter={this.changeFilter} />
          )}

          <ContactList items={sortTask} removeContact={this.removeContact} />
        </Section>
      </div>
    );
  }
}
