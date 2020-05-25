import React, { Component } from "react";
import NavBar from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/customize-image">Customize Image</a>
          </li>
          <li>
            <a href="/temperature">Temperature</a>
          </li>
        </ul>
      </nav>
    );
  }
}
