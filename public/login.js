	  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
	  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
	  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

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
	  const analytics = getAnalytics(app);
	  const auth = getAuth();
      
	  //----- Login code start	  
	  document.getElementById("login").addEventListener("click", function(e) {
        e.preventDefault();
		  var email =  document.getElementById("email").value;
		  var password = document.getElementById("password").value;

		  signInWithEmailAndPassword(auth, email, password)
		  .then((userCredential) => {
		    // Signed in 
		    const user = userCredential.user;
		    console.log(user);
            document.getElementById("loginform").reset();
		    alert(user.email+" Login successfully!!!");
            // var request = new XMLHttpRequest();
            // request.open("POST", '/login', true);
            // request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
            // request.send (user.email);
		    // document.getElementById('logout').style.display = 'block';
		    // window.location.replace("/");
            // ...
		  })
		  .catch((error) => {
		    const errorCode = error.code;
		    const errorMessage = error.message;
		    console.log(errorMessage);
		    alert(errorMessage);
		  });		  		  
	  });
	  //----- End

	  //----- Logout code start	  
	//   document.getElementById("logout").addEventListener("click", function() {
	// 	  signOut(auth).then(() => {
    //             // Sign-out successful.
    //             console.log('Sign-out successful.');
    //             alert('Sign-out successful.');
    //             // document.getElementById('logout').style.display = 'none';
    //             var request = new XMLHttpRequest();
    //             request.open("POST", '/signout', true);
    //             request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    //             request.send();
    //             window.location.replace("/");
	// 		}).catch((error) => {
	// 		  // An error happened.
	// 		  console.log('An error happened.');
	// 		});		  		  
	//   });
	  //----- End
	