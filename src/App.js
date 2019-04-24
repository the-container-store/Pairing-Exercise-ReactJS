import React, { Component } from 'react';
import './App.css';
import StorageSummary from './components/StorageSummary';
import spaceDocument1 from './data/space_5148448';
import spaceDocument2 from './data/space_5148457';
import spaceDocument3 from './data/space_5148443';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spaceDocument: spaceDocument1,
      imageUrls: [
        'https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178196&type=DESIGN&name=Floor',
        'https://www.containerstore.com/elfa/wall/imageContent.htm?name=Wall+A&fileId=7178196&type=DESIGN',
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.button1Clicked}>Space 1</button>
          <button onClick={this.button2Clicked}>Space 2</button>
          <button onClick={this.button3Clicked}>Space 3</button>
        </div>
        <StorageSummary spaceDocument={this.state.spaceDocument} />
        <div className="images">
          {this.state.imageUrls.map((url, index) => 
            (<img src={url} key={index} alt="Space" width={(100 / this.state.imageUrls.length) + '%'}/>)  
          )}
        </div>
      </div>
    );
  }
  button1Clicked = () => {
    this.setState({
      spaceDocument: spaceDocument1,
      imageUrls: [
        'https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178196&type=DESIGN&name=Floor',
        'https://www.containerstore.com/elfa/wall/imageContent.htm?name=Wall+A&fileId=7178196&type=DESIGN',
      ],
    });
  }
  button2Clicked = () => {
    this.setState({
      spaceDocument: spaceDocument2,
      imageUrls: [
        'https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178808&type=DESIGN&name=Floor',
        'https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178808&type=DESIGN&name=Wall+A',
      ],
    });
  }
  button3Clicked = () => {
    this.setState({
      spaceDocument: spaceDocument3,
      imageUrls: [
        'https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178188&type=DESIGN&name=Floor',
        'https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178188&type=DESIGN&name=Wall+D',
        'https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178188&type=DESIGN&name=Wall+A',
        'https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178188&type=DESIGN&name=Wall+B',
      ],
    });
  }
}

export default App;


