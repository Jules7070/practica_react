import React, { Component } from "react";

class Footer extends Component {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer>
        <p>&copy; {currentYear} My App</p>
      </footer>
    );
  }
}

export default Footer;
