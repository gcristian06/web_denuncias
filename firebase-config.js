// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCE5Y9P5iOs1CsTfWqtdd9dHGkP4iW2NSU",
    authDomain: "complaints-9052c.firebaseapp.com",
    databaseURL: "https://complaints-9052c-default-rtdb.firebaseio.com",
    projectId: "complaints-9052c",
    storageBucket: "complaints-9052c.firebasestorage.app",
    messagingSenderId: "349621042973",
    appId: "1:349621042973:web:5510151c1d578b27c26bf4"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();
