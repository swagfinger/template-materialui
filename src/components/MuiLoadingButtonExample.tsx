import { Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";

export const MuiLoadingButtonExample = () => {
  return (
    <>
      <Typography variant='h5'>Basic Loading Button</Typography>
      <Stack direction='row' spacing={2}>
        <LoadingButton variant='outlined'>Submit</LoadingButton>
        <LoadingButton loading variant='outlined'>
          Submit
        </LoadingButton>
      </Stack>

      <Typography variant='h5'>
        Loading Button with loading indicator
      </Typography>
      <Stack direction='row' spacing={2}>
        <LoadingButton variant='outlined' loadingIndicator='loading...'>
          Fetch data
        </LoadingButton>
        <LoadingButton loading variant='outlined' loadingIndicator='loading...'>
          Fetch data
        </LoadingButton>
      </Stack>

      <Typography variant='h5'>Loading Button with Icon</Typography>
      <Stack direction='row' spacing={2}>
        <LoadingButton
          variant='outlined'
          loadingPosition='start'
          startIcon={<SaveIcon />}
        >
          Save
        </LoadingButton>
        <LoadingButton
          loading
          variant='outlined'
          loadingPosition='start'
          startIcon={<SaveIcon />}
        >
          Save
        </LoadingButton>
      </Stack>
    </>
  );
};
