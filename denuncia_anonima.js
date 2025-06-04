document.addEventListener('DOMContentLoaded', function() {
    // Obtener ubicación del usuario
    let latitud = null;
    let longitud = null;
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                latitud = position.coords.latitude;
                longitud = position.coords.longitude;
            },
            function(error) {
                console.error("Error al obtener la ubicación: ", error);
            }
        );
    } else {
        console.error("Geolocalización no soportada por este navegador");
    }
    
    // Manejar el botón de regresar
    document.getElementById('btnRegresar').addEventListener('click', function() {
        window.history.back();
    });
    
    // Manejar el envío del formulario
    document.getElementById('denunciaForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const tipoDenuncia = document.getElementById('tipoDenuncia').value;
        const detalles = document.getElementById('detalles').value;
        const foto = document.getElementById('foto').files[0];
        
        // Obtener fecha y hora actual
        const now = new Date();
        const dateTime = now.toLocaleString('es-MX', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
        
        // Generar ID único para la denuncia
        const denunciaId = 'denuncia_anonima' + now.getTime();
        
        // Crear objeto con los datos de la denuncia
        const denunciaData = {
            tipo: tipoDenuncia,
            detalles: detalles,
            dateTime: dateTime,
            ubicacion: latitud && longitud ? `${latitud},${longitud}` : "No disponible",
            latitud: latitud  ? `${latitud}` : "No disponible",
            longitud: longitud  ? `${longitud}` : "No disponible",
        };
        
        // Subir datos a Firebase
        const denunciasRef = database.ref('denuncias/' + denunciaId);
        denunciasRef.set(denunciaData)
            .then(() => {
                alert('Denuncia enviada correctamente');
                document.getElementById('denunciaForm').reset();
            })
            .catch((error) => {
                console.error('Error al enviar denuncia: ', error);
                alert('Ocurrió un error al enviar la denuncia');
            });
    });
});
