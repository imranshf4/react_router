import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './components/Home/Home';

import NotFound from './components/NotFound/NotFound';
import Product from './components/Product/Product';

export const categoryContext = createContext();
function App() {
const [category,setCategory] = useState('laptop');
  return (
    <categoryContext.Provider value={[category,setCategory]}>
      <Header></Header>
      <Router>
        <div>
          <Routes>
            {/* <Route exact path="/" element={<Home count={category} setCount={setCategory}></Home>} /> */}
            <Route exact path="/" element={<Home></Home>} />
            <Route path="/product" element={<Product></Product>} />
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </div>
      </Router>


    </categoryContext.Provider>
  );
}

export default App;
