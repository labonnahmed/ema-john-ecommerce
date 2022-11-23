import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Invertory/Inventory';
import Error from './components/Error/Error';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <>
      <Header></Header>
      <Router>
        <Routes>
          <Route exact path='/' element= { <Shop />} />
          <Route path="/shop" element= { <Shop />} />
          <Route path="/review" element= { <Review />} />
          <Route path="/inventory" element= { <Inventory />} />
          <Route path="/product/:productKey" element= { <ProductDetail />} />
          <Route path="*" element={ <Error />} />
        </Routes>
      </Router> 
    </>
  );
}

export default App;
