import React from "react";
import "./Navbar.css";

const styles = {
  navbarStyle: {
    background: "#708090",
    justifyContent: "space-between",
    width: "100%",
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
  