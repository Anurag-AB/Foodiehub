import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch=useDispatch()
  const handleClearCart=()=>{
    dispatch(clearCart());
  }

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-xl md:text-2xl font-bold">Welcome to Cart</h1>

      <div className="w-full md:w-8/12 mx-auto">
      <button className="p-2 m-2 bg-green-400 text-white font-bold rounded-lg" 
      onClick={handleClearCart}
      >Clear Cart</button>
      {cartItems.length===0 && <h1 className="p-6 md:p-10 text-sm md:text-base  m-10">Cart Is Empty,Add Items To The Cart</h1>} 
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;