import { useState, useEffect, useContext } from 'react'
import useFetch from "../../hooks/useFetch"
import "./product.css"
import StoreContext from '../../hooks/storeContext'
import { addtoCart } from '../../redux/cartReducer'
import { useDispatch } from 'react-redux'

function Product() {

  const [products, setproducts] = useState([])
  const { filter } = useContext(StoreContext)
  const { data, loding, error } = useFetch(filter)



  useEffect(() => {
    data && setproducts(data)
  }, [data])

  const dispatch =useDispatch()


  return (
    <div className='products'>
      {
        loding ? "loading..." :

          products.map(product => (
            <div className='product' key={product.id} >
              <h2 className='product-title'>{product.attributes.title}</h2>
              <div className='product-pric'>{product.attributes.price}</div>
              <img className='product-img' src={import.meta.env.VITE_APP_TOKEN + product.attributes.imag.data.attributes.url} />
              <div className='product-desc'>{product.attributes.Desc}</div>
              <button 
              onClick={()=>dispatch(addtoCart({
                id:product.id,
                title:product.attributes.title,
                price:product.attributes.price,
                desc:product.attributes.Desc,
                image:product.attributes.imag.data.attributes.url
              }))}
              >
                add tolist
              </button>

            </div>
          ))}




    </div>
  )
}

export default Product