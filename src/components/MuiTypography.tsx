import { Typography } from "@mui/material";

const MuiTypography = () => {
  return ( 
    <div>
      {/* rendered as H tags */}
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>
      {/* variants of h6 */}
      <Typography variant="subtitle1">Subtitle1</Typography>
      <Typography variant="subtitle2">Subtitle2</Typography>
      <br/>
      {/* variants of body text - body1 is same as default (with no variant) rendered as <p>*/}
      <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptatibus a tempore deserunt esse vel asperiores tempora dolorem doloremque nobis, temporibus ipsum veniam pariatur consequuntur illo. Vero tempora eum eveniet!</Typography>
      <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptatibus a tempore deserunt esse vel asperiores tempora dolorem doloremque nobis, temporibus ipsum veniam pariatur consequuntur illo. Vero tempora eum eveniet!</Typography>
      <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quos veniam sequi dolorum nesciunt vel totam vero illum, ut harum voluptates amet eos perferendis eveniet commodi nisi eum optio facere!</Typography>
      
    </div>
   );
}
 
export default MuiTypography;