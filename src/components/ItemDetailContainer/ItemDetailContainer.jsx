import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
// import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const url = "https://fakestoreapi.com/products"; // API BACKEND
    // const { idItem } = useParams();

    useEffect(() => {
        const pedirProducto = async () => {
            try {
                const response = await fetch(`${url}/1`);
                if (!response.ok) {
                    throw new Error("Error al obtener el producto");
                }
                const data = await response.json();
                setProducto(data);
            } catch (error) {
                console.log("Error:", error);
            }
        };

        pedirProducto();
    }, []);

    return (
        producto ? <ItemDetail {...producto}/> : <p>Cargando...</p>
    );
};

export default ItemDetailContainer;
