import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebaseConfig'

const ItemDetailContainer = () => {
    const [productos, setProducto] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId}=useParams()
    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'productos', itemId)

        getDoc(docRef)
            .then((response) => {
                const data = response.data()
                const producto = {id: response.id, ...data}
                setProducto(producto)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])
    if (loading) {
        return <h1>Cargando...</h1>
    }
    return (
        <ItemDetail {...productos}/>

    )
    }

export default ItemDetailContainer