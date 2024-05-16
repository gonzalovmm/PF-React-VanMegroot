import { useContext, useState } from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Button } from "antd";
import { Link } from "react-router-dom";



const Checkout = () => {
    const[loading, setLoading] = useState(false)
    const [VentaId, setVentaId] = useState('')

    const {cart, total, clearCart} = useContext(CartContext)
    
    const createVenta = async ({name,phone,email}) => {
        setLoading(true)

        try{
            cart.map(item => {
                if (!item.id || !item.nombre || !item.precio || !item.quantity) {
                    throw new Error("Los objetos en el carrito deben tener los campos 'id', 'nombre', 'precio' y 'quantity' definidos");
                }
            });
    
            const objVenta = {
                usuario: { name, phone, email },
                items: [] ,
                total: total,
                date: serverTimestamp(),
            };
            const ventaRef = collection(db, 'ventas');
            const ventaAdded = await addDoc(ventaRef, objVenta);
            setVentaId(ventaAdded.id);
            clearCart();
        } catch (error) {
            console.error("Error al crear la venta:", error);
        } finally {
            setLoading(false);
        }
    }      

    if(loading){
        return(
            <div className="p-6">
                <h1 className="text-White font-bold text-4xl">Se esta generando su orden...</h1>
            </div>
        )
    }

    if (VentaId){
        return(
        <div>
            <h1 className="text-White font-bold text-4xl">Gracias por su compra</h1>
            <h2 className="text-White font-bold text-4xl">Su orden de compra es: {VentaId}</h2>
            <div className="flex flex-col justify-center items-center mt-6">
                <Button><Link to="/" className="text-White p-4">Volver a la tienda</Link></Button>
            </div>
        </div>
        )
    }
    return (
    
        <div className="p-4">
            <CheckoutForm onConfirm={createVenta}/>
        </div>
    
    )

}

export default Checkout
