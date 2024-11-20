import React, { Component } from "react";

class Header extends Component {
  componentDidMount() {
    console.log("Header mounted");
  }

  render() {
    return <header><h1>Hola Mundo : Ejemplo react</h1></header>;
  }
}

export default Header;
