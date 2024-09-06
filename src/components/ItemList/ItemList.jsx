import Item from "../Item/Item";

const ItemList = ({ items, dataType }) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            {dataType === 'products' && <>
              <th scope="col">Tipo</th>
              <th scope="col">Marca</th>
              <th scope="col">Costo</th>
              <th scope="col">Stock</th>
            </>}
            {dataType === 'movements' && <>
              <th scope="col">Tipo de Movimiento</th>
              <th scope="col">Producto</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Costo</th>
              <th scope="col">Fecha</th>
            </>}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <Item key={item.id} {...item} index={index + 1} dataType={dataType} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
