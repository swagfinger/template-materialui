import React from 'react';

import './App.css';
import MuiButton from './components/MuiButton';
import MuiTypography from './components/MuiTypography';

function App() {
  return (
    <div className="App">
      <h1>MATERIAL UI</h1>
      <h2>01. Typography</h2>
      <MuiTypography/>
      <h2>02. Buttons</h2>
      <MuiButton/>
    </div>
  );
}

export default App;
