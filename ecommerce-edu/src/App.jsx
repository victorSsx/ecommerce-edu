import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';


function App() {

  return (
    <>
    <div>
      <Navbar />
    <div className='p-4'>
      <Routes>
      <Route path='/' element={<Home />} />
    
      <Route path='/product' element={<Product />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
    <Footer />
    </div>
    </>
  )
}

export default App;
