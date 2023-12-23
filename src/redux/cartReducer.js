import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    product: [],
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtoCart: (state,actions) => {
        const onetime = state.product.find(item=>item.id == actions.payload.id)

       !onetime && state.product.push(actions.payload)
    },
    removefromCart: (state,actions) => {
        state.product =  state.product.filter(item=>item.id !== actions.payload.id)

    },
    reset: (state) => {
        state.product = []

    },
  },
})

export const { addtoCart ,removefromCart,reset } = cartSlice.actions

export default cartSlice.reducer