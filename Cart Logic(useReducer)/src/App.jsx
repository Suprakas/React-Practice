import { useReducer } from 'react';
import { cartReducer } from './reducers/cartReducer';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css'

function App() {
    const [cart, dispatch] = useReducer(cartReducer, []);
  return (
   <div>
      <h2> Cart System</h2>

      <ProductList dispatch={dispatch} />
      <Cart cart={cart} dispatch={dispatch} />
   </div>
  )
}

export default App
