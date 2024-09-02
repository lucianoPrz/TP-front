import { Html5QrcodeScanner } from "html5-qrcode";
import { useState, useEffect } from "react";

const Scanner = ({pantalla}) => {
    const [scanResult, setScanResult] = useState(null);
    const url = "http://localhost:8080" 
    
    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 250,
                height: 250,
            },
            fps: 5
        });

        const scanSuccess = (result) => {
            setScanResult(result);
            scanner.clear().catch(error => console.log("Error clearing scanner:", error));
        };

        const scanFailure = (error) => {
            console.log("Scan failed:", error);
        };

        scanner.render(scanSuccess, scanFailure);

        // Limpiar al desmontar el componente
        return () => {
            scanner.clear().catch(error => console.log("Error clearing scanner on unmount:", error));
            // También puedes usar stop() si clear no es suficiente
            // scanner.stop().catch(error => console.log("Error stopping scanner on unmount:", error));
        };
    }, []);

    return (
        <>
            <h3>Escáner QR - Registro de {pantalla}</h3>
            <div>
                {scanResult ? (
                    <div>Success: <a href={`${url}/${scanResult}`}>{`${url}/${scanResult}`}</a></div>
                ) : (
                    <div id="reader" width="600px"></div>
                )}
            </div>
        </>
    );
};

export default Scanner;
