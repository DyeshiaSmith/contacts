import React from "react";
import getContacts from "./api/index";

export class App extends React.Component {
  state = { contacts: [] };

  async componentDidMount() {
    const contacts = await getContacts();
    this.setState({ contacts });
  }

  render() {
    return (
      <div>
        <h1 className="title">Contact Book!</h1>
      </div>
    );
  }
}
