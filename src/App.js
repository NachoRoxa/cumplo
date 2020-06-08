import React from 'react';
import './App.css';
import Graph from './components/Graph/Graph';
import ToolTip from './components/ToolTip/ToolTip';

function App() {
  return (
    <div className="App">
      <ToolTip />
      <Graph />
    </div>
  );
}

export default App;
