import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCT9VwzYwnUEKKT1KKENFfRyezj05Y1tzE",
    authDomain: "chat-app-df809.firebaseapp.com",
    databaseURL: "https://chat-app-df809.firebaseio.com",
    projectId: "chat-app-df809",
    storageBucket: "",
    messagingSenderId: "928768262227",
    appId: "1:928768262227:web:db9eec4363df7a548a86a6",
    measurementId: "G-0SQE6S5NS4"
};

firebase.initializeApp(firebaseConfig);
export default firebase