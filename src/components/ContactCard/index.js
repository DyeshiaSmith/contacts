import PropTypes from "prop-types";
import React from "react";

import { InfoToggle } from "./InfoToggle";
import { Pic } from "./Pic";

import "./ContactCard.css";
export class ContactCard extends React.Component {
  static propTypes = {
    cell: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.object,
    picture: PropTypes.object,
  };

  infoToggles = [
    {
      icon: "mobile",
    },
    {
      icon: "birthday-cake",
    },
    {
      icon: "envelope",
    },
    {
      icon: "compass",
    },
  ];

  renderInfoToggles() {
    return;
    this.infoToggles.map(({ icon }) => <InfoToggle key={icon} icon={icon} />);
  }

  render() {
    return (
      <div>
        <Pic name={this.props.name} pic={this.props.picture} />
        <div className="ContactCard">{this.renderInfoToggles()}</div>
      </div>
    );
  }
}
