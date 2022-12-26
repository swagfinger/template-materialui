import { TextField, Box, MenuItem } from "@mui/material";
import React, { useState } from "react";

type MuiSelectProps = {};

export const MuiSelect: React.FC<MuiSelectProps> = () => {
  const [country, setCountry] = useState("");
  console.log(country);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  };
  return (
    <Box width='250px'>
      <TextField
        label='select country'
        select
        value={country}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value='US'>US</MenuItem>
        <MenuItem value='CA'>Canada</MenuItem>
        <MenuItem value='EN'>England</MenuItem>
      </TextField>
    </Box>
  );
};
