import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import { CartProvider } from './context/CartContext';

function App() {
  return (
   <BrowserRouter>
      <CartProvider>
      <Header/>
      <Main/>
      <Footer/>
      </CartProvider>
    </BrowserRouter>
  )
}


export default App
