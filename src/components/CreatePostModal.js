import * as React from 'react';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { Link } from 'react-router-dom';
import NewPost from '../pages/NewPost.js';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '800px',
  padding: '30px',
  backgroundColor: 'white',
  borderRadius: '8px',
  p: 4,
};

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

const InputForm = ({handleClose}) => {
  const [content, setContent] = React.useState(templateContent)

  const handleContentChange = (e) => {
    setContent(e.target.value);
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      marginTop={3}
      sx={{ bgColor: 'white' }}
    >
      <Stack spacing={3}>
        <TextField 
          id="outlined-basic" 
          label="記事の内容"
          variant="outlined" 
          multiline
          rows={12}
          onChange={handleContentChange}
          value={content}
        />
        <Box align="right">
          <Button
            color="error"
            size="large"
            onClick={handleClose}
          >
            キャンセル
          </Button>
          <Button 
            size="large"
            component={Link}
            to="/daily-report"
            onClick={handleClose}
          >
            作成する
          </Button>
        </Box>
      </Stack>
    </Box>
  )
};
export default function CreatePostModal() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        startIcon={<AddCircleIcon />}
        onClick={handleClick}>
        記事を作成
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div style={style}>
          <Typography variant="h5" align="left" marginBottom={5}>新規記事の作成</Typography>
          <InputForm handleClose={handleClose} />
        </div>
      </Modal>
    </div>
  );
}