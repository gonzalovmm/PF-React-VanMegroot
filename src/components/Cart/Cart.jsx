import {useContext} from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import { Button } from "antd"


const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)
    if (totalQuantity === 0) {
        return (
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="flex flex-col justify-center items-center mt-6">
                    <h1 className="text-White font-semibold text-3xl">No hay items en el carrito</h1>
                </div>
                <div className="flex flex-col justify-center items-center mt-6">
                <Button><Link to="/" className="text-White">Volver a la tienda</Link></Button>
                </div>
            </div>
        )
    }
    return (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">  
            {cart.map(productos => <CartItem key={productos.id} {...productos} className="group relative"/>)}
            <div className="m-4 flex justify-center">
                <h3 className="font-semibold text-White text-2xl">Total: ${total}</h3>
            </div>
            <div className="flex justify-between">
                <Button type="primary" danger onClick={() => clearCart()}>Vaciar carrito</Button>
            <Button><Link to='/checkout'>Confirmar compra</Link></Button>
            </div>
        
        </div>
    )
}

export default Cart;
