// Configuración de Firebase (Reemplaza con tus datos)
const firebaseConfig = {
    apiKey: "AIzaSyCE5Y9P5iOs1CsTfWqtdd9dHGkP4iW2NSU",
    authDomain: "https://complaints-9052c-default-rtdb.firebaseio.com",
    projectId: "complaints-9052c",
    storageBucket: "complaints-9052c.firebasestorage.app",
    messagingSenderId: "349621042973",
    appId: "1:349621042973:web:5510151c1d578b27c26bf4"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Función para guardar datos en Firestore
function saveData() {
    const inputData = document.getElementById("inputData").value;
    
    db.collection("datos").add({
        texto: inputData,
        fecha: new Date()
    })
    .then(() => {
        alert("Dato guardado correctamente!");
        document.getElementById("inputData").value = "";
        loadData(); // Recargar datos
    })
    .catch((error) => {
        console.error("Error al guardar: ", error);
    });
}

// Función para cargar y mostrar datos
function loadData() {
    const dataList = document.getElementById("dataList");
    dataList.innerHTML = "<h3>Datos guardados:</h3>";

    db.collection("datos")
        .orderBy("fecha", "desc")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                dataList.innerHTML += `<p>${doc.data().texto} (${doc.data().fecha.toDate().toLocaleString()})</p>`;
            });
        });
}

// Cargar datos al iniciar la página
window.onload = loadData;
