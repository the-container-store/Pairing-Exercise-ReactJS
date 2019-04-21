import * as React from 'react';

import StorageSummary from '../StorageSummary';
import { useAppState } from './App.state'
import './App.css';

const App = (props) => {
  const [state, stateActions] = useAppState()
  const imagesWidth = `${100 / state.imageUrls.length}%`

  return (
    <div className="App" data-testid="App">
      <div className="selectorButtons" data-testid="selectorButtons">
        <button onClick={stateActions.setState0}>Space 1</button>
        <button onClick={stateActions.setState1}>Space 2</button>
        <button onClick={stateActions.setState2}>Space 3</button>
      </div>
      
      <StorageSummary spaceDocument={state.spaceDocument} />

      <div className="images">
        {state.imageUrls.map(url => 
          (<img src={url} key={url} alt="Space" width={imagesWidth}/>)  
        )}
      </div>
    </div>
  );
}

export default App;


