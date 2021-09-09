import React, { Component } from "react";
import "./App.css";
import StorageSummary from "./components/StorageSummary";
import spaces from "./data";

class App extends Component {
    state = {
      ...spaces.space1
    }

  render() {
    const {spaceDocument = {}, imageUrls = []} = this.state
    return (
      <div className="App">
        <div>
          <button onClick={() => this.onBtnClick('space1')}>Space 1</button>
          <button onClick={() => this.onBtnClick('space2')}>Space 2</button>
          <button onClick={() => this.onBtnClick('space3')}>Space 3</button>
        </div>
        <StorageSummary spaceDocument={spaceDocument} />
        <div className="images">
          {imageUrls.map((url, index) => (
            <img
              src={url}
              key={index}
              alt="Space"
              width={100 / imageUrls.length + "%"}
            />
          ))}
        </div>
      </div>
    );
  }

  onBtnClick = space => this.setState({...spaces[space]});
}

export default App;
