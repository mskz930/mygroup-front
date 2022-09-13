import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';


export default function Timeline() {

  return (
    <Card sx={{ padding: 2 }}>
      <Typography
        variant="body1"
        align="left"
        sx={{ marginBottom: 1 }}
      >
        タイムライン
      </Typography>
      <div>
        <TextField
          id="timeline-input"
          multiline
          rows={3}
          fullWidth
          sx={{ marginBottom: 1 }}
        />
        <Box textAlign="right">
          <Button>書き込む</Button>
        </Box>
      </div>

      <div>
        
      </div>
    </Card>
  )
}