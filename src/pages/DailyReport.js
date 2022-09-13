import * as React from 'react';

/* material ui */
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
/* react-router-dom */
import { Link } from 'react-router-dom';
/* components */
import UserAvatar from '../components/UserAvatar.js';
import MenuBar from '../components/MenuBar.js';

import CreatePostModal from '../components/CreatePostModal.js';

const articles = [
  { author: '大島嵩弘', title: "Title", content: "contentcontentcontentcontentcontentcontent" },
  { author: '大島嵩弘', title: "Title", content: "contentcontentcontentcontentcontentcontent" },
  { author: '大島嵩弘', title: "Title", content: "contentcontentcontentcontentcontentcontent" },
  { author: '大島嵩弘', title: "Title", content: "contentcontentcontentcontentcontentcontent" },
]

const body = 
`お疲れさまです。
8月30日(火)の日報になります。

[本日の作業]

[次回の作業]

[ひとこと]

以上
`

const CommentBox = () => {
  const [visible, setVisible] = React.useState(false);
  const handleClick = () => {
    setVisible(!visible);
  }
  return (
    <Box textAlign="left" sx={{ marginTop: '10px' }}>
      <Button
        startIcon={<ThumbUpIcon />}
      >
        いいね(0)
      </Button>
      <Button
        startIcon={<CommentIcon />}
        onClick={handleClick}>
        コメント(0件)
      </Button>
      <div style={{ display: visible ? 'block' : 'none' }}>
        <textarea rows="5" style={{ width: '100%' }} />
        <Box textAlign="right">
          <Button variant="contained">書き込む</Button>
        </Box>
      </div>

    </Box>
  )
}

const Article = ({ author, title, content }) => {
  return (
    <Card sx={{ padding: 3, margin: '30px 0' }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '16px'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <UserAvatar userName={author} />
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '16px'
          }}>
            <Typography variant="body2" align="left">
              {author}
            </Typography>
            <Typography variant="body2" align="left">
              2022/8/30 12:00
            </Typography>
          </Box>

        </Box>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>
      <Box 
        textAlign="left"
        sx={{ 
          display: 'flex', 
          alignItems: 'center',
          marginBottom: '15px'
        }}
      >
        <LocalOfferIcon />
        <Chip 
          label="日報" 
          color="primary" 
          variant="outlined" 
          size="small" 
          sx={{ marginLeft: '6px' }}
        />
      </Box>
      <Typography
        variant="body1"
        align="left"
        sx={{
          display: 'block',
          marginTop: '5px',
          marginBottom: '5px',
          marginLeft: '10px',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-end'
        }}
      >
       {body}
      </Typography>
      <Box textAlign="left">
        <Button component="a" sx={{ padding: 0 }}>...続きを見る</Button>
      </Box>
      <CommentBox />
    </Card>
  )
}



export default function DailyReport() {
  return (
    <Container sx={{ width: '700px' }}>
      <MenuBar />
      <Box textAlign="right">
        <CreatePostModal />
      </Box>
      {articles.map((article, index) => (
        <Article
          author={article.author}
          title={article.title}
          content={article.content}
          key={index}
        />
      ))}
    </Container>
  )
}