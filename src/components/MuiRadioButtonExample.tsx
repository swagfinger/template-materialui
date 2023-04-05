import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Stack,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";

type MuiRadioButtonProps = {};

export const MuiRadioButtonExample: React.FC<MuiRadioButtonProps> = () => {
  const [value, setValue] = useState("");

  console.log("value: ", value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Box>
      <FormControl error>
        <FormLabel id='job-exerience-group-label'>
          Years of experience
        </FormLabel>

        <Stack spacing={2}>
          <RadioGroup
            name='job-experience-group'
            aria-labelledby='job-experience-group-label'
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel control={<Radio />} label='0-2' value='0-2' />
            <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
            <FormControlLabel control={<Radio />} label='6-10' value='6-10' />
          </RadioGroup>
          <FormHelperText>Invalid selection</FormHelperText>

          <RadioGroup
            name='job-experience-group'
            aria-labelledby='job-experience-group-label'
            value={value}
            onChange={handleChange}
            row
          >
            <FormControlLabel control={<Radio />} label='0-2' value='0-2' />
            <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
            <FormControlLabel control={<Radio />} label='6-10' value='6-10' />
          </RadioGroup>
          <FormHelperText>Invalid selection</FormHelperText>
        </Stack>
      </FormControl>
    </Box>
  );
};
