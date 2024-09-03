import React from 'react';

const Item = ({ id, tipo, marca, costo, stock, title, image, price, producto, cantidad, fecha, index, dataType }) => {
  return (
    <tr>
      <th scope="row">{index}</th>
      {dataType === 'products' && <>
        <td>{tipo}</td>
        <td>{marca}</td>
        <td>${costo}</td>
        <td>{stock}</td> {/* Reemplaza con el dato real de stock si lo tienes */}
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
