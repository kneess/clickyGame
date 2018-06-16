import React from "react";

const styles = {
  navbarStyle: {
    background: "green",
    justifyContent: "space-between",
    width: "100%",
    height: "80px",

  }
};

const Navbar = props => (
  <navbar style={styles.navbarStyle} className="navbar navbar-static-top">
    <strong><h3>Clicky Game</h3></strong>
    <a>Click and image to begin</a>
    <a>Score: {props.score} | Top Score: {props.topScore}</a>
  </navbar>
);
  export default Navbar;
  