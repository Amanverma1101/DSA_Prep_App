import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
  import { getAuth ,GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAZfrzfaC55Rhz-DWlsNefV4OGWDSp4fzU",
    authDomain: "dsa-prep-bc564.firebaseapp.com",
    projectId: "dsa-prep-bc564",
    storageBucket: "dsa-prep-bc564.appspot.com",
    messagingSenderId: "27808377602",
    appId: "1:27808377602:web:5762a8db431c863ca4301b"
  };
  

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider(app);




  document.getElementById('signInWithGoogle1').addEventListener('click',(e) => {
   // signInWithRedirect(auth, provider);


   // redirect the result
  //  getRedirectResult(auth)
  //    .then((result) => {
  //      // This gives you a Google Access Token. You can use it to access Google APIs.
  //      const credential = GoogleAuthProvider.credentialFromResult(result);
  //      const token = credential.accessToken;

  //      // The signed-in user info.
  //      const user = result.user;

  //    }).catch((error) => {
  //      // Handle Errors here.
  //      const errorCode = error.code;
  //      const errorMessage = error.message;
  //      // The email of the user's account used.
  //      const email = error.email;
  //      // The AuthCredential type that was used.
  //      const credential = GoogleAuthProvider.credentialFromError(error);
  //      // ...
       
  // });


// sign in with popup tab
signInWithPopup(auth, provider)
  .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // var request = new XMLHttpRequest();
        // request.open("POST", '/googlelogin', true);
        // request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
        let data = {
          "email":user.email,
          "profile": user.photoURL,
          "name": user.displayName
        }
        // request.send (JSON.stringify(data));
		    // document.getElementById('logout').style.display = 'block';
        console.log(user);
        alert("Hello "+user.displayName+", You are Successfully Logged In !");
        // window.location.replace("/");

    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(email + error);
    // ...

    alert(errorMessage);
  });
 });








 document.getElementById('signInWithGoogle0').addEventListener('click',(e) => {
 // sign in with popup tab
 signInWithPopup(auth, provider)
   .then((result) => {
         // This gives you a Google Access Token. You can use it to access the Google API.
         const credential = GoogleAuthProvider.credentialFromResult(result);
         const token = credential.accessToken;
         // The signed-in user info.
         const user = result.user;
         // var request = new XMLHttpRequest();
         // request.open("POST", '/googlelogin', true);
         // request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
         let data = {
           "email":user.email,
           "profile": user.photoURL,
           "name": user.displayName
         }
         // request.send (JSON.stringify(data));
             // document.getElementById('logout').style.display = 'block';
         console.log(user);
         alert("Hello "+user.displayName+", You are Successfully Logged In !");
         // window.location.replace("/");
 
     // ...
   }).catch((error) => {
     // Handle Errors here.
     const errorCode = error.code;
     const errorMessage = error.message;
     // The email of the user's account used.
     const email = error.email;
     // The AuthCredential type that was used.
     const credential = GoogleAuthProvider.credentialFromError(email + error);
     // ...
 
     alert(errorMessage);
   });
  });





//   signOut.addEventListener('click',(e) => {

//    signOut(auth).then(() => {
//     // Sign-out successful.
//    }).catch((error) => {
//     // An error happened.
//    });

//   });