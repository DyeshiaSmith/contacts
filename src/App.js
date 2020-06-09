import React from "react";
import getContacts from "./api/index";

export class App extends React.Component {
  async componentDidMount() {
    console.log(await getContacts());
  }
  render() {
    return (
      <div>
        <h1 className="title">Contact Book!</h1>
      </div>
    );
  }
}
