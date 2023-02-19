import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/Main.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* import NotFoundPage from "./pages/notfoundpage";*/
import About from './pages/About.jsx';
import CardView from './pages/CardView';

const root = ReactDOM.createRoot(document.getElementById('root'));

const links = [
  {
    name: "Pokédex",
    path: "/pokemon/"
  }
]
/*
{
    name: "About",
    path: "/about/"
  }
*/

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar links={links} />
      <Routes>
        <Route path="/pokemon/" element={<CardView />} />
        { /* <Route path="/about/" element={<About />} /> */}
        <Route path="*" element={<CardView />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);