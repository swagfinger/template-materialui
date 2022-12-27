import { Box, TextField, TextFieldProps } from "@mui/material";
import { DateRangePicker, DateRange } from "@mui/x-date-pickers-pro";
import { useState } from "react";

export const MuiDateRange = () => {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  return (
    <Box width='500px'>
      <DateRangePicker
        startText='check-in'
        endText='Check-out'
        value={value}
        onChange={(newValue: DateRange<Date>) => {
          setValue(newValue);
        }}
        renderInput={(startProps: TextFieldProps, endProps: TextFieldProps) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}>to</Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </Box>
  );
};
