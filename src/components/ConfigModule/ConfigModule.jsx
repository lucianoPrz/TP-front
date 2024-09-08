import React, { useState } from 'react';
import apiConfig from '../../services/config';

const ConfigModule = ( ) => { 
const url = apiConfig.urlConfig
  const [config, setConfig] = useState({
    stockMin: 0,
    porcentajeCostoMax: 0,
  });

  const [loading, setLoading] = useState(false);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig({
      ...config,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Realizar solicitud PUT al endpoint con el id de configuración
      const response = await fetch(url, { 
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(config),
      });

      if (!response.ok) throw new Error('Error al actualizar la configuración');

      alert('Configuración actualizada exitosamente');
    } catch (error) {
      alert('Hubo un error al actualizar la configuración. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="config-form">
      <h2>Configuración de Márgenes y Costo</h2>

      <div className="mb-3">
        <label htmlFor="stockMargin" className="form-label">Margen de Stock</label>
        <input
          type="number"
          className="form-control"
          id="stockMargin"
          name="stockMargin"
          value={config.stockMargin}
          onChange={handleChange}
          placeholder="Ingresa el margen de stock"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="costValue" className="form-label">Valor del Costo</label>
        <input
          type="number"
          className="form-control"
          id="costValue"
          name="costValue"
          value={config.costValue}
          onChange={handleChange}
          placeholder="Ingresa el valor del costo"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? 'Guardando...' : 'Guardar Configuración'}
      </button>
    </form>
  );
};

export default ConfigModule;
