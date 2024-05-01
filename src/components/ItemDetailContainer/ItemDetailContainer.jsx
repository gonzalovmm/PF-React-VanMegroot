import { useState, useEffect } from 'react'
import { getProductosPorId } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)

    const {itemId}=useParams()
    useEffect(() => {
        getProductosPorId(itemId)
            .then((data) => {
                setProducto(data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [itemId])
    return (
        <div className="flex justify-center">
             <ItemDetail {...producto}/>
             
        </div>
    )
}

export default ItemDetailContainer