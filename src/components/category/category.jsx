import React from 'react'
import {useState,useEffect} from "react"
import useFetch from '../../hooks/useFetch'
import Checkbox from './checkbox/checkbox'


function Category() {
    const [category ,setcategory] = useState([])

    const {data,loding,error} = useFetch("/categories?populate=*")
   
    useEffect(()=>{
      data &&  setcategory(data)
    },[data])


  return (
    <div className='categor'>
    {
       loding ? "loading...":
          category.map(categor=>(
            <Checkbox 
            key={categor.id} 
            categor={categor} 
            />
        ))}
    
        
    
    </div>
  )
}

export default Category

