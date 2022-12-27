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
import { MuiSwitch } from "./components/MuiSwitch";
import { MuiCard } from "./components/MuiCard";
import { MuiLayout } from "./components/MuiLayout";
import { MuiAccordion } from "./components/MuiAccordion";
import { MuiTable } from "./components/MuiTable";
import { MuiNavbar } from "./components/MuiNavbar";
import { MuiLink } from "./components/MuiLink";
import { MuiBreadcrumbs } from "./components/MuiBreadcrumbs";
import { MuiList } from "./components/MuiList";
import { MuiDialog } from "./components/MuiDialog";

function App() {
  return (
    <div className='App'>
      <Stack spacing={4}>
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
          <h2>06. Checkbox</h2>
          <MuiCheckbox />
        </Stack>

        <Stack direction='column' spacing={2}>
          <h2>07. Switch</h2>
          <MuiSwitch />
        </Stack>

        <Stack direction='column' spacing={2}>
          <h2>08. Card</h2>
          <MuiCard />
        </Stack>

        <Stack direction='column' spacing={2}>
          <h2>09. Layout</h2>
          <MuiLayout />
        </Stack>

        <Stack direction='column' spacing={2}>
          <h2>10. Accordion</h2>
          <MuiAccordion />
        </Stack>

        <Stack direction='column' spacing={2}>
          <h2>11. Table</h2>
          <MuiTable />
        </Stack>

        <Stack direction='column' spacing={2}>
          <h2>12. Navbar</h2>
          <MuiNavbar />
        </Stack>

        <Stack direction='column' spacing={2}>
          <h2>13. Link</h2>
          <MuiLink />
        </Stack>

        <Stack direction='column' spacing={2}>
          <h2>14. Breadcrumbs</h2>
          <MuiBreadcrumbs />
        </Stack>

        <Stack direction='column' spacing={2}>
          <h2>15. List</h2>
          <MuiList />
        </Stack>

        <Stack direction='column' spacing={2}>
          <h2>16. Dialog (aka Modal)</h2>
          <MuiDialog />
        </Stack>
      </Stack>
    </div>
  );
}

export default App;
