import React from "react";

const styles = {
  footerStyle: {
    background: "green",
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
  