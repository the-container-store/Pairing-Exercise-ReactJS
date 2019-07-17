import React, { useState } from 'react';
import './App.css';
import StorageSummary from './components/StorageSummary';
import spaceDocument1 from './data/space_5148448';
import spaceDocument2 from './data/space_5148457';
import spaceDocument3 from './data/space_5148443';

const App = ()=> {

  const[spaceDocument, setStateDocument]=useState(spaceDocument1);
  const[imageUrls, setImageUrls]=useState([
    'https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178196&type=DESIGN&name=Floor',
    'https://www.containerstore.com/elfa/wall/imageContent.htm?name=Wall+A&fileId=7178196&type=DESIGN',
  ])

  const button1Clicked = () => {
    setStateDocument(spaceDocument1);
    setImageUrls([
      'https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178196&type=DESIGN&name=Floor',
      'https://www.containerstore.com/elfa/wall/imageContent.htm?name=Wall+A&fileId=7178196&type=DESIGN',
    ]);
  }
  const button2Clicked = () => {
    setStateDocument(spaceDocument2);
    setImageUrls([
      'https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178808&type=DESIGN&name=Floor',
      'https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178808&type=DESIGN&name=Wall+A',
    ]);
    
  }
  const button3Clicked = () => {
    setStateDocument(spaceDocument3);
    setImageUrls([
      'https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178188&type=DESIGN&name=Floor',
        'https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178188&type=DESIGN&name=Wall+D',
        'https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178188&type=DESIGN&name=Wall+A',
        'https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178188&type=DESIGN&name=Wall+B',
    ]);

  }
  return (
    <div className="App">
      <div>
        <button onClick={button1Clicked}>Space 1</button>
        <button onClick={button2Clicked}>Space 2</button>
        <button onClick={button3Clicked}>Space 3</button>
      </div>
      <StorageSummary spaceDocument={spaceDocument} />
      <div className="images">
        {imageUrls.map(url => 
          (<img src={url} alt="Space" width={(100 / imageUrls.length) + '%'}/>)  
        )}
      </div>
    </div>
  );
 
}

export default App;


