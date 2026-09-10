// Archivo de prueba para análisis estático con Snyk Code
function simularCargaCyberCompra() {
    let registrosTransacciones = [];
    
    // Simulación de un bucle de espera asíncrono defectuoso que genera consumo masivo de memoria
    while (true) {
        let datosTemporales = new Array(1000000).fill("Transaccion pendiente de pago");
        registrosTransacciones.push(datosTemporales);
        
        console.log("Procesando transacciones concurrentes...");
    }
}

simularCargaCyberCompra();
