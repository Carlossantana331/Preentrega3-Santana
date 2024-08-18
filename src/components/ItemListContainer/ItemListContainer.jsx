import './ItemListContainer.css';
import { Link, useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from "../CartContext"; // Ruta a CartContext
import { useContext } from "react";

import FirestoreItems from '../Firestore';

function ItemListContainer() {
  const { categoria } = useParams(); // Extrae la categoría de los parámetros de la URL
  const { addToCart } = useContext(CartContext);

  const { items: productos, error } = FirestoreItems();

  if (error) return <div>Error: {error}</div>;

  // Si no hay categoría, muestra todos los productos
  const filteredProducts = categoria 
    ? productos.filter(producto => producto.categoria === categoria)
    : productos;



  return (
    <div className='container'>
      {filteredProducts.length > 0 ? (
        filteredProducts.map(producto => (
          <div className='card' key={producto.id}>
            <img className='cardImg' src='/img/img-card.png' alt={producto.nombre} />
            <h2 className='name'>{producto.nombre}</h2>
            <h3 className='price'>${producto.precio}</h3>

            {producto.stock > 0 ? (
              <ItemCount 
                stock={producto.stock}
                initial={1}
                onAdd={(quantity) => addToCart(producto, quantity)}
              />
            ) : (
              <p className='agotado'>Agotado!!</p>
            )}

            <button className='verMas'><Link to={`/item/${producto.id}`} key={producto.id} className='verMasLink'>Ver más</Link></button>
          </div>
        ))
      ) : (
        <p>No se encontraron productos para esta categoría.</p>
      )}
    </div>
  );
}

export default ItemListContainer;
