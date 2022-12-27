import { Stack, Link, Typography } from "@mui/material";

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction='row' m={4}>
      <Typography variant='body1'>
        <Link href='#' color='primary' underline='none'>
          Link
        </Link>
      </Typography>
    </Stack>
  );
};
