import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';


const MenuButton = styled(Button)(({ theme }) => ({
  borderRadius: '18px',
  margin: '2px 5px',
  '&.Mui-disabled': {
    color: 'white',
    backgroundColor: theme.palette.primary.main
  }
}));


const menuButtonList = [
  { name: 'ホーム', link: '/' },
  { name: 'タイムライン', link: '/daily-report' },
  { name: 'チャット', link: '/chat' },
]; 


export default function NavBar({isLoggedIn}) {
  const [currentLink, setCurrentLink] = React.useState(window.location.pathname)
  const handleClick = (newLink) => () => {
    setCurrentLink(newLink);
  }

  return (
    <Box sx={{ flexGrow: 1 }} id="appbar">
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
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
      </AppBar>
    </Box>
  );
}