import Item from "../Item/Item"


// eslint-disable-next-line react/prop-types
const ItemList = ({productos}) => {
  return (
    <div className="contenedorProductos row container-fluid m-auto">
        {productos.map( prod => <Item key={prod.id} {...prod} />)}
    </div>
  )
}

export default ItemList