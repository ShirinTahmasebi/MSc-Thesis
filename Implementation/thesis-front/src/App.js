import React from 'react';
import './App.css';
import {Panel} from "./panel/panel";
import {LoadingComponent} from "./components/loading/loading";

function App() {
  return (
    <Panel>
      <LoadingComponent/>
    </Panel>
  );
}

export default App;