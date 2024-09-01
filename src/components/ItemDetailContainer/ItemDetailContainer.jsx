import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
// import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const url = "https://fakestoreapi.com/products"; // API BACKEND
    // const {idItem} = useParams();
  
    useEffect(() =>{
      try {
        const pedirProducto = async () => {
          const response = await fetch(`${url}/1`)
          const data = await response.json();
          setProducto(data);
        }
  
        pedirProducto();
      } catch (error) {
        console.log(error);
      }

    }, [])

  return (
    <ItemDetail {...producto}/>
  )
}

export default ItemDetailContainer