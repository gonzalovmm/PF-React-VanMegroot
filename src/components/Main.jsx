import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import Cart from "./Cart/Cart";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Checkout/Checkout";

function Main() {
  return (
    <main className='flex justify-center items-center grow bg-gray-100'>
       <Routes className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max:w-7xl lg:px-8 bg-gray-100">
           <Route path="/" element={<ItemListContainer />}/>
           <Route path="/categoria/:categoria" element={<ItemListContainer />}/>
           <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
           <Route path="/cart" element={<Cart />} />
           <Route path="/checkout" element={<Checkout />} />
           <Route path="*" element= {<h1>404 NOT FOUND</h1>}/>
       </Routes>
       
    </main>
)
    
}

export default Main;