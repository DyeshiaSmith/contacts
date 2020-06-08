// TODO: 'export' components
import React from "react";
import { DOB } from "./DOB";
import { Email } from "./Email";
import { Name } from "./Name";
import { Phone } from "./Phone";

import { getContacts } from "api";

export class components extends React.Component {
  state = {
    DOB: false,
    Email: false,
    Name: true,
    Phone: false,
  };

  async componentDidMount() {
    try {
      this.setState({ contacts: await getContacts() });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <main>
        <div>
          <DOB />
          <Email />
          <Name />
          <Phone />
        </div>
      </main>
    );
  }
}
