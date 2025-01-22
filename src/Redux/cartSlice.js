import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name: "cart",
    initialState:{
        items:[],
    },
    reducers:{
        addToCart:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItems:(state,action)=>{
            state.items=state.items.filter((items)=> items.id!==action.payload.id);
        },
    },
});
export const {addToCart,removeItems}=cartSlice.actions;
export default cartSlice.reducer;
