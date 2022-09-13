import * as React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

import { Link } from 'react-router-dom';

const userName = "田中太郎";
const dayOfWeek = [ "日", "月", "火", "水", "木", "金", "土" ]

const templateTitle = (function() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate() + 1;
  const day = now.getDate();
  const dayOfWeekStr = dayOfWeek[now.getDay()];	
  return `${year}年${month}月${date}日 ${userName} 日報`
})();

const templateContent = `お疲れさまです。
${userName}です。
本日の日報をご報告致します。

◯本日の作業内容

◯次回の作業内容

◯業務振り返り

◯気になっていること
`;

const InputForm = () => {
  const [title, setTitle] = React.useState(templateTitle)
  const [content, setContent] = React.useState(templateContent)

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleContentChange = (e) => {
    setContent(e.target.value);
  }
  return (
    <Paper
      component="form"
      noValidate
      autoComplete="off"
      marginTop={3}
      sx={{ bgColor: 'white' }}
    >
      <Stack spacing={3}>
        <TextField 
          id="outlined-basic" 
          label="記事タイトル" 
          variant="outlined" 
          onChange={handleTitleChange}
          value={title}
        />
        <TextField 
          id="outlined-basic" 
          label="記事の内容"
          variant="outlined" 
          multiline
          rows={12}
          onChange={handleContentChange}
          value={content}
        />
        <Box align="center">
          <Button 
            variant="contained"
            component={Link}
            to="/daily-report"
            sx={{ width: "50%" }}
          >
            作成する
          </Button>
        </Box>
      </Stack>
    </Paper>
  )
};


export default function NewPost() {

  return (
    <>
      <Typography variant="h5" align="left" marginBottom={5}>新規記事の作成</Typography>
      <InputForm />
    </>
  )
}