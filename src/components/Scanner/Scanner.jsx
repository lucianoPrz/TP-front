import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";
import apiConfig from "../../services/config";

const Scanner = () => {
    const urlBase = apiConfig.urlProduct; // Base URL del endpoint

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 250,
                height: 250,
            },
            fps: 5
        });

        let scanSuccessful = false;

        const scanSuccess = async (result) => {
            if (scanSuccessful) return; // Si ya se procesó un escaneo, no hacer nada más

            scanSuccessful = true;

            const params = new URLSearchParams(result);
            const id = params.get('id');
            let stock = parseInt(params.get('stock'), 10);
            const tipo = params.get('tipo'); // 'ingreso' o 'salida'

            if (tipo === 'salida') {
                stock = -stock;
            }
            console.log(`Producto ID: ${id}, Tipo: ${tipo}, Stock: ${stock}`);

            const endpoint = `${urlBase}/${id}`;
            const requestBody = { stock };

            try {
                const response = await fetch(endpoint, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    const errorDescription = errorData.description || "Descripción no disponible";

                    alert(`No se puede realizar ${tipo} de producto con ID ${id} con stock ${Math.abs(stock)}. ${errorDescription}`);
                    return;
                }

                const data = await response.json();
                console.log('Stock actualizado:', data);

                alert(`Stock actualizado exitosamente por ${tipo} de productos para el producto con ID ${id}.`);

            } catch (error) {
                console.error(error.message);
                alert('Hubo un problema al actualizar el stock. Intenta nuevamente.');
            } finally {
                scanSuccessful = false; // Permitir escaneos futuros
            }
        };

        const scanFailure = (error) => {
            console.log("Scan failed:", error);
        };

        scanner.render(scanSuccess, scanFailure);

        return () => {
            scanner.clear().catch(error => console.log("Error clearing scanner on unmount:", error));
        };
    }, [urlBase]);

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
