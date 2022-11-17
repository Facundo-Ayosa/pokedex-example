import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './modules/navbar';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/home';
import NotFoundPage from "./pages/notfoundpage";
import About from './pages/About';
import reportWebVitals from './reportWebVitals';
import Test from './pages/Test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/pokedex-example/" element={<Home />} />
        <Route path="/pokedex-example/about" element={<About />} />
        <Route path="/pokedex-example/test" element={<Test />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
