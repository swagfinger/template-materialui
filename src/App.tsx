import React from "react";
// import LocalizationProvider from "@mui/lab/LocalizationProvider"; - DEPRECATED
// import { AdapterDateFns } from "@mui/lab/AdapterDateFns"; - DEPRECATED
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { CopyBlock, dracula } from "react-code-blocks";
import { Typography, Stack } from "@mui/material";
import "./App.css";
import { MuiButtonExample } from "./components/MuiButtonExample";
import { MuiTextFieldExample } from "./components/MuiTextfiledExample";
import { MuiTypographyExample } from "./components/MuiTypographyExample";
import { MuiSelectExample } from "./components/MuiSelectExample";
import { MuiMultiSelectExample } from "./components/MuiMultiSelectExample";
import { MuiRadioButtonExample } from "./components/MuiRadioButtonExample";
import { MuiCheckboxExample } from "./components/MuiCheckboxExample";
import { MuiSwitchExample } from "./components/MuiSwitchExample";
import { MuiCardExample } from "./components/MuiCardExample";
import { MuiLayoutExample } from "./components/MuiLayoutExample";
import { MuiAccordionExample } from "./components/MuiAccordionExample";
import { MuiTableExample } from "./components/MuiTableExample";
import { MuiNavbarExample } from "./components/MuiNavbarExample";
import { MuiLinkExample } from "./components/MuiLinkExample";
import { MuiBreadcrumbsExample } from "./components/MuiBreadcrumbsExample";
import { MuiListExample } from "./components/MuiListExample";
import { MuiDialogExample } from "./components/MuiDialogExample";
import { MuiProgressExample } from "./components/MuiProgressExample";
import { MuiLoadingButtonExample } from "./components/MuiLoadingButtonExample";
import { MuiDateExample } from "./components/MuiDateExample";
import { MuiDateRangeExample } from "./components/MuiDateRangeExample";
import { MuiTimelineExample } from "./components/MuiTimelineExample";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
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
            <MuiTypographyExample />
          </Stack>

          <Stack direction='column' spacing={2}>
            <h2>02. Buttons</h2>
            <MuiButtonExample />
          </Stack>

          <Stack direction='column' spacing={2}>
            <h2>03. TextField</h2>
            <MuiTextFieldExample />
          </Stack>

          <Stack direction='column' spacing={2}>
            <h2>04. Select</h2>
            <Typography variant='h5'>Select</Typography>
            <MuiSelectExample />
            <Typography variant='h5'>MutliSelect</Typography>
            <MuiMultiSelectExample />
          </Stack>

          <Stack direction='column' spacing={2}>
            <h2>05. Radio Button</h2>
            <MuiRadioButtonExample />
          </Stack>

          <Stack direction='column' spacing={2}>
            <h2>06. Checkbox</h2>
            <MuiCheckboxExample />
          </Stack>

          <Stack direction='column' spacing={2}>
            <h2>07. Switch</h2>
            <MuiSwitchExample />
          </Stack>

          <Stack direction='column' spacing={2}>
            <h2>08. Card</h2>
            <MuiCardExample />
          </Stack>

          <Stack direction='column' spacing={2}>
            <h2>09. Layout</h2>
            <MuiLayoutExample />
          </Stack>

          <Stack direction='column' spacing={2}>
            <h2>10. Accordion</h2>
            <MuiAccordionExample />
          </Stack>

          <Stack direction='column' spacing={2}>
            <h2>11. Table</h2>
            <MuiTableExample />
          </Stack>

          <Stack direction='column' spacing={2}>
            <h2>12. Navbar</h2>
            <MuiNavbarExample />
          </Stack>

          <Stack direction='column' spacing={2}>
            <h2>13. Link</h2>
            <MuiLinkExample />
          </Stack>

          <Stack direction='column' spacing={2}>
            <h2>14. Breadcrumbs</h2>
            <MuiBreadcrumbsExample />
          </Stack>

          <Stack direction='column' spacing={2}>
            <h2>15. List</h2>
            <MuiListExample />
          </Stack>

          <Stack direction='column' spacing={2}>
            <h2>16. Dialog (aka Modal)</h2>
            <MuiDialogExample />
          </Stack>

          <Stack direction='column' spacing={2}>
            <h2>17. Progress</h2>
            <MuiProgressExample />
          </Stack>

          <Stack direction='column' spacing={2}>
            <h2>18. Loading Button</h2>
            <MuiLoadingButtonExample />
          </Stack>

          <Stack direction='column' spacing={2}>
            <h2>19. DatePicker, TimePicker, DateTimePicker</h2>
            <MuiDateExample />
          </Stack>

          <Stack direction='column' spacing={2}>
            <h2>20. DateRangePicker (license required)</h2>
            <MuiDateRangeExample />
          </Stack>

          <Stack direction='column' spacing={2}>
            <h2>21. Timeline</h2>
            <MuiTimelineExample />
          </Stack>
        </Stack>
      </div>
    </LocalizationProvider>
  );
}

export default App;
