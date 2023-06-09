import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice ({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state, {payload})=>{
            const {id} = payload
            const itemExist = state.find((item)=> item.id===id)
            if (itemExist){
                return state.map((item) => {
                   if(item.id===id){
                    return {
                        ...item,
                        quantity : item.quantity + 1
                    }
                   
                   }

                   return item
                })
            }
            else{
                state.push({...payload,quantity:1})
            }

        },

        increment : (state, {payload}) => {
            return state.map((item) => {
                if(item.id===payload){
                    return{
                        ...item,
                        quantity : item.quantity + 1

                    }

                }

                return item
            })
        },

        
    decrement : (state, {payload}) => {
            return state.map((item) => {
                if(item.id===payload){
                    return{
                        ...item,
                        quantity : item.quantity -1

                    }

                }

                return item
            })
        },

        clear:(state)=> {
            return []
        },
    remove:(state, action) => {
        state.filter((item) => item.id !== action.payload)
        
    }
    }
})


export const {addToCart, increment, decrement,clear, remove} = cartSlice.actions

const cartReducer = cartSlice.reducer

export default cartReducer