import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../CartContext";

function Cart() {
  const { cart, clearCart } = useContext(CartContext);

  const totalPiezas = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalDinero = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0).toFixed(2);

  return (
    <div className="cartContainer">
      <h2 className="cartTitle">Carrito</h2>
      {cart.length > 0 ? (<ul>
          <li className="cartItem">
              <span className="nameTitle">Articulo</span>
              <span>piezas</span>
              <span>Precio unitario</span>
              <span>Total</span>
          </li>
      </ul>): null}
      

      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li className="cartItem" key={item.id}>
                <span className="nameTitle">{item.nombre}</span>
                <span>{item.quantity}pz</span>
                <span>${item.precio}</span>
                <span>Total: ${(item.precio * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <h3 className="total">Total de piezas: {totalPiezas}</h3>
          <h3 className="total">Total: ${totalDinero}</h3>

          <div className="vaciarCarritoContainer">
            <button className="vaciarCarrito" onClick={clearCart}>Vaciar carrito</button>
          </div>

        </>
      )}
    </div>
  );
}

export default Cart;
