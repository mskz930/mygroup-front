import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import ChatIcon from '@mui/icons-material/Chat';


import { styled } from '@mui/material/styles';
import { Link, Outlet } from 'react-router-dom';
import { MenuList } from '@mui/material';


const drawerWidth = 200;

const MenuButton = styled(Button)(({ theme }) => ({
  borderRadius: '18px',
  margin: '2px 5px',
  '&.Mui-disabled': {
    color: 'white',
    backgroundColor: theme.palette.primary.main
  }
}));


const menuList = [
  { name: 'ホーム', link: '/mypage', icon: <HomeIcon /> },
  { name: '記事', link: '/mypage/daily-report', icon: <ViewTimelineIcon /> },
  { name: 'チャット', link: '/mypage/chat', icon: <ChatIcon /> },
]; 


export default function MyPage() {
  const isLoggedIn = false;
  const [currentLink, setCurrentLink] = React.useState(window.location.pathname)
  const handleClick = (newLink) => () => {
    setCurrentLink(newLink);
  }

  const drawer = (
    <div >
      <Toolbar />
      <List>
        {menuList.map((menu) => (
          <ListItem
            key={menu.name}
            disablePadding
          >
            <ListItemButton
              component={Link}
              to={menu.link}
            >
              <ListItemIcon>
                {menu.icon}
              </ListItemIcon>
              <ListItemText primary={menu.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar 
        id="appbar" 
        position="fixed" 
        sx={{ 
          backgroundColor: 'white', 
          color: 'black',
          width: `calc(100vw - ${drawerWidth}px)`
        }}
      >
        <Toolbar>
          <Typography 
            variant="h6" 
            component="div" 
            align="left" 
            flexGrow={1}
            color="primary.main"
          >
            Group App
          </Typography>
          <IconButton>
            <NotificationsIcon sx={{ color: 'primary.main' }}/>
          </IconButton>
          {isLoggedIn
          ? <Button>Logout</Button>
          : <Button>Login</Button>
          }
          
        </Toolbar>
        {/*
<Box sx={{ display: 'flex', flexGrow: 'column' }}>
          {menuButtonList.map((menu, index) => (
            <MenuButton
              key={index}
              disabled={menu.link===currentLink}
              component={Link}
              to={menu.link}
              onClick={handleClick(menu.link)}
            >{menu.name}</MenuButton>
          ))}
        </Box>
         */}
        
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth },  flexShrink: { sm: 0 }}}
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box 
        component="main"
        sx={{ flexGrow: 1,  width: { sm: `calc(100vw - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}