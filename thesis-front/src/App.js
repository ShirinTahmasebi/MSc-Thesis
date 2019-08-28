import React from 'react';
import './App.css';
import {Panel} from "./panel/panel";
import {LoadingComponent} from "./loading/loading";

function App() {
  return (
    <div className="App">
      <Panel>
        <LoadingComponent/>
      </Panel>
    </div>
  );
}

export default App;
