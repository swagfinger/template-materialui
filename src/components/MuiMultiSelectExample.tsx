import { TextField, Box, MenuItem } from "@mui/material";
import React, { useState } from "react";

type MuiSelectProps = {};

export const MuiMultiSelectExample: React.FC<MuiSelectProps> = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log(countries);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width='250px'>
      <TextField
        label='select countries'
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{ multiple: true }}
      >
        <MenuItem value='US'>US</MenuItem>
        <MenuItem value='CA'>Canada</MenuItem>
        <MenuItem value='EN'>England</MenuItem>
      </TextField>
    </Box>
  );
};
