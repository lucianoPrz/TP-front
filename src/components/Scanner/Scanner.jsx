import { Html5QrcodeScanner } from "html5-qrcode";
import { useState, useEffect } from "react";

const Scanner = () => {
    const [scanResult, setScanResult] = useState(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 250,
                height: 250,
            },
            fps: 5
        });

        const scanSuccess = (result) => {
            scanner.clear();  // Detiene el escaneo una vez que se ha detectado un código
            setScanResult(result);
        };

        const scanFailure = (error) => {
            console.log("Error al escanear:", error);
        };

        scanner.render(scanSuccess, scanFailure);

        // Limpiar el escáner al desmontar el componente
        return () => {
            scanner.clear().catch(error => {
                console.error("Error al limpiar el escáner:", error);
            });
        };
    }, []);

    return (
        <div>
            {
                scanResult ? (
                    <div>
                        Success: <a href={scanResult}>{scanResult}</a>
                    </div>
                ) : (
                    <div id="reader" width="600px"></div>
                )
            }
        </div>
    );
};

export default Scanner;
