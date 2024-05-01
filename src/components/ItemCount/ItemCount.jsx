import { useState } from 'react'
import { Button} from "antd";

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }
    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }
    return(
      <div>
          <div className="flex justify-between align-center p-3">
              <Button  onClick={decrement} shape="circle">-</Button>
              <h4>{quantity}</h4>
              <Button  onClick={increment} shape="circle">+</Button>
          </div>
          <div>
              <Button  onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</Button>
          </div>
      </div>
  )
}

export default ItemCount