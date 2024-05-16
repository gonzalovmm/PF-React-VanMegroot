import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Button } from "antd"
const CartItem = ({ id, nombre, precio, imagenUrl, quantity }) => {
    const { removeItem } = useContext(CartContext)

    return(
        <div className="mt-6 rounded-lg  outline outline-2 outline-Mogo">
            <div className="grid grid-cols-6 gap-4 items-center ">
                <div className="">
                    <img src={imagenUrl} className="rounded-lg"/>
                </div>
                <div className="pt-4 ps-2 col-span-4 h-full">
                    <h3 className="text-Negro font-semibold">
                        {nombre}
                    </h3>
                    <p>Precio: ${precio}</p>
                    <p>Cantidad: {quantity}</p>
                    <p className="font-semibold pt-16">SubTotal: ${precio * quantity}</p>
                </div>
                <div className="justify-self-center hover:scale-105">
                    <Button onClick={() => removeItem(id)} danger ghost>Eliminar</Button>
                </div>
            </div>
        </div>
    )
}


export default CartItem