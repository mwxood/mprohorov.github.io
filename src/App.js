import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Lines from './components/header/lines'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { useDispatch } from 'react-redux';
import { infoAction } from './reducers/info'
import { data } from './data/data'
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    let isMoutned = false
    data.then(resposne => {
      console.log(resposne)
      resposne.map(post => {

        if(isMoutned) {
          dispatch(infoAction.addInfo(post))
        }
    })
    }).catch((err) => {
      console.log(err.message)
    })

    return() => {
      isMoutned = true
    }

  }, [])

  return (
    <div className="App">
      <Router>
        <Header />
        <Lines />
   
        <Routes>
          <Route exact  path="/" element={<Home />} />
          <Route exact  path="/about" element={<About />} />
          <Route exact  path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
