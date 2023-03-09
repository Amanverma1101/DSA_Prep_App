import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
      apiKey: "AIzaSyDoMlriG5ch5Vursn-T1N8MOOtifZlT6LU",
      authDomain: "designkoktail-f13c3.firebaseapp.com",
      projectId: "designkoktail-f13c3",
      storageBucket: "designkoktail-f13c3.appspot.com",
      messagingSenderId: "237876784229",
      appId: "1:237876784229:web:85cdaab127d61f2b0c6a8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
//   // reference your database



//----- New Registration code start	  
document.getElementById("register").addEventListener("click", async function(e) {
  e.preventDefault();
    var email =  document.getElementById("email0").value;
    var password = document.getElementById("password0").value;
    // var confirm_password = document.getElementById("confpassword").value;
    //For new registration
    // if(password===confirm_password){
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // const id= user.reloadUserInfo.localId;

      const db = firestore.collection(`karigarss`);
      db.doc(document.getElementById("email0").value).set({
          email: email,
          }).then(()=>{   
             alert("data stored to firestore !");
            //   var request = new XMLHttpRequest();
            //   request.open("POST", '/signup', true);
            //   request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
            //   request.send (email);
            //   window.location.href="/select";
          })
          .catch((error)=>{
          alert(error);
          });


      document.getElementById("signupform").reset();
      // window.location.replace("select.html");
      // alert("Registration successfully!! Now Login");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(error);
    });		  		  
//   }
//   else{
//       alert("Password / Confirm_Paswword are different !");
//   }
});
//----- End
