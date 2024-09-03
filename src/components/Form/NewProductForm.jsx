import { useState } from 'react';

const NewProductForm = () => {
    const [tipo, setTipo] = useState('');
    const [marca, setMarca] = useState('');
    const [stock, setStock] = useState('');
    const [costo, setCosto] = useState('');

    const url = "https://apimocha.com/tplabo/products"

    const handleSubmit = async (e) => {
        e.preventDefault();

        const productData = {
            tipo,
            marca,
            stock: parseInt(stock, 10),
            costo: parseFloat(costo),
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            });

            if (!response.ok) {
                throw new Error('Error al agregar el producto');
            }

            const data = await response.json();
            console.log('Producto agregado:', data);

            // Mostrar mensaje de éxito
            alert('Producto agregado exitosamente.');

            // Limpiar el formulario
            setTipo('');
            setMarca('');
            setStock('');
            setCosto('');

        } catch (error) {
            console.error(error.message);
            // Mostrar mensaje de error
            alert('Hubo un problema al agregar el producto. Intenta nuevamente.');
        }
    };

    return (
        <div className='container-fluid'>
            <h2>Agregar Nuevo Producto</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="tipo" className="form-label">Tipo</label>
                <input
                    type="text"
                    className="form-control"
                    id="tipo"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    placeholder="Ingresa el tipo de producto"
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="marca" className="form-label">Marca</label>
                <input
                    type="text"
                    className="form-control"
                    id="marca"
                    value={marca}
                    onChange={(e) => setMarca(e.target.value)}
                    placeholder="Ingresa la marca del producto"
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="stock" className="form-label">Stock</label>
                <input
                    type="number"
                    className="form-control"
                    id="stock"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    placeholder="Ingresa la cantidad de stock"
                    required
                    min="0"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="costo" className="form-label">Costo</label>
                <input
                    type="number"
                    className="form-control"
                    id="costo"
                    value={costo}
                    onChange={(e) => setCosto(e.target.value)}
                    placeholder="Ingresa el costo del producto"
                    required
                    min="0"
                    step="0.01"
                />
            </div>
                <button type="submit"  className="btn btn-primary">Agregar Producto</button>
            </form>
        </div>
    );
};

export default NewProductForm;
