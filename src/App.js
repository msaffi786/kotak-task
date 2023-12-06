import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Layout><Home /></Layout>} />
        <Route path="/post/:id" element={<Layout><PostDetail /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
