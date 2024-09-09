import React from 'react';

const Item = ({ id, tipo, marca, costo, stock, producto, costoTotal, cantidad, fechaHora, index, dataType }) => {
  return (
    <tr>
      <th scope="row">{index}</th>
      {dataType === 'products' && <>
        <td>{tipo}</td>
        <td>{marca}</td>
        <td>${costo}</td>
        <td>{stock}</td> {/* Reemplaza con el dato real de stock si lo tienes */}
      </>}
      {dataType === 'movements' && (
  <>
    <td>{tipo}</td>
    <td>{producto.tipo} {producto.marca}</td>
    <td>{Math.abs(cantidad)}</td>
    <td>{tipo === 'ingreso' ? `$${costoTotal}` : '-'}</td>
    <td>
      {new Date(fechaHora).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}{" "}
      {new Date(fechaHora).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
    </td>
  </>
)}

    </tr>
  );
};

export default Item;
