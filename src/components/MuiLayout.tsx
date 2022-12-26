import { Box, Stack, Divider, Typography, Grid } from "@mui/material";

export const MuiLayout = () => {
  return (
    <>
      <Typography gutterBottom variant='h5' component='div'>
        Stack
      </Typography>
      <Stack
        sx={{ border: "1px solid" }}
        direction='row'
        spacing={2}
        divider={<Divider orientation='vertical' flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Hello
        </Box>
        <Box
          display='flex'
          height='100px'
          width='100px'
          bgcolor='success.light'
          p={2}
        ></Box>
      </Stack>

      <Stack spacing={2}>
        <Typography gutterBottom variant='h5' component='div'>
          Grid
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <Box bgcolor='primary.light' p={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Box bgcolor='primary.light' p={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Box bgcolor='primary.light' p={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box bgcolor='primary.light' p={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
      </Stack>
      <Stack spacing={2}>
        <Grid container rowSpacing={1} columnSpacing={2}>
          <Grid item xs={12} sm={6}>
            <Box bgcolor='primary.light' p={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box bgcolor='primary.light' p={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box bgcolor='primary.light' p={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box bgcolor='primary.light' p={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};
