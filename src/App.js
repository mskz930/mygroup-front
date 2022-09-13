import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MyPage from './components/MyPage.js';

import NavBar from './components/NavBar.js';

import Home from './pages/Home.js';
import DailyReport from './pages/DailyReport.js';
import NewPost from './pages/NewPost';
import Chat from './pages/Chat.js';



export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            
            <Route path="/mypage" element={<MyPage />}>
              <Route index element={<Home />} />
              <Route path="daily-report" element={<DailyReport />} />
              <Route path="daily-report/new" element={<NewPost />} />
              <Route path="chat" element={<Chat />} />
            </Route>
          </Routes>
        
      </BrowserRouter>
    </div>
  );
}

