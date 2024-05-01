import { NavLink, Link } from "react-router-dom"
import CartWidget from "./Carwidget/CartWidget"
const NavBar = () => {
    return( <div className="col flex justify-between text-white bg-gray">
    <nav className="nav text-center items-center grow ">
      
      
        <NavLink to="/"  className="nav-link colorFuente">Productos</NavLink>
      
        <NavLink to={"/categoria/Principales"} className="nav-link colorFuente " >Principales</NavLink>
      
        <NavLink to={"/categoria/Postres"} className="nav-link colorFuente " >Postres</NavLink>
      
          <NavLink to={"/categoria/Veganos"} className="nav-link colorFuente" >Veganos</NavLink>
      
    </nav>
    
    <a href="#"><CartWidget/></a>
</div>


)
}

export default NavBar