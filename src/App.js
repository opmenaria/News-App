import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 8
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="general" country="in" category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="entertainment" country="in" category="entertainment" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="health" country="in" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="science" country="in" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="sports" country="in" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="technology" country="in" category="technology" />} />
        </Routes>
      </div>
    </>
  )
}

export default App
