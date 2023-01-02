import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/Main.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/notfoundpage";
import About from './pages/About';
import Home from './pages/Home';
import Test from './pages/Test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/pokemon/" element={<Home />} />
        <Route path="/pokemon/about" element={<About />} />
        <Route path="/pokemon/test" element={<Test />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);