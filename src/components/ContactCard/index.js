import PropTypes from "prop-types";
import React from "react";

import { Pic } from "./Pic";

export class ContactCard extends React.Component {
  static propTypes = {
    cell: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.object,
    picture: PropTypes.object,
  };
  render() {
    return <Pic name={this.props.name} pic={this.props.picture} />;
  }
}
