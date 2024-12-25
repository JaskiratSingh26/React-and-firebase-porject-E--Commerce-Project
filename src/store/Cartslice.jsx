import { createSlice } from "@reduxjs/toolkit";


const cartslice = createSlice({
    name: 'cart',
    initialState: {
        items: JSON.parse(localStorage.getItem('cart')) ?? [],
    },
    reducers: {
        addtocart: (state, action) => {
          const item=state.items.find((item)=> item.ProductID===action.payload.ProductID)
          if(item){
            item.quantity++
          }else{
            state.items.push(action.payload)
          }

       
        },




        removetocart: (state, action) => {
            state.items = state.items.filter(item => item.ProductID !== action.payload.ProductID);
        },


        incrementtocart: (state, action) => {
            const item = state.items.find(item => item.ProductID === action.payload.ProductID);
            if (item) {
                item.quantity++; // Modify the draft directly
            }
        },

        decrementtocart: (state, action) => {
            const item = state.items.find(item => item.ProductID === action.payload.ProductID);
            if (item && item.quantity > 1) {
                item.quantity--; // Modify the draft directly
            }
        },

    }
}
)

export const { addtocart, deletetocart, removetocart, incrementtocart,decrementtocart } = cartslice.actions;
export default cartslice.reducer