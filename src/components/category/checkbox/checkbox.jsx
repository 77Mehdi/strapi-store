import React, { useEffect , useContext} from 'react'
import './checkbox.css'
import StoreContext from '../../../hooks/storeContext';
import qs from "qs"

function Checkbox({ categor }) {

    const { setfilter, selectedCategoris, setselectedCategoris } = useContext(StoreContext);

    useEffect(() => {
        const query = qs.stringify({
            filters: {
                categories: {
                    id: {
                        $in: selectedCategoris
                    }
                }
            }
        })
        setfilter("http://localhost:1337/api/products?populate=*&" + query)
    }, [selectedCategoris])

    const handelfilter = (e) => {

        const selectID = e.target.dataset.categor
        const isChecked = e.target.checked

        setselectedCategoris(selectedCategoris => {
            if (isChecked) return [...selectedCategoris, selectID]
            return selectedCategoris.filter(id => id !== selectID)
        })


    }

    return (
        <>
            <label class="toggler-wrapper style-1" >
                <input
                    type="checkbox"
                    data-categor={categor.id}
                    onChange={handelfilter}
                />
                <div class="toggler-slider">
                    <div class="toggler-knob"></div>
                </div>
                <div class="badge">{categor.attributes.title}</div>
            </label>


        </>
    )
}

export default Checkbox





