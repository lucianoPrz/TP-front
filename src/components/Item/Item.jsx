import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, title, price, image }) => {
  return (
    <div className="card col-sm-12 col-md-6 col-lg-2 mx-3 my-1">
      <img src={image} className="card-img-top h-50" alt={title} />
      <div className="card-body d-flex flex-column">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">Precio: ${price}</p>
        <p className="card-text">ID: {id}</p>
        {/* <Link to={`/item/${id}`} className="btn btn-primary">Ver Detalles</Link> */}
      </div>
    </div>
  );
};

export default Item;
