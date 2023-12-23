import axios from "axios"

const api = import.meta.env.VITE_API_URL ;
const token = import.meta.env.VITE_API_TOKEN;
  

export const fetchapi =axios.create({
  baseURL: api,
  headers:{
   Authorization:"Bearer " + token
  },
})




