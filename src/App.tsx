import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Lines from './components/header/lines';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { useDispatch } from 'react-redux';
import { infoAction } from './reducers/info';
import { data } from './data/data';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Response } from './types/';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    data
      .then((response: any) => {
        response.map((post: string[]) => {
          dispatch(infoAction.addInfo(post));
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="App">
      <HelmetProvider>
        <Router>
          <Header />
          <Lines />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;
