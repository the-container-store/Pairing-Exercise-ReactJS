import React, { Component } from "react";
import "./App.css";
import StorageSummary from "./components/StorageSummary";
import spaces from "./data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...spaces.space1
    };
  }
  
  render() {
    return (
      <div className="App">
        {this.renderButtons()}
        <StorageSummary spaceDocument={this.state.spaceDocument} />
        <div className="images">
          {this.state.imageUrls.map((url, index) => (
            <img
              src={url}
              key={index}
              alt="Space"
              width={100 / this.state.imageUrls.length + "%"}
            />
          ))}
        </div>
      </div>
    );
  }

  renderButtons() {
    return (
      <div>
        {Object.keys(spaces).map((spaceKey, index) => (
          <button key={index} onClick={() => this.handleClick(spaceKey)}>
            {spaceKey}
          </button>
        ))}
      </div>
    );
  }

  handleClick = spaceKey => {
    this.setState({ ...spaces[spaceKey] });
  };
}

export default App;
