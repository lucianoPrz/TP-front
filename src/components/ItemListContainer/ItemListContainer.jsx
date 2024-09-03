import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import apiConfig from "../../services/config";

const ItemListContainer = ({ greeting, dataType }) => {
  const [items, setItems] = useState([]);
  
  // URLs para productos y movimientos
  const urls = {
    products: apiConfig.urlProduct,
    movements: apiConfig.urlMovement,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(urls[dataType]);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log(`Error al obtener los ${dataType}:`, error);
      }
    };

    fetchData();
  }, [dataType]);

  return (
    <>
      <h3 className="text-center py-2 m-auto"> {greeting} </h3>
      <ItemList items={items} dataType={dataType} />
    </>
  );
};

export default ItemListContainer;
