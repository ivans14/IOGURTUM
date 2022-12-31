import * as React from 'react';
import {tokens, colorModeContext} from '../theme.tsx';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './drawer.css';
import DehazeIcon from '@mui/icons-material/Dehaze';
import logo from '../../assets/logo.png';
import {useTheme} from '@mui/material';
import {IconButton} from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

export default function Drawer() {
    const [open, setopen] = React.useState(false);
    const toggleDrawer = () => {
        setopen(!open);
    };
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = React.useContext(colorModeContext);

    const list = () => (
        <Box
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );


    return (
    <div className='drawer'>
        <Button onClick={toggleDrawer} className={'button'}>
            <DehazeIcon className='drawer_icon'/>
        </Button>
        <SwipeableDrawer
            open={open}
            onClose={toggleDrawer}
            onOpen={toggleDrawer}
            PaperProps={{sx: {
                backgroundColor: colors.purple[900],
                width: '60%',
            }}}
        >
            {list()}
        </SwipeableDrawer>
        <div className='logo'>
            <img src={logo} className={'image'}/>
        </div>
        <div className='false'>
            <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? (
                <DarkModeOutlinedIcon />
            ) : (
                <LightModeOutlinedIcon />
            )}
            </IconButton>
        </div>
    </div>
    );
}
