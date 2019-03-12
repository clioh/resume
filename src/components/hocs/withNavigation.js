import React from "react";
import PropTypes from "prop-types";
import NavigationBar from "../NavigationBar";

const withNavigation = Wrapped => props => (
  <div>
    <NavigationBar />
    <Wrapped {...props} />
  </div>
);

export default withNavigation;
