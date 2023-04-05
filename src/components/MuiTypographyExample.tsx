import { Typography, Stack } from "@mui/material";
type MuiTypographyProps = {};
export const MuiTypographyExample: React.FC<MuiTypographyProps> = () => {
  return (
    <div>
      <Typography variant='h5'>heading h1,h2,h3,h4,h5,h6</Typography>
      {/* rendered as H tags */}
      <Stack spacing={2} direction='row'>
        <Typography variant='h1'>h1 Heading</Typography>
        <Typography variant='h2'>h2 Heading</Typography>
        <Typography variant='h3'>h3 Heading</Typography>
        <Typography variant='h4'>h4 Heading</Typography>
        <Typography variant='h5'>h5 Heading</Typography>
        <Typography variant='h6'>h6 Heading</Typography>
      </Stack>
      {/* variants of h6 */}
      <br />
      <Typography variant='h5'>variants of h6: subtitle1, subtitle2</Typography>
      <Stack spacing={2}>
        <Typography variant='subtitle1'>Subtitle1</Typography>
        <Typography variant='subtitle2'>Subtitle2</Typography>
      </Stack>
      <br />
      {/* variants of body text - body1 is same as default (with no variant) rendered as <p>*/}
      <Typography variant='h5'>
        variant for body text: default, body1, body2. by default they are
        paragraph elements
      </Typography>
      <Stack spacing={2}>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          voluptatibus a tempore deserunt esse vel asperiores tempora dolorem
          doloremque nobis, temporibus ipsum veniam pariatur consequuntur illo.
          Vero tempora eum eveniet!
        </Typography>
        <Typography variant='body1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          voluptatibus a tempore deserunt esse vel asperiores tempora dolorem
          doloremque nobis, temporibus ipsum veniam pariatur consequuntur illo.
          Vero tempora eum eveniet!
        </Typography>
        <Typography variant='body2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quos
          veniam sequi dolorum nesciunt vel totam vero illum, ut harum
          voluptates amet eos perferendis eveniet commodi nisi eum optio facere!
        </Typography>
      </Stack>
    </div>
  );
};
