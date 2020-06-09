import React from "react";
import { ContactCard as Card } from "./components";

import { getContacts } from "./api";

import "./App.css";

export class App extends React.Component {
  state = { contacts: [] };

  renderCards = () =>
    this.state.contacts.map(({ cell, email, name, picture }, index) => (
      <Card
        cell={cell}
        email={email}
        name={name}
        picture={picture}
        key={index}
      />
    ));

  async componentDidMount() {
    const { results } = await getContacts();
    this.setState({ contacts: results });
  }

  render() {
    return <main className="./App">{this.renderCards()}</main>;
  }
}
