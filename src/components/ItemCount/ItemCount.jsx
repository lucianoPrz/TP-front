import { useState, useEffect } from "react"


const ItemCount = ({stock, inicial}) => {

    const  [cont, setCont] = useState(inicial)

    const incrementar = () => {
        cont < stock ? setCont(cont + 1) : setCont(cont)
    }

    const decrementar = () => {
        cont > inicial ? setCont(cont - 1) : setCont(cont)
    }

  return (
    <div className="d-flex">
        <button className="mx-2" onClick={decrementar}> - </button>
        <p className="mx-2">{cont}</p>
        <button className="mx-2" onClick={incrementar}> + </button>

        
    </div>
  )
}

export default ItemCount