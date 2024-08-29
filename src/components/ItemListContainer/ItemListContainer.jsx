import React, { useState, useEffect } from 'react';
import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h3>{greeting}</h3>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>{producto.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;