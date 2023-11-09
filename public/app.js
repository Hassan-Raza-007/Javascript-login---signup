// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhxHSpBzrS82UlWA7WyfPjwqr85hneac0",
  authDomain: "fire-base-authentication-dd90b.firebaseapp.com",
  projectId: "fire-base-authentication-dd90b",
  storageBucket: "fire-base-authentication-dd90b.appspot.com",
  messagingSenderId: "812265671817",
  appId: "1:812265671817:web:0d2a516b576fedc3d58a58"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);





//******************Signup Email/Password SDK connect here **********************/

function signup() {
  var email = document.getElementById("email")
  var password = document.getElementById("password")

  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user)
      firebase.auth().currentUser.sendEmailVerification()
        .then(() => {
          // Email verification sent!
          // Sweet alert attached
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Verification email sent....",
            showConfirmButton: false,
            timer: 1000
          });
        });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // console.log(errorMessage)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
        
      });
    });
}





//******************Login Email/Password SDK connect here **********************/

function login() {
  var email = document.getElementById("email")
  var password = document.getElementById("password")

  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      setTimeout(function(){
        window.location.href= "./dashboard.html"
    
      },1000)
      console.log(user)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });
}

//****** Forgot password ******/
function forgot(){
  var email = document.getElementById("email")


  firebase.auth().sendPasswordResetEmail(email.value)
  .then(() => {
    // Password reset email sent!
  
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Password reset email sent....",
      showConfirmButton: false,
      timer: 1000
    });

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

}





//******************Login with Google SDK connect here **********************/


function loginwithgoogle(){
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
     console.log(user)
     setTimeout(function(){
      window.location.href= "./dashboard.html"
  
    },1000)

  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    console.log(errorMessage)
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}








//******************Login with Github SDK connect here **********************/


function loginwithgithub(){
  var provider = new firebase.auth.GithubAuthProvider();

  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
     console.log(user)
     setTimeout(function(){
      window.location.href= "./dashboard.html"
  
    },1000)

  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });


}










//******************Login with Facebook SDK connect here **********************/

function loginwithfacebook(){
  var provider = new firebase.auth.FacebookAuthProvider();

  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
      console.log(user)
      setTimeout(function(){
        window.location.href= "./dashboard.html"
    
      },1000)
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // ...
  });
}





// ********** Logout Button **********//
function logout(){

  setTimeout(function(){
    window.location.href= "./index.html"

  },1000)

}