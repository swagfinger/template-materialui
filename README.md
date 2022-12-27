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

## Button && Button Group

3 variants of button

- text
- contained
- outlined

- you can add href attribute to text variant eg. <Button variant='text' href="http://google.com">Text</Button> which changes the button to <a> tag
- use themeing to style buttons eg. color='primary'
- can control size of buttons size='small', it needs to be in a <Stack display="block">
- can add icons to buttons mui.com/components/icons - must pick your icons, import the icon then:
- startIcon={<SendIcon/>} endIcon={<SendIcon/>} defines position icon will appear inside button (before/after) text
- add buttons without text by importing {IconButton} from '@mui/material';
- button props: disableRipple, disableElevation
- button group is a wrapper element that allows you to group buttons into a set, the 'variant's should be on the ButtonGroup.
- you can change the orientation to 'vertical' or 'horizontal' using 'orientation' prop
- should add aria label to ButtonGroup eg. aria-label="alignment button group"
- ButtonGroup: add onChange to ToggleButtonGroup
- ButtonGroup: value={} comes from state <string[]> which is updated by ToggleButtonGroup's onChange() event
- you can set orientage on ButtonGroup
- adding 'exclusive' prop allows single selection at a time - state stores now <string | null> with default (null)
- the onChange() handler type is updated: updatedFormats:string | null

```tsx
import { Button } from "@mui/material";

// 3 variants
...
<Button variant='text'>Text</Button>
<Button variant='contained'>Contained</Button>
<Button variant='outlined'>Outlined</Button>

<Button variant='contained' color='primary'>Primary</Button>
<Button variant='contained' color='secondary'>Secondary</Button>
<Button variant='contained' color='error'>Error</Button>
<Button variant='contained' color='warning'>Warning</Button>
<Button variant='contained' color='info'>Info</Button>
<Button variant='contained' color='success'>Success</Button>

<ButtonGroup variant="contained">
<Button>Left</Button>
<Button>Center</Button>
<Button>Right</Button>
</ButtonGroup>

```

## Spacing

- wrap groups of components in <Stack> elements to control spacing

- import Stack
- use <Stack spacing={2} direction='row'>

```tsx
import { Stack } from "@mui/material";
```

```css
.App {
  padding: 4rem;
}
```

## Theming

mui.com/customization/default-theme

## Icons

mui.com/components/icons

```
npm i @mui/icons-material
```

## TextField

- import a Box and specify a width , then in the TextField set prop 'fullWidth'

## Select

## RadioButton

## Checkbox

## Switch

## Rating

## Autocomplete

## Box

- wrapper component with access to theme - for most of css utility needs
- box component accepts 'component' prop to use another tag than 'div'
- box allows 'sx' property which has access to the theme
- add styles without naming the styles
- properties you can apply: http://mui.com/system/properties

## Stack

- useful for managing layout in 1 dimension - vertical or horizontal
- direction - column (default), row, row-reverse, column-reverse
- spacing - 1 unit default is 16px
- import Divider to add divider eg. ```<Stack divider={<Divider orientation='vertical' flexItem />}></Stack>`

## Grid

- 2 dimentional and responsive layout
- grid uses flexbox under the hood
- 5 breakpoints each corresponding to certain device width
- grid has 12 columns
- grid has 2 variations
  - parent - <Grid container>
  - children - <Grid item>
- xs (mobile), sm (tablet), md (desktop), lg, xl (larger monitors)
- assign integer values to each breakpoint to indication how many of 12 columns to occupy
- spacing={2},
- rowSpacing={2}, columnSpacing={2} (when children of Stack component - alignment is fine)

## Paper

- used for background (white), slight border, shadow
- Card component uses the paper component

## Card

## Accordion

## Table

## Navbar

- import Menu and MenuItem

1. add id on button that will open the menu
2. when this button is clicked , we set a state to save the html element which will become the anchor for the menu
3. on the Menu component, set the 'ancholEl' property to the state in step 2.
4. the anchorEl state is used to test if the menu should be open - open is true when button is clicked
5. 'open' is set on Menu component's open sate
6. 'open' is also used for accessibility in our component
7. add onClose handler which resets anchorEl
8. buttons can get a endIcon (eg. arrow down) to hint
9. you can position where the menu will be anchored. menu positioning - mui.com/components/popover

## Link

- link is primary color by default
- can set underline of link to 'hover', "none"
- wrap Link tag with Typography - variant prop, same as typography - default value is inherit
