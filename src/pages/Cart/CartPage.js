import { useCart } from "../../context";
import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";

export const CartPage = () => {
    const {cartList} = useCart();

  return (
    <main>
        {cartList.length?(<CartList cartItemCount={cartList.length}/>):(<CartEmpty/>)}
    </main>
  )
}
