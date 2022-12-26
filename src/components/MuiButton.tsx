import React, { useState } from "react";

import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

type MuiButtonProps = {};

export const MuiButton: React.FC<MuiButtonProps> = () => {
  const [formats, setFormats] = useState<string[]>([]);

  console.log(formats);

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string,
    index: number
  ) => {
    const newFormats = [...formats];
    newFormats[index] = updatedFormats;
    setFormats(newFormats);
  };

  return (
    <Stack spacing={4}>
      <Typography variant='h5'>variant</Typography>
      <Stack spacing={2} direction='row'>
        <Button variant='text' href='http://google.com'>
          Text
        </Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </Stack>
      <Typography variant='h5'>button color</Typography>
      <Stack spacing={2} direction='row'>
        <Button variant='text' color='primary'>
          Primary
        </Button>
        <Button variant='text' color='secondary'>
          Secondary
        </Button>
        <Button variant='text' color='error'>
          Error
        </Button>
        <Button variant='text' color='warning'>
          Warning
        </Button>
        <Button variant='text' color='info'>
          Info
        </Button>
        <Button variant='text' color='success'>
          Success
        </Button>
      </Stack>
      <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'>
          Primary
        </Button>
        <Button variant='contained' color='secondary'>
          Secondary
        </Button>
        <Button variant='contained' color='error'>
          Error
        </Button>
        <Button variant='contained' color='warning'>
          Warning
        </Button>
        <Button variant='contained' color='info'>
          Info
        </Button>
        <Button variant='contained' color='success'>
          Success
        </Button>
      </Stack>
      <Stack spacing={2} direction='row'>
        <Button variant='outlined' color='primary'>
          Primary
        </Button>
        <Button variant='outlined' color='secondary'>
          Secondary
        </Button>
        <Button variant='outlined' color='error'>
          Error
        </Button>
        <Button variant='outlined' color='warning'>
          Warning
        </Button>
        <Button variant='outlined' color='info'>
          Info
        </Button>
        <Button variant='outlined' color='success'>
          Success
        </Button>
      </Stack>

      <Typography variant='h5'>button size</Typography>
      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' size='small'>
          Small
        </Button>
        <Button variant='contained' size='medium'>
          Medium
        </Button>
        <Button variant='contained' size='large'>
          Large
        </Button>
      </Stack>

      <Typography variant='h5'>button icon</Typography>
      <Stack spacing={2} direction='row'>
        <Button variant='contained' startIcon={<SendIcon />} disableRipple>
          Send
        </Button>
        <Button variant='contained' endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <IconButton aria-label='send' color={"error"} size='small'>
          <SendIcon />
        </IconButton>
      </Stack>

      <Typography variant='h5'>button group</Typography>
      <Stack direction='row'>
        <ButtonGroup variant='contained'>
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction='row'>
        <ButtonGroup variant='outlined'>
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction='row'>
        <ButtonGroup variant='text'>
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Typography variant='h5'>button group orientation</Typography>
      <Stack direction='row' spacing={2}>
        <ButtonGroup
          variant='contained'
          orientation='vertical'
          aria-label='alignment button group'
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>

        <ButtonGroup
          variant='outlined'
          orientation='vertical'
          aria-label='alignment button group'
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>

        <ButtonGroup
          variant='text'
          orientation='vertical'
          aria-label='alignment button group'
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Typography variant='h5'>toggle button</Typography>
      <Stack direction='row' spacing={2}>
        <ToggleButtonGroup
          onChange={(_event, updatedFormats) =>
            handleFormatChange(_event, updatedFormats, 0)
          }
          aria-label='text formatting'
          value={formats[0]}
          size='small'
          color='success'
        >
          <ToggleButton value='bold'>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value='italic'>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value='underlined'>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack direction='row' spacing={2}>
        <ToggleButtonGroup
          onChange={(_event, updatedFormats) =>
            handleFormatChange(_event, updatedFormats, 1)
          }
          aria-label='text formatting'
          value={formats[1]}
          size='small'
          color='success'
          exclusive
          orientation='vertical'
        >
          <ToggleButton value='bold'>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value='italic'>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value='underlined'>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
