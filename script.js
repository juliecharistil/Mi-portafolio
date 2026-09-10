// Archivo de prueba para análisis estático con Snyk Code - Vulnerabilidad de Inyección de Comandos
const { exec } = require('child_process');

function procesarPagoCyberCompra(datosUsuario) {
    // VULNERABILIDAD CRÍTICA: Se concatena directamente la entrada del usuario en un comando del sistema.
    const comando = 'echo Procesando pago para: ' + datosUsuario;

    console.log("Iniciando operación de pago...");

    // Snyk detectará que el parámetro 'datosUsuario' contamina el comando ejecutado.
    exec(comando, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al ejecutar comando: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}

// Simulación de llamada con datos no sanitizados
procesarPagoCyberCompra("Juan Perez; cat /etc/passwd");
