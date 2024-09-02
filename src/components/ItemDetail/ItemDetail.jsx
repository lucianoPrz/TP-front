import { useState } from "react"
// import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
// import { useContext } from "react"
// import { CarritoContext } from "../../context/CarritoContext"

const ItemDetail = ({ id, title, price, image, /*stock,*/ description }) => {
  // const [agregarCantidad, setAgregarCantidad] = useState(0);

  // const { agregarProducto } = useContext(CarritoContext);

  // const handlerCantidad = (cantidad) => {
  //   setAgregarCantidad(cantidad)

  //   const item = { id, nombre, precio };
  //   agregarProducto(item, cantidad)

  // };


  return (
    <div >
      <div className='card w-75 d-flex container-fluid my-3 '>
        <div className="card-body d-flex flex-column">
          <h2 className='card-title'>Nombre: {title}</h2>
          <h3 className='card-title'>Precio: $ {price}</h3>
          <h3 className='card-title'>ID: {id}</h3>
          <p className='card-text fw-semibold'>{description}</p>
          <p className="card-subtitle mb-2 text-muted">Talles únicos. Compra minima 5 unidades.</p>
        </div>
        <img src={image} alt={title} className='img card-img-top w-50 m-3' />
        
        
      </div>
    </div>
  )
}

export default ItemDetail