import { Html5QrcodeScanner } from "html5-qrcode";
import { useState, useEffect } from "react";
import apiConfig from "../../services/config";

const Scanner = () => {
    const [scanResult, setScanResult] = useState(null);
    const urlBase = apiConfig.urlProduct; // Base URL del endpoint

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 250,
                height: 250,
            },
            fps: 5
        });

        const scanSuccess = async (result) => {
            // ejemplo de "id=123&stock=10&tipo=salida"
            const params = new URLSearchParams(result);
            const id = params.get('id');
            let stock = parseInt(params.get('stock'), 10);
            const tipo = params.get('tipo'); // 'ingreso' o 'salida'

            // Ajustar el stock según el tipo de movimiento
            if (tipo === 'salida') {
                stock = -stock;
            }
            console.log(id);

            // Construir la URL del endpoint
            const endpoint = `${urlBase}/${id}`;
            const requestBody = {
                stock: stock,
            };

            console.log(endpoint);

            try {
                // Realizar la solicitud PUT
                const response = await fetch(endpoint, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody),
                });

                if (response.status === 400) {
                    // Extraer el cuerpo de la respuesta para obtener la descripción del error
                    const errorData = await response.json();
                    const errorDescription = errorData.description || "Descripción no disponible";

                    // Mostrar el mensaje de error con la descripción
                    alert(`No se puede realizar ${tipo} de producto con ID ${id} con stock ${Math.abs(stock)}. ${errorDescription}`);
                } else if (!response.ok) {
                    throw new Error('Error al actualizar el stock');
                }
                
                if (!response.ok) {
                    throw new Error('Error al actualizar el stock');
                }

                const data = await response.json();
                console.log('Stock actualizado:', data);

                // Mostrar mensaje de éxito
                alert(`Stock actualizado exitosamente por ${tipo} de productos para el producto con ID ${id}. `);
                
                // Limpiar el resultado del escaneo
                setScanResult(null);

            } catch (error) {
                console.error(error.message);
                // Mostrar mensaje de error
                alert('Hubo un problema al actualizar el stock. Intenta nuevamente.');
            }
        };

        const scanFailure = (error) => {
            console.log("Scan failed:", error);
        };

        scanner.render(scanSuccess, scanFailure);

        // Limpiar al desmontar el componente
        return () => {
            scanner.clear().catch(error => console.log("Error clearing scanner on unmount:", error));
        };
    }, []);

    return (
        <>
            <h3>Escáner QR</h3>
            <div>
                <div id="reader" width="600px"></div>
            </div>
        </>
    );
};

export default Scanner;
