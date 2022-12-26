import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import "./App.css";
import MuiButton from "./components/MuiButton";
import MuiTextField from "./components/MuiTextfiled";
import MuiTypography from "./components/MuiTypography";

function App() {
  return (
    <div className='App'>
      <h1>MATERIAL UI</h1>
      <h2>Installation</h2>
      <p>documentation</p>
      <CopyBlock
        text={"https://mui.com/"}
        theme={dracula}
        language='html'
        showLineNumbers={false}
      />
      <p>install Material UI</p>
      <CopyBlock
        text={"npm i @mui/material @emotion/react @emotion/styled"}
        theme={dracula}
        language='shell'
        showLineNumbers={false}
      />
      <h2>01. Typography</h2>
      <MuiTypography />
      <h2>02. Buttons</h2>
      <MuiButton />
      <h2>03. TextField</h2>
      <MuiTextField />
    </div>
  );
}

export default App;
