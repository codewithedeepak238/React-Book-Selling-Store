export const CartReducer = (state, action)=>{
    const {type, payload} = action;

    switch(type){
        case 'ADD_ITEM':
            return {cartList: payload.cartList, total:payload.total}
        case 'REMOVE_ITEM':
            return {cartList: payload.cartList, total:payload.total}
        case 'CLEAR_CART':
            return {cartList: [], total:0}
        default:
            throw new Error('No case found');
    }
}