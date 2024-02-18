import { createContext, useContext, useReducer } from "react"
import { CartReducer } from "../reducers";

const cartInitial = {
    cartList: [],
    total: 0
}

const CartContext = createContext(cartInitial);

export const CartProvider = ({children})=>{
    const [state, dispatch] = useReducer(CartReducer, cartInitial)

    function addTocart(product){
        const updatedList = state.cartList.concat(product);
        const updatedTotal = state.total + product.price;
        
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                cartList: updatedList,
                total: updatedTotal
            }
        })
    }

    function removeCart(product){
        const updatedList = state.cartList.filter(item=>item.id !== product.id);
        const updatedTotal = state.total - product.price;

        dispatch({
            type: 'REMOVE_ITEM',
            payload: {
                cartList: updatedList,
                total: updatedTotal
            }
        })
    }

    function clearCart(){
        dispatch({
            type: 'CLEAR_CART'
        })
    }

    const value = {
        dispatch,
        addTocart,
        removeCart,
        clearCart,
        cartList: state.cartList,
        total: state.total
    }
    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = ()=>useContext(CartContext)