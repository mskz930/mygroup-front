import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Timeline from '../components/Timeline.js';

export default function Home() {

  return (
    <Box sx={{ mx: 10, marginTop: 5, marginBottom: 2 }}
    >
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Timeline />
        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper>
                <Typography>
                  状態
                </Typography>
                <Box>
                  出社
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper>
                <div>
                  <Typography
                    component="h6"
                    variant="body1"
                  >
                    本日の予定
                  </Typography>

                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}