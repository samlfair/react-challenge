import React, { Component } from "react";

export default class Temperature extends Component {
  state = { temperature: undefined };
  handleTemp = (e) => {
    this.setState({ temperature: e.target.value });
  };
  render() {
    return (
      <div>
        <input
          value={this.state.temperature}
          type="number"
          name="temperature"
          id="temperature"
          onChange={this.handleTemp}
        />
        {this.state.temperature && (
          <div className="temperature-feedback">
            {this.state.temperature < 0 ? (
              <div className="temperature cold">⛄️ That's cold!</div>
            ) : this.state.temperature < 10 ? (
              <div className="temperature brisk">🌬 Better bring a jacket!</div>
            ) : this.state.temperature < 20 ? (
              <div className="temperature crisp">🍂 Mmm, a crisp day</div>
            ) : this.state.temperature < 30 ? (
              <div className="temperature warm">🌻 Let's hit the beach!</div>
            ) : (
              <div className="temperature hot">
                🔥 Jeezus, by', that's hot!!!
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
