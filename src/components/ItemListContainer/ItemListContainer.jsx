import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {db} from '../../firebaseConfig';
import {collection, getDocs, query, where} from 'firebase/firestore';

const ItemListContainer = ()=> {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const {categoria} = useParams();
  
  useEffect(() => {
    setLoading(true);

    const collectionRef = categoria ? query(collection(db, 'productos'), where('categoria','==',categoria)) : collection(db,'productos')
    getDocs(collectionRef)
    .then(response => {
      const productos = response.docs.map(doc => {
        const data = doc.data();
        return {id: doc.id, ...data}
      })
      setProductos(productos);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });

  }, [categoria])

  if (loading){
    return <h1>Cargando...</h1>
  }

  return (
      <ItemList productos={productos}/>
  );
  
  }

export default ItemListContainer;