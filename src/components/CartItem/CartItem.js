import { AiFillDelete } from "react-icons/ai";
import { useCartContex } from "../../state/contex/CartContex";
import CartCount from "../CartCount/CartCount";
// import CartPgUti from "../CartPgUti/CartPgUti";

const CartItem = ({ id, image, name, price, count }) => {
  const { togolAmonunt, deleteItemsFromCart } = useCartContex();
  const decrease = () => {
    togolAmonunt(id, "dic");
  };
  const increase = () => {
    togolAmonunt(id, "inc");
  };
  return (
    <>
      <main className="cart__main" key={id}>
        <div className="cart__main__item">
          <div className="cart__main__img">
            <img src={image} alt={name} className="cart__mainimg" />
          </div>
          <div className="mobailing">
            <h4 className="cart__main_name">{name}</h4>
          </div>
        </div>
        <div className="cart__main__price">
          <p className="cart__main__prc">${price}</p>
        </div>
        <CartCount count={count} increase={increase} decrease={decrease} />
        <div className="cart__main__subtotal">
          <p className="cart__main__sub">{price * count}</p>
        </div>
        <div className="cart__main__deletbtn">
          <button type="button" onClick={() => deleteItemsFromCart(id)}>
            <AiFillDelete />
          </button>
        </div>
      </main>

      <main className="cart__main moba" key={id}>
        <div className="cart__main__item">
          <div className="cart__main__img">
            <img src={image} alt={name} className="cart__mainimg" />
          </div>
          <div className="mobailing">
            <h4 className="cart__main_name">{name}</h4>
            <p className="cart__main__sub">{price * count}</p>
          </div>
        </div>

        <CartCount count={count} increase={increase} decrease={decrease} />

        <div className="cart__main__deletbtn">
          <button type="button" onClick={() => deleteItemsFromCart(id)}>
            <AiFillDelete />
          </button>
        </div>
      </main>
    </>
  );
};

export default CartItem;
