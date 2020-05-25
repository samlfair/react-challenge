import React, { Component } from "react";

export default class CustomizeImage extends Component {
  state = {
    url: undefined,
    size: 100,
  };
  handleUrl = (e) => {
    this.setState({ url: e.target.value });
  };
  handleSize = (e) => {
    this.setState({ size: e.target.value });
  };
  render() {
    return (
      <div>
        <h2>Customize Image</h2>
        <input
          type="text"
          name="url"
          id="url"
          onChange={this.handleUrl}
          value={this.state.url}
        />
        <input
          type="range"
          name="size"
          id="size"
          min={50}
          max={300}
          value={this.state.size}
          onChange={this.handleSize}
        />
        <div
          className="image"
          style={{
            backgroundImage: `url("${this.state.url}")`,
            height: this.state.size,
            width: this.state.size,
          }}
        ></div>
      </div>
    );
  }
}
