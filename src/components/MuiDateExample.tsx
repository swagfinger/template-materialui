import { Stack, TextField, TextFieldProps, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useState } from "react";

export const MuiDateExample = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);

  console.log("selectedDate: ", selectedDate);
  console.log(
    "SelectedTime: ",
    selectedTime && selectedTime.toLocaleTimeString()
  );
  console.log("SelectedDateTime: ", selectedDateTime);
  return (
    <Stack spacing={2}>
      <Typography variant='h5'>Date picker</Typography>
      <Stack spacing={4} sx={{ width: "250px" }}>
        <DatePicker
          label='Date Picker'
          renderInput={(params: TextFieldProps) => <TextField {...params} />}
          value={selectedDate}
          onChange={(newValue) => {
            setSelectedDate(newValue);
          }}
        />
      </Stack>

      <Typography variant='h5'>Time picker</Typography>
      <Stack spacing={4} sx={{ width: "250px" }}>
        <TimePicker
          label='Time Picker'
          renderInput={(params: TextFieldProps) => <TextField {...params} />}
          value={selectedTime}
          onChange={(newValue) => {
            setSelectedTime(newValue);
          }}
        />
      </Stack>

      <Typography variant='h5'>Datetime picker</Typography>
      <Stack spacing={4} sx={{ width: "250px" }}>
        <DateTimePicker
          label='Date Time Picker'
          renderInput={(params: TextFieldProps) => <TextField {...params} />}
          value={selectedDateTime}
          onChange={(newValue) => {
            setSelectedDateTime(newValue);
          }}
        />
      </Stack>
    </Stack>
  );
};
