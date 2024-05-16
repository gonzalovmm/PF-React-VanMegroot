import ItemCount from "../ItemCount/ItemCount"
import {Link} from "react-router-dom"
import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({id, nombre, imagenUrl, categoria, precio, stock  }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const {addItem} = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    console.log(quantityAdded);
    
    const item = {id, nombre, imagenUrl, precio }
    addItem(item, quantity)
  }
    return (
        <article className="card bg-esmerald-300 shadow-sm" style={{width: '25rem'}}>
        <header>
            <h2 className="font-bold p-2">
                {nombre}
            </h2>
        </header>
        <picture >
            <img src={imagenUrl} alt={nombre} className="card-img-top"/>
        </picture>
        <section>
            <p>
                Categoría: {categoria}
            </p>
            <p >
                Precio: ${precio}
            </p>
            <p>
                Stock: {stock}
            </p>
        </section>
        <footer>
        <div className='p-3 flex justify-center align-center'>
        {
          quantityAdded > 0 ? (
            <Link to={"/cart"} className=" btn btn-warning">Finalizar Compra</Link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
          )
        }
      </div>

        </footer>
    </article>
    )
  }
export default ItemDetail
