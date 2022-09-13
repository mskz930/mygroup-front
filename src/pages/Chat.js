import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Typography from '@mui/material/Typography';

import UserAvatar from '../components/UserAvatar.js';

const userList = [...Array(20).keys()];

const styles = (theme) => ({
  toolbar: theme.mixins.toolbar,
});

const SideMenuList = () => {
  const [height, setHeight] = React.useState(0)

  React.useEffect(() => {
    const newHeight = document.getElementById("appbar").offsetHeight;
    console.log(newHeight);
    if (newHeight) {
      setHeight(newHeight);
    }
  }, [height])

  return (
    <Box sx={(theme) => ({
      width: '450px',
      margin: '0',
      padding: '0',
      height: `calc(100vh - ${height}px)`,
      overflow: 'auto',
    })}>
      <List>
        {userList.map((item) => (
          <ListItem disablePadding key={item}>
            <ListItemButton>
              <ListItemIcon>
                <UserAvatar userName="大島一哉" />
              </ListItemIcon>
              <ListItemText>
                大島嵩弘
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

const chatLog = [
  { sender: '大島一哉', text: 'こんにちは' },
  { sender: '渡部建', text: 'こんにちは' },
  { sender: '大島一哉', text: 'いつ集まりますか？' }
];


const ChatWindow = () => {
  const me = "大島一哉";

  return (
    <div style={{
      width: '100%',
      height: '100%'
    }}>
      <Box sx={{ padding: 3 }}>
        <Paper sx={{ padding: 2 }}>
          {chatLog.map((chat, index) => (
            <Box key={index}>
              <Box sx={{ display: 'flex', justifyContent: chat.sender===me ? 'end' : 'start' }}>
                <UserAvatar userName={chat.sender} />
                <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                  <Typography variant="body2" align="left">
                    大島一哉
                  </Typography>
                  <Typography variant="body2" align="left">
                    10:00
                  </Typography>
                  <Typography
                    variant="body1"
                    align="left"
                    sx={{
                      margin: 1,
                      padding: 1,
                      minWidth: '150px',
                      borderRadius: '10px',
                      border: '1px solid'
                    }}
                  >
                    {chat.text}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Paper>
      </Box>
    </div>
  )
}


export default function Chat() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <SideMenuList />
      <ChatWindow />
    </Box>
  )
}