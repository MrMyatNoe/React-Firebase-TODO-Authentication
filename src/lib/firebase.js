import firebase from 'firebase/firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    // TODO ADD your firebase data
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

const firebaseApp = firebase.initializeApp(config);
const auth = firebaseApp.auth();
//const {fieldValue} = Firebase.firestore;

//export { firebase, fieldValue};
export {firebaseApp, auth};