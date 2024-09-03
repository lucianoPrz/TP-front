import { Html5QrcodeScanner } from "html5-qrcode";
import { useState, useEffect } from "react";
import apiConfig from "../../services/config";

const Scanner = ({ pantalla }) => {
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
            // Asumimos que el resultado del escaneo es algo como "id=123&stock=10"
            const [idParam, stockParam] = result.split('&');
            const id = idParam.split('=')[1];
            const stock = stockParam.split('=')[1];

            // Construir la URL del endpoint
            const endpoint = `${urlBase}/${id}`;
            const requestBody = {
                stock: parseInt(stock, 10),
            };

            try {
                // Realizar la solicitud PUT
                const response = await fetch(endpoint, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody),
                });

                if (!response.ok) {
                    throw new Error('Error al actualizar el stock');
                }

                const data = await response.json();
                console.log('Stock actualizado:', data);

                // Mostrar mensaje de éxito
                alert(`Stock actualizado exitosamente para el producto con ID ${id}.`);
                
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
            <h3>Escáner QR - Registro de {pantalla}</h3>
            <div>
                <div id="reader" width="600px"></div>
            </div>
        </>
    );
};

export default Scanner;
