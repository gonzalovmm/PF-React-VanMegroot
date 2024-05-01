import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";

function Main() {
  return (
    <main className='flex justify-center items-center grow bg-gray-100'>
       <div >
       <Routes className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max:w-7xl lg:px-8 bg-gray-100">
           <Route path="/" element={<ItemListContainer greeting={"BIENVENIDO A NUESTRA TIENDA"}/>}/>
           <Route path="/categoria/:categoria" element={<ItemListContainer />}/>
           <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
           <Route path="/cart" element={"PRÓXIMAMENTE SE MOSTRARÁ EL CARRITO"} />
           <Route path="*" element= {<h1>404 NOT FOUND</h1>}/>
       </Routes>
       </div>
       

    </main>
)
    
}

export default Main;