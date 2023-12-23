import { useEffect, useState } from "react"
import { fetchapi } from "./fetchApi"



const useFetch =(path)=>{
  const [data,setdata]=useState(null)
  const [loding ,setloding]=useState(false)
  const [error ,seterror]=useState(false)

  useEffect(()=>{
     const fetchData =async()=>{
        try{
            setloding(true)
            const res = await fetchapi.get(path)
            setdata(res.data.data)
        }catch(error){
           seterror(error)
        }
        setloding(false)
     }
     fetchData()
     
  },[path])

  return{data,loding,error}
}


export default useFetch
