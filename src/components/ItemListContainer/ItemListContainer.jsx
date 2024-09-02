import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const url = "https://fakestoreapi.com/products"; // API BACKEND

  useEffect(() => {
    try {
      const pedirProductos = async () => {
        const response = await fetch(url)
        const data = await response.json();
        setProductos(data);
      }

      pedirProductos();
    } catch (error) {
      console.log(error);
    }


    
  }, []);

  return (
    <>
      <h3 className="text-center py-2 m-auto"> {greeting} </h3>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
