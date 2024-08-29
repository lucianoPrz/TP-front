import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const url = "https://fakestoreapi.com/products"; // Corrección en la URL
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(error => console.log(error));
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
