
import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Carousel from './components/Carousel';
import FeatureGrid from './components/Featuregrid';
// import Home from './modules/home/Home';
// import Shop from './modules/shop/Shop';
// import Cart from './modules/cart/Cart';


function App() {
  return (
    // <Router>
    <div className="App">
    <Navbar/>
    <Carousel/>
    <FeatureGrid/>

      {/* <Routes>
        
        <Route path = '/' element = {<Home />}/>
        <Route path = '/shop' element = {<Shop />}/>
        <Route path = '/cart' element = {<Cart />}/>
      </Routes> */}
      
    </div>
    // </Router>
  );
}

export default App;
