document.getElementById("consultarBtn").addEventListener("click", function() {
    alert("Función de CONSULTAR en desarrollo.");
});

document.getElementById("loginBtn").addEventListener("click", function() {
    alert("Redirigiendo a LOGIN...");
    // window.location.href = "login.html";  // Si tienes una página de login
});

document.getElementById("denunciaBtn").addEventListener("click", function() {
    alert("Formulario de DENUNCIA en desarrollo.");
});

document.getElementById("denunciaAnonimaBtn").addEventListener("click", function() {
    alert("Formulario de DENUNCIA ANÓNIMA en desarrollo.");
});

window.onload = function() {
    const link = document.createElement('a');
    link.href = 'https://github.com/gcristian06/AppDenuncias/blob/main/AppDenuncias.apk';
    link.download = 'AppDenuncias.apk';
    link.click();
};
