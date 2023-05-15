import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import  HomeIcon from '@mui/icons-material/Home';

import '../styles/menu.css'

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);
  const options = [{display:'Home' , link:'/home'}, {display:'About Us' , link:'/about'}, {display:'My Account' , link:'/account'}]

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const WhichIcon = (name) => {
    switch (name) {
        case 'Home':
            return <HomeIcon/>
            break;
        case 'About Us':
            return <ImportContactsIcon/>
            break;
        case 'My Account':
            return <PersonIcon/>
            break;
    
        default:
            break;
    }
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {options.map((text, index) => (
        <Link key={index} to = {text.link}>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    {WhichIcon(text.display)}
                </ListItemIcon>
                <ListItemText primary={text.display} />
                </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <MenuIcon onClick={toggleDrawer(true)}/>
        <Drawer
        className='drawer'
        anchor={'right'}
        open={state}
        onClose={toggleDrawer(false)}
        >
        {list()}
        </Drawer>
    </div>
  );
}