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
        <div>
          {Object.values(spaces).map((space, index) => {
            const spaceNumber = index + 1;

            return (
              <button
                onClick={() => this.buttonClicked(spaceNumber)}
                data-e2e-test={`space-button-${spaceNumber}`}
                key={space.spaceDocument.spaceId}
              >
                Space {spaceNumber}
              </button>
            );
          })}
        </div>
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
  
  buttonClicked = spaceNumber => {
    this.setState({
      ...spaces[`space${spaceNumber}`]
    });
  };
}

export default App;
