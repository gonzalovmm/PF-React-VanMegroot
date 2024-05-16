import { Link } from 'react-router-dom'
import React from 'react'
const Item= ({id, nombre, imagenUrl, precio,stock})=> {
    return (
        <article className="card bg-emerald-800 shadow-sm text-white" style={{width: '18rem'}}>
            <header>
                <h2 className="font-semibold p-2">
                    {nombre}
                </h2>
            </header>
            <picture >
                <img src={imagenUrl} alt={nombre} className="card-img-top"/>
            </picture>
            <section>
                <p>
                    Precio: ${precio}
                </p>
                <p >
                    Stock: {stock}
                </p>
            </section>
            <footer className="p-2">
                <div className=" bg-emerald-600 hover:scale-105 rounded-lg shadow-md border-6 ">
                <Link to={`/item/${id}`} >Ver Detalles</Link>
                </div>
                
                
            </footer>
        </article>
      )
  }

  export default Item