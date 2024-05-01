import { Link } from 'react-router-dom'
const Item= ({id, nombre, imagen, categoria, precio,stock})=> {
    return (
        <article className="card bg-emerald-800 shadow-sm" style={{width: '18rem'}}>
            <header>
                <h2 className="font-bold p-2">
                    {nombre}
                </h2>
            </header>
            <picture >
                <img src={imagen} alt={nombre} className="card-img-top"/>
            </picture>
            <section>
                <p>
                    Precio: ${precio}
                </p>
                <p >
                    Stock: {stock}
                </p>
            </section>
            <footer className="d-grid gap-2 p-2">
                <Link to={`/item/${id}`} className="btn btn-warning shadow-md border-6">Ver Detalles</Link>
            </footer>
        </article>
      )
  }

  export default Item