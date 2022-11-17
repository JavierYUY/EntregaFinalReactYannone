import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/navBar/NavBar';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './routes/itemListContainer/ItemListContainer';
import ItemDetailContainer from './routes/itemDetailContainer/ItemDetailContainer';
//import { CartProvider } from './components/context/CartContext';
import CheckOutContainer from './routes/checkOut/CheckOutContainer';
import CartProvider from './context/CartContext';

function App() {
  return (
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} ></Route>
            <Route exact path="/category/:id" element={<ItemListContainer />} ></Route>
            <Route exact path="/item/:id" element={<ItemDetailContainer />} ></Route>
            <Route exact path='/checkout' element={<CheckOutContainer />} ></Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    
  );
}

export default App;
