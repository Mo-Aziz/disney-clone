import  firebase from 'firebase';


// Your web app's Firebase configuration
var firebaseConfig = {
   apiKey: "AIzaSyD9bfLD1Fqh3FaZB_zDJPsnZT4INt9jgeU",
   authDomain: "disney-plus-clone-ma.firebaseapp.com",
   projectId: "disney-plus-clone-ma",
   storageBucket: "disney-plus-clone-ma.appspot.com",
   messagingSenderId: "996398379654",
   appId: "1:996398379654:web:d33307522fd62149fb9707"
 };
 // Initialize Firebase

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();
 const storage = firebase.storage();
 
 export { auth, provider, storage };
 export default db;