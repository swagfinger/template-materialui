import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export const MuiListExample = () => {
  return (
    <>
      <Typography variant='h5'>Basic List</Typography>
      <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
        <List>
          <ListItem>
            <ListItemText primary='List item 1' />
          </ListItem>
          <ListItem>
            <ListItemText primary='List item 2' />
          </ListItem>
          <ListItem>
            <ListItemText primary='List item 3' />
          </ListItem>
        </List>
      </Box>

      <Typography variant='h5'>Icon List</Typography>
      <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
        <List>
          <ListItem>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary='List item 1' />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary='List item 2' />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary='List item 3' />
          </ListItem>
        </List>
      </Box>

      <Typography variant='h5'>Avatar List</Typography>
      <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
        <List>
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary='List item 1' secondary='secondary text' />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary='List item 2' secondary='secondary text' />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary='List item 3' secondary='secondary text' />
          </ListItem>
        </List>
      </Box>

      <Typography variant='h5'>Clickable List</Typography>
      <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary='List item 1' />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary='List item 2' />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary='List item 3' />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
};
