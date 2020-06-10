import PropTypes from "prop-types";
import React from "react";

export const InfoDisplay = ({ info = "n/a" }) => <p>{info}</p>;
InfoDisplay.propTypes = {
  info: PropTypes.string.isRequired,
};
