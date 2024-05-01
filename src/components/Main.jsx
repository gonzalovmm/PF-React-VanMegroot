import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";

function Main() {
  return (
    <main className='p-4 grow'>
       
       <Routes>
           <Route path="/" element={<ItemListContainer greeting={"BIENVENIDO A NUESTRA TIENDA"}/>}/>
           <Route path="/categoria/:categoria" element={<ItemListContainer />}/>
           <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
           <Route path="/cart" element={"PRÓXIMAMENTE SE MOSTRARÁ EL CARRITO"} />
           <Route path="*" element= {<h1>404 NOT FOUND</h1>}/>
       </Routes>
    </main>
)
    
}

export default Main;