import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
    total: 0,
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
  });

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0);
    

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            console.log(`Se agrego al carrito`)
            setCart(prev => [...prev, {...item, quantity}])
            setTotalQuantity(prev => prev + quantity);
            setTotal(prev => prev + item.precio * quantity);
        } else {
            console.log('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter((prod) => prod.id!== itemId);
       console.log('Se elimino el producto')
        setCart(cartUpdate);
        setTotalQuantity(prev => prev - cart.find((prod) => prod.id === itemId).quantity);
        setTotal(prev => prev - cart.find((prod) => prod.id === itemId).precio * cart.find((prod) => prod.id === itemId).quantity);
      };

    const clearCart = () => {
        setCart([]);
        setTotalQuantity(0);
        setTotal(0);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    

    return(
        <CartContext.Provider value={ {cart, addItem, removeItem, clearCart, totalQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}

