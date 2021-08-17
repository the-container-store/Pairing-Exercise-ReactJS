import React, { Component } from "react";
import "./App.css";
import StorageSummary from "./components/StorageSummary";
import spaces from "./data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...spaces.space1,
      space1Urls: [
        "https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178196&type=DESIGN&name=Floor",
      "https://www.containerstore.com/elfa/wall/imageContent.htm?name=Wall+A&fileId=7178196&type=DESIGN"],
      space2Urls: [
        "https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178808&type=DESIGN&name=Floor",
        "https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178808&type=DESIGN&name=Wall+A"
      ],
      space3Urls: [
        "https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178188&type=DESIGN&name=Floor",
        "https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178188&type=DESIGN&name=Wall+D",
        "https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178188&type=DESIGN&name=Wall+A",
        "https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178188&type=DESIGN&name=Wall+B"
      ],
      active: "space1"
    };
    
  }

  render() {
    return (
      <div className="App">
        <div>
          <button onClick={() => this.buttonClicked(spaces.space1.spaceDocument, this.state.space1Urls, "space1")} className={this.state.active === "space1" ? "active" : ""}>Space 1</button>
          <button onClick={() => this.buttonClicked(spaces.space2.spaceDocument, this.state.space2Urls, "space2")} className={this.state.active === "space2" ? "active" : ""}>Space 2</button>
          <button onClick={() => this.buttonClicked(spaces.space3.spaceDocument, this.state.space3Urls, "space3")} className={this.state.active === "space3" ? "active" : ""}>Space 3</button>
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

  buttonClicked = (spaceDocument, images, space) => {
    this.setState({
      spaceDocument,
      imageUrls: images,
      active: space
    })
  }
}

export default App;
