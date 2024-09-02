import React from 'react';

const Item = ({ id, title, price, image, tipo, producto, cantidad, costo, fecha, index, dataType }) => {
  return (
    <tr>
      <th scope="row">{index}</th>
      {dataType === 'products' && <>
        <td>{title}</td>
        <td>${price.toLocaleString()}</td>
        <td>100 U.</td> {/* Reemplaza con el dato real de stock si lo tienes */}
      </>}
      {dataType === 'movements' && <>
        <td>{title}</td>
        <td>{title}</td>
        <td>{price}</td>
        <td>{tipo === 'entrada' ? `$${costo.toLocaleString()}` : '-'}</td>
        <td>{new Date("10-10-2024").toLocaleDateString()}</td>
      </>}
    </tr>
  );
};

export default Item;
