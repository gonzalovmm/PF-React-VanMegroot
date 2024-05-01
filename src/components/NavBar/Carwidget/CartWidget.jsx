import { ShoppingCart } from "lucide-react"

function CartWidget() {
  return (
    <div className="flex items-center ">
    <a href="#" className="btn position-relative">
      <ShoppingCart width={26} />
      <span className="position-absolute top-0 start-100  translate-middle badge rounded-pill bg-danger">0</span>
    
    </a>
    
    </div>
  )
}

export default CartWidget