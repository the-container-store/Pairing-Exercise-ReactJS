import React from "react";
import "./App.css";
import StorageSummary from "./components/StorageSummary";
import spaces from "./data";

class App extends React.Component {
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
          <button onClick={() => this.buttonClicked('space1')}>Space 1</button>
          <button onClick={() => this.buttonClicked('space2')}>Space 2</button>
          <button onClick={() => this.buttonClicked('space3')}>Space 3</button>
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
  
  buttonClicked = (space) => {
    this.setState({ ...spaces[space] });
  };
}

export default App;
