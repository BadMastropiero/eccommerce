import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Google configuration
const config = {
    apiKey: "AIzaSyB91S2A0Ac-lmKByjvsRD82e00UIhDmnzg",
    authDomain: "web-ecommerce-site.firebaseapp.com",
    databaseURL: "https://web-ecommerce-site.firebaseio.com",
    projectId: "web-ecommerce-site",
    storageBucket: "web-ecommerce-site.appspot.com",
    messagingSenderId: "791948103082",
    appId: "1:791948103082:web:6f28aebe1715201059afd3",
    measurementId: "G-4ZDV917MTR"
};

// Save user to firestore database
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}


firebase.initializeApp(config);

// Call the firebase method auth
export const auth = firebase.auth();

// Call the firestore method
export const firestore = firebase.firestore();

// Call the Google Sign In Option
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

// Call the method that trigger Google auth
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase

