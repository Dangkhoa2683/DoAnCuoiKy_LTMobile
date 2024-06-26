import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items:  [],
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addtoCart: (state, action) => {
        state.items = [...state.items, action.payload]
    },
    removeFormCart: (state, action) => {
        let newCart = [...state.items];
        let itemIndex = state.items.findIndex(item => item.id == action.payload.id);
        if(itemIndex >=0){
            newCart.splice(itemIndex,1);
        }else{
            console.log("can't remove the item that is not added to cart!")
        }
        state.items = newCart;
    },
    emptyCart: (state, action) => {
        state.items=[];
    },
  },
})

// Action creators are generated for each case reducer function
export const { addtoCart, removeFormCart, emptyCart } = CartSlice.actions;
export const selectCartItems = state => state.cart.items;
export const selectCartItemsById= (state, id ) => state.cart.items.filter(item => item.id==id);
export const selectCartTotal = state => state.cart.items.reduce((total, item) => total + Number(item.price.replace('$', '')), 0);
export default CartSlice.reducer