import { Link } from 'react-router-dom'



// eslint-disable-next-line react/prop-types
const Item = ({id, title, price, image/*,  stock*/}) => {
  return (
    <div className='card col-sm-12 col-md-6 col-lg-2 mx-3 my-1'>
        <img src={image} className='card-img-top h-50' alt={title} />
        <div className="card-body d-flex flex-column">
          <h4 className='card-title'>{title}</h4>
          <p className='card-text'>Precio: ${price}</p>
          <p className='card-text'>ID: {id}</p>
          {/* <p className='card-text'>Stock: {stock}</p> */}
          <Link to={`/item/${id}`} className='btn btn-primary'> Ver Detalles </Link>
        </div>
    </div>
  )
}

export default Item