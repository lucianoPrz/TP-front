import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const url = "https://fakestoreapi.com/products?limit=3"; // API BACKEND

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
    <div>
      <h3 className="text-center py-2 m-auto"> {greeting} </h3>
      <h4 style={{ textAlign: "center" }}>Mis productos</h4>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
