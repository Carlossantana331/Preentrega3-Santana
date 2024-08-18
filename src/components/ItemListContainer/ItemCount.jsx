import { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {
  // Estado para la cantidad de ítems
  const [count, setCount] = useState(initial);

  // Función para incrementar el contador
  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  // Función para decrementar el contador
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // Función para manejar la acción de "Agregar al carrito"
  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div className='counterContainer '>
      <div className='counter'>
        <button onClick={handleDecrement} className='btnCount'>-</button>
        <p className='count'>{count}</p>
        <button onClick={handleIncrement} className='btnCount'>+</button>
      </div>

      <button onClick={handleAddToCart} className='agregarCarrito'>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
