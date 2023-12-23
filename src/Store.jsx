
import { useState } from 'react'
import Product from './components/product/Product'
import Category from './components/category/category'
import StoreContext from './hooks/storeContext'
import Cart from './components/cart/cart'

function Store() {

  const [filter,setfilter]=useState("/products?populate=*")
  const [selectedCategoris,setselectedCategoris]=useState([])

  const allstat ={filter,setfilter,selectedCategoris,setselectedCategoris}
  return (
    <>
      <Cart/>
      <StoreContext.Provider value={allstat}>
          <Category />
           <Product />
      </StoreContext.Provider>

    </>
  )
}

export default Store
