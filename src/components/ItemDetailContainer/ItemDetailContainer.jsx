import { useContext } from "react";
import { CartContext } from "../CartContext"; // Ruta a CartContext
import { useParams, useNavigate } from "react-router-dom";

import ItemCount from "../ItemListContainer/ItemCount";
import FirestoreItems from '../Firestore';

function ItemDetailContainer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { items: productos, error } = FirestoreItems();
  const item = productos.find(item => item.id === parseInt(id));

  const handleAddToCart = (quantity) => {
    addToCart(item, quantity);
  };

  if (!item) {
    return <h2>Item no encontrado</h2>;
  }

  return (
    <div className="itemDetail">
      <div>
        <img className="itemDetailImg" src="/img/img-ref.png" alt={item.nombre} />
      </div>
      <div className="itemDetailInfo">
        <h2 className="itemDetailName">{item.nombre}</h2>
        <p className="itemDetailDescription">{item.descripcion}</p>
        <h3 className="itemDetailPrice">${item.precio}</h3>
        <div className="itemDetailCounter">
          {item.stock > 0 ? (
              <ItemCount
                stock={item.stock}
                initial={1}
                onAdd={(quantity) => addToCart(productos, quantity)}
              />
            ) : 
            (<p className="agotado">Agotado!!</p>)
            }
        </div>
        
        <button className="itemDetailBtn" onClick={() => navigate(-1)}>Regresar</button>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
