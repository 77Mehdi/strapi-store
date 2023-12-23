import React, { useState } from 'react'
import "./cart.css"
import { RiShoppingBasketFill } from "react-icons/ri";
import { useSelector, useDispatch } from 'react-redux'
import { FaTrashAlt } from "react-icons/fa";
import { removefromCart, reset } from '../../redux/cartReducer'
import { GrPowerReset } from "react-icons/gr";

function Cart() {

    const [cartlist, setcartlist] = useState(false)

    const showcartlist = () => {
        cartlist ? setcartlist(false) : setcartlist(true)
    }


    const products = useSelector(state => state.cart.product)
    const dispatch = useDispatch()
    return (
        <div className='cart'>
            <div className="cart-icon"
                onClick={products.length > 0 && showcartlist}>
                <RiShoppingBasketFill />
            </div>
            <div className="cart-badg">{products.length}</div>
            {
                cartlist //|| products.length>0
                    ? (
                        <ul className="cart-list">
                            {
                                products.map(product => (


                                    <li className="cart-item" key={product.id}>
                                        <img src={import.meta.env.VITE_APP_TOKEN + product.image} alt="" className="cart-item-image" />
                                        <span className="cart-item-title">{product.title}</span>
                                        <span className="cart-item-price">{product.price}$</span>
                                        <span className="cart-item-remove"
                                            onClick={() => dispatch(removefromCart({
                                                id: product.id,
                                            }))}
                                        ><FaTrashAlt /></span>


                                    </li>



                                ))
                            }
                            {/* <span className=""
                                onClick={() => dispatch(reset())}
                            ><GrPowerReset /></span> */}


                        </ul>
                    )
                    : ''
            }


        </div>
    )
}

export default Cart