import Item from "../Item/Item"


// eslint-disable-next-line react/prop-types
const ItemList = ({ productos }) => {
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Producto</th>
            <th scope="col">Costo</th>
            <th scope="col">Stock</th>
          </tr>
        </thead>
          <tbody>
            {productos.map(prod => <Item key={prod.id} {...prod} />)}
          </tbody>
      </table>


    </>

  )
}

export default ItemList