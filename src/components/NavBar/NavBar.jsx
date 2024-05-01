import { NavLink, Link } from "react-router-dom"
import CartWidget from "./Carwidget/CartWidget"
const NavBar = () => {
    return( <div className="col flex justify-between">
    <ul className="nav text-center items-center grow">
      
      <li className="nav-item">
        <NavLink to="/"  className="nav-link colorFuente">Productos</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={"/categoria/Principales"} className="nav-link colorFuente " >Principales</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={"/categoria/Postres"} className="nav-link colorFuente " >Postres</NavLink>
      </li>
      <li className="nav-item">
          <NavLink to={"/categoria/Veganos"} className="nav-link colorFuente" >Veganos</NavLink>
      </li>
    </ul>
    
    <a href="#"><CartWidget/></a>
</div>


)
}

export default NavBar