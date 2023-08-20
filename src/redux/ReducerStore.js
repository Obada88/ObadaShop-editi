import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
}

export const chartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
        const product = state.products.find(item => item.id === action.payload.id)
     !product && state.products.push(action.payload)
    },
    removeFromCart: (state,action) => {
        state.products = state.products.filter(item => item.id !== action.payload.id)
    },
    restCart: (state) => {
        state.products = []
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, restCart } = chartSlice.actions

export default chartSlice.reducer