import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, title, price, image }) => {
  return (
    
      <tr>
        <th scope="row">{id}</th>
        <td>{title}</td>
        <td>{price}</td>
        <td>100 U.</td>
      </tr>
    



  );
};

export default Item;
