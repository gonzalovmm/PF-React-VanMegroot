import { useState, useEffect } from 'react';
import { getProductos, getProductosPorCategoria } from '../../asyncMock';

import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting})=> {
  const [productos, setProductos] = useState([]);
  
  const {categoria} = useParams();
  
  useEffect(() => {
    const asyncFunc = categoria ? getProductosPorCategoria : getProductos;
    asyncFunc(categoria)
    .then(data =>{
      setProductos(data);
      
  })
    .catch(error => 
      console.log(error));
  }, [categoria]);

  return (
    <div>
        <h1 className="text-xl font-bold p-3">{greeting}</h1>
        <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer