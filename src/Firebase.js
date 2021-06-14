// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCPcdHz0hvWbCPbfiPD2ATzlotH7E6s8zc",
    authDomain: "disney-clone-9d008.firebaseapp.com",
    projectId: "disney-clone-9d008",
    storageBucket: "disney-clone-9d008.appspot.com",
    messagingSenderId: "410724573681",
    appId: "1:410724573681:web:16a1dca097433f0461a450",
    measurementId: "G-V7XVHYLTCW"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig )
  const db =firebaseApp.firestore();
  const auth =firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();

  export default db;
  export {provider,storage,auth};
 