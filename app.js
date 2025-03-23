/* === Imports === */
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
/* === Firebase Setup === */
const firebaseConfig = {
    apiKey: "AIzaSyC0uSD-zf0DMFOgkbpypwLWO4WinkAr120",
    authDomain: "moody-6195a.firebaseapp.com",
    projectId: "moody-6195a",
    storageBucket: "moody-6195a.firebasestorage.app",
    
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
/* === UI === */

/* == UI - Elements == */

const viewLoggedOut = document.getElementById("logged-out-view")
const viewLoggedIn = document.getElementById("logged-in-view")

const signInWithGoogleButtonEl = document.getElementById("sign-in-with-google-btn")

const emailInputEl = document.getElementById("email-input")
const passwordInputEl = document.getElementById("password-input")

const signInButtonEl = document.getElementById("sign-in-btn")
const createAccountButtonEl = document.getElementById("create-account-btn")

/* == UI - Event Listeners == */

signInWithGoogleButtonEl.addEventListener("click", authSignInWithGoogle)

signInButtonEl.addEventListener("click", authSignInWithEmail)
createAccountButtonEl.addEventListener("click", authCreateAccountWithEmail)

/* === Main Code === */

showLoggedOutView()

/* === Functions === */

/* = Functions - Firebase - Authentication = */

function authSignInWithGoogle() {
    console.log("Sign in with Google")
}

function authSignInWithEmail() {
    console.log("Sign in with email and password")
}

function authCreateAccountWithEmail() {
  const email = emailInputEl.value
  const password = passwordInputEl.value
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      showLoggedInView()
    })
    .catch((error) => {
      console.error(error.message)
    });
  
}



/* == Functions - UI Functions == */

function showLoggedOutView() {
    hideElement(viewLoggedIn)
    showElement(viewLoggedOut)
}

function showLoggedInView() {
    hideElement(viewLoggedOut)
    showElement(viewLoggedIn)
}

function showElement(element) {
    element.style.display = "flex"
}

function hideElement(element) {
    element.style.display = "none"
}