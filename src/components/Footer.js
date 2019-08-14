import React from "react";

const styles = {
  footerStyle: {
    background: "#708090",
    justifyContent: "space-between",
    width: "100%",
    height: "50px"
  }
};

const Footer = () => (
  <div style={styles.footerStyle} className="footer">
    <strong><a>Clicky Game</a></strong>
  </div>
);
  export default Footer;
  