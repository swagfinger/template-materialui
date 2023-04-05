import { Box, FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";

type MuiSwitchProps = {};

export const MuiSwitchExample: React.FC<MuiSwitchProps> = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        label='dark mode'
        control={<Switch checked={checked} onChange={handleChange} />}
      />
    </Box>
  );
};
