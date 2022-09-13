import * as React from 'react';
import Avatar from '@mui/material/Avatar';

export default function UserAvatar({userName}) {

  return (
    <Avatar
    >
      {userName[0]}
    </Avatar>
  )
}