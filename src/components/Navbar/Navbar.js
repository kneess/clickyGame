import React from "react";
import "./Navbar.css";

const styles = {
  navbarStyle: {
    background: "green",
    justifyContent: "space-between",
    width: "97%",
    height: "80px",
    marginTop: "-20px",

  }
};

const Navbar = props => (
  <navbar style={styles.navbarStyle} className="navbar navbar-static-top">
    <strong><h3>Clicky Game</h3></strong>
    <a>Score: {props.score} | Top Score: {props.topScore}</a>
  </navbar>
);
  export default Navbar;
  