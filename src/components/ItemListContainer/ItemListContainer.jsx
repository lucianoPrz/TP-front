import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import apiConfig from "../../services/config";

const ItemListContainer = ({ greeting, dataType }) => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para la búsqueda
  
  const urls = {
    products: apiConfig.urlProduct,
    movements: apiConfig.urlMovement,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(urls[dataType]);
        const data = await response.json();
        console.log(data);
        setItems(data);
        setFilteredItems(data); // Inicialmente, mostrar todos los elementos
      } catch (error) {
        console.log(`Error al obtener los ${dataType}:`, error);
      }
    };

    fetchData();
  }, [dataType]);

  // Filtrar los elementos en función del término de búsqueda
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredItems(items); // Si no hay búsqueda, mostrar todos los elementos
    } else {
      const lowercasedFilter = searchTerm.toLowerCase();
      const filteredData = items.filter(item => {
        if (dataType === "products") {
          return (
            item.marca.toLowerCase().includes(lowercasedFilter) ||
            item.tipo.toLowerCase().includes(lowercasedFilter)
          );
        } else if (dataType === "movements") {
          return (
            item.producto.toLowerCase().includes(lowercasedFilter) ||
            item.tipo.toLowerCase().includes(lowercasedFilter)
          );
        }
        return false;
      });
      setFilteredItems(filteredData);
    }
  }, [searchTerm, items, dataType]);

  return (
    <>
      <h3 className="text-center py-2 m-auto"> {greeting} </h3>

      {/* Campo de búsqueda */}
      <div className="text-center">
        <input
          type="text"
          placeholder={`Buscar ${dataType === "products" ? "productos" : "movimientos"}...`}
          className="form-control mb-3 w-50 mx-auto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Lista filtrada */}
      <ItemList items={filteredItems} dataType={dataType} />
    </>
  );
};

export default ItemListContainer;
