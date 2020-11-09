import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB91S2A0Ac-lmKByjvsRD82e00UIhDmnzg",
    authDomain: "web-ecommerce-site.firebaseapp.com",
    databaseURL: "https://web-ecommerce-site.firebaseio.com",
    projectId: "web-ecommerce-site",
    storageBucket: "web-ecommerce-site.appspot.com",
    messagingSenderId: "791948103082",
    appId: "1:791948103082:web:6f28aebe1715201059afd3",
    measurementId: "G-4ZDV917MTR"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase

