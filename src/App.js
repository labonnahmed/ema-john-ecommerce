import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
// import Error from './components/Error/Error';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Authentication from './components/auth/Authentication';
import Shipment from './components/Shipment/Shipment';
import PrivateOutlet from './components/PrivateOutlet/PrivateOutlet';
import Inventory from './Inventory/Inventory';
export const userContext= React.createContext();

function App() {
  const [authUser, setAuthUser] = useState(null);

  
  return (
    <userContext.Provider value ={[authUser, setAuthUser]}>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/shop" element= { <Shop />} />
          <Route path='inventory' element= { <Inventory />} />
          <Route path="/product/:productKey" element= { <ProductDetail />} />
          <Route path="/review" element= { <Review />} />
          <Route path="/login" element= { <Authentication />} />
          <Route path='/*' element={ <PrivateOutlet />} >
            <Route path='shipment' element={ <Shipment />} />
          </Route>       
          <Route exact path='/' element= { <Shop />} />
          {/* <Route exact path="*" element={ <Error />} /> */}
        </Routes>
      </Router> 
    </userContext.Provider>
  );
}

export default App;
