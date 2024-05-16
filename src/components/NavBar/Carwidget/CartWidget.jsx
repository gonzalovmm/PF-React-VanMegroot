import { ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"
import { useContext } from "react"
import { Badge } from "antd"

function CartWidget() {
  const {totalQuantity} = useContext(CartContext)
  return (
    <div className=" hidden md:flex md:gap-4 hover:scale-110 ">
      <Badge className="text-white" size="small" count = {totalQuantity}>
        <Link to="/cart">
        <ShoppingCart />
      
      </Link>
      </Badge>
    
    </div>
  )
}

export default CartWidget