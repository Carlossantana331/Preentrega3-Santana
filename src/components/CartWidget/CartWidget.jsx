import { RiShoppingCartLine } from "react-icons/ri";
import { useContext } from "react";  // Importa useContext
import { CartContext } from "../CartContext";  // Importa el CartContext

function CartWidget() {
  const { cart } = useContext(CartContext);  // Accede al contexto del carrito

  // Calcula el número total de items en el carrito
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className='carrito'>
      <RiShoppingCartLine size="1.4em" />
      <span className='badge'>{totalItems}</span>  {/* Muestra el número total de items */}
    </div>
  )
}

export default CartWidget;
