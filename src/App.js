import React from 'react';
import { Route, Routes } from 'react-router';

import Header from './Components/Header';
import Home from './Pages/Home/Home';
import NewSneakers from './Pages/NewSneakers/NewSneakers';
import Cart from './Pages/Cart/Cart';
import Account from './Pages/Account/Account';
import About from './Pages/About/About';
import Pay from './Pages/Pay/Pay';
import Sneakers from './Pages/Sneakers/Sneakers';
import SneakerItem from './Pages/SneakerItem/SneakerItem';
function App() {
  return (
    //clear убирает лишние стили
    <div className='main clear align-center'> 
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<NewSneakers />} />
      <Route path='/about' element={<About />} />
      <Route path='/pay' element={<Pay />} />
      <Route path='/sneakers' element={<Sneakers />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/account' element={<Account />} />
      <Route path='/sneakers/page' element={<SneakerItem />} />
    </Routes>
    </div>
  );
}

export default App;
