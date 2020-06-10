import PropTypes from "prop-types";
import React from "react";

import { InfoDisplay } from "./InfoDisplays";
import { InfoToggle } from "./InfoToggle";
import { Pic } from "./Pic";

import { getStateProxy } from "utils/";

import "./ContactCard.css";
import styles from "./ContactCard.module.css";

export class ContactCard extends React.Component {
  static propTypes = {
    cell: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.object,
    picture: PropTypes.object,
  };

  state = {
    activeInfo: "cell",
  };

  stProxy = getStateProxy(this);

  infoToggles = [
    {
      icon: "mobile",
      info: "cell",
    },
    {
      icon: "birthday-cake",
      info: "dob",
    },
    {
      icon: "envelope",
      info: "email",
    },
    {
      icon: "compass",
      info: "location",
    },
  ];

  renderInfoToggles() {
    return this.infoToggles.map(({ icon, info }) => (
      <InfoToggle key={icon} icon={icon} info={info} stProxy={this.stProxy} />
    ));
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
