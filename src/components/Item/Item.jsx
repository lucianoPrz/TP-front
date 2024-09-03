import React from 'react';

const Item = ({ id, tipo, marca, costo, stock, producto, cantidad, fecha, index, dataType }) => {
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
        <td>{tipo}</td>
        <td>{producto}</td>
        <td>{cantidad}</td>
        <td>{tipo === 'entrada' ? `$${costo}` : '-'}</td>
        <td>{new Date(fecha).toLocaleDateString()}</td>
      </>}
    </tr>
  );
};

export default Item;
