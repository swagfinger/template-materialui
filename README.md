# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

```
npx create-react-app react-mui-demo --template typescript
```

<!-- install material ui -->

```
npm i @mui/material @emotion/react @emotion/styled
```

## Typography

- under typography - https://mui.com/material-ui/customization/default-theme/
- you can use variant as "size" but then use property component="h1"
- eg. <Typography variant='h4' component='h1'> render a h1 with h4 styling
- use 'gutterBottom' gives bottomMargin, larger variants have larger margins

```tsx
import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      {/* rendered as H tags h1,h2,h3,h4,h5,h6*/}
      <Typography variant='h1'>h1 Heading</Typography>
      <Typography variant='h2'>h2 Heading</Typography>
      <Typography variant='h3'>h3 Heading</Typography>
      {/* render a h1 with h4 styling*/}
      <Typography variant='h4' component='h1' gutterBottom>
        h4 Heading
      </Typography>

      {/* variants of h6 */}
      <Typography variant='subtitle1'>Subtitle1</Typography>
      <Typography variant='subtitle2'>Subtitle2</Typography>

      {/* variants of body text - rendered as <p>*/}
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
        voluptatibus a tempore deserunt esse vel asperiores tempora dolorem
        doloremque nobis, temporibus ipsum veniam pariatur consequuntur illo.
        Vero tempora eum eveniet!
      </Typography>
      {/* body1 is same as default (with no variant) */}
      <Typography variant='body1'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
        voluptatibus a tempore deserunt esse vel asperiores tempora dolorem
        doloremque nobis, temporibus ipsum veniam pariatur consequuntur illo.
        Vero tempora eum eveniet!
      </Typography>
      <Typography variant='body2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quos
        veniam sequi dolorum nesciunt vel totam vero illum, ut harum voluptates
        amet eos perferendis eveniet commodi nisi eum optio facere!
      </Typography>
    </div>
  );
};
```
