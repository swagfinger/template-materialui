import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { Typography, Stack } from "@mui/material";
import "./App.css";
import { MuiButton } from "./components/MuiButton";
import { MuiTextField } from "./components/MuiTextfiled";
import { MuiTypography } from "./components/MuiTypography";
import { MuiSelect } from "./components/MuiSelect";
import { MuiMultiSelect } from "./components/MuiMultiSelect";

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
      <h2>04. Select</h2>
      <Stack direction='column' spacing={2}>
        <Typography variant='h5'>Select</Typography>
        <MuiSelect />
        <Typography variant='h5'>MutliSelect</Typography>
        <MuiMultiSelect />
      </Stack>
    </div>
  );
}

export default App;
