import PropTypes from "prop-types";
import React from "react";

import { InfoDisplay } from "./InfoDisplays";
import { InfoToggle } from "./InfoToggle";
import { Pic } from "./Pic";

import "./ContactCard.css";
import styles from "./ContactCard.module.css";

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
      <div className="ContactCard">
        <Pic name={this.props.name} pic={this.props.picture} />
        <InfoDisplay />
        <div className={styles.infoToggles}>{this.renderInfoToggles()}</div>
      </div>
    );
  }
}
