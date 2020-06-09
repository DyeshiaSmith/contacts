import PropTypes from "prop-types";
import React from "react";

import "font-awesome/css/font-awesome.min.css";

export const InfoToggle = ({ icon }) => <span className={`fa fa-${icon}`} />;
InfoToggle.propTypes = {
  icon: PropTypes.string.isRequired,
};
