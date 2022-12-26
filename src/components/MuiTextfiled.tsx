import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
type MuiTextFieldProps = {};

export const MuiTextField: React.FC<MuiTextFieldProps> = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={2}>
        <TextField label='Name' variant='outlined' />
        <TextField label='Name' variant='filled' />
        <TextField label='Name' variant='standard' />
      </Stack>
      <Stack spacing={2}>
        {/* initial state should not be validated until touched */}
        <TextField
          label='Form input'
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
        />
        <TextField label='Name' helperText='this is helper text' />
        <TextField label='Password' type='password' />
        <TextField label='Disabled' disabled />
        <TextField
          label='Read only'
          InputProps={{ readOnly: true }}
          defaultValue='this is readonly'
        />
      </Stack>
      <Stack spacing={2}>
        <TextField
          label='Amount'
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
          }}
        />
        <TextField
          label='Weight'
          InputProps={{
            endAdornment: <InputAdornment position='end'>kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
