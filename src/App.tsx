import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { Typography, Stack } from "@mui/material";
import "./App.css";
import { MuiButton } from "./components/MuiButton";
import { MuiTextField } from "./components/MuiTextfiled";
import { MuiTypography } from "./components/MuiTypography";
import { MuiSelect } from "./components/MuiSelect";
import { MuiMultiSelect } from "./components/MuiMultiSelect";
import { MuiRadioButton } from "./components/MuiRadioButton";
import { MuiCheckbox } from "./components/MuiCheckbox";

function App() {
  return (
    <div className='App'>
      <Stack direction='column' spacing={2}>
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
      </Stack>

      <Stack direction='column' spacing={2}>
        <h2>01. Typography</h2>
        <MuiTypography />
      </Stack>

      <Stack direction='column' spacing={2}>
        <h2>02. Buttons</h2>
        <MuiButton />
      </Stack>

      <Stack direction='column' spacing={2}>
        <h2>03. TextField</h2>
        <MuiTextField />
      </Stack>

      <Stack direction='column' spacing={2}>
        <h2>04. Select</h2>
        <Typography variant='h5'>Select</Typography>
        <MuiSelect />
        <Typography variant='h5'>MutliSelect</Typography>
        <MuiMultiSelect />
      </Stack>

      <Stack direction='column' spacing={2}>
        <h2>05. Radio Button</h2>
        <MuiRadioButton />
      </Stack>

      <Stack direction='column' spacing={2}>
        <h2>05. Checkbox</h2>
        <MuiCheckbox />
      </Stack>
    </div>
  );
}

export default App;
