import React, { useState } from 'react';
import apiConfig from '../../services/config';

const ConfigModule = () => { 
  const url = apiConfig.urlConfig; // URL del endpoint de configuración
  const [config, setConfig] = useState({
    stockMin: 0,
    porcentajeCostoMax: 0,
  });

  const [loading, setLoading] = useState(false);

  // Manejar el cambio en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig({
      ...config,
      [name]: value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(JSON.stringify(config));
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
        <label htmlFor="stockMin" className="form-label">Margen de Stock</label>
        <input
          type="number"
          className="form-control"
          id="stockMin"
          name="stockMin"
          value={config.stockMin}
          onChange={handleChange}
          placeholder="Ingresa el margen de stock"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="porcentajeCostoMax" className="form-label">Porcentaje Máximo de Costo</label>
        <input
          type="number"
          className="form-control"
          id="porcentajeCostoMax"
          name="porcentajeCostoMax"
          value={config.porcentajeCostoMax}
          onChange={handleChange}
          placeholder="Ingresa el porcentaje máximo de costo"
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
