import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import Notiflix from "notiflix";

const firebaseConfig = {
  apiKey: "AIzaSyAx8GpwgEZfIMkTItumcYm-M_XVeVWGxQI",
  authDomain: "numerical-deduction-app.firebaseapp.com",
  projectId: "numerical-deduction-app",
  storageBucket: "numerical-deduction-app.appspot.com",
  messagingSenderId: "520183322376",
  appId: "1:520183322376:web:15091537d6abf55f467ebd",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const authForm = document.querySelector("#authForm");
const secretContent = document.querySelector("#secretContent");
const signUpButton = document.querySelector("#signUpButton");
const signInButton = document.querySelector("#signInButton");
const signOutButton = document.querySelector("#signOutButton");

const modal = document.getElementById("modal");
const signInUpButton = document.getElementById("signInUpButton");
const closeModal = document.getElementById("closeModal");

secretContent.style.display = "none";

const userSignUp = async () => {
  const signUpEmail = userEmail.value;
  const signUpPassword = userPassword.value;
  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      Notiflix.Notify.success("Your account has been created!");
      closeModalFunction();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
};

const userSignIn = async () => {
  const signInEmail = userEmail.value;
  const signInPassword = userPassword.value;
  signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      Notiflix.Notify.success("You have signed in successfully!");
      closeModalFunction();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
};

const checkAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      authForm.style.display = "none";
      secretContent.style.display = "block";
    } else {
      authForm.style.display = "block";
      secretContent.style.display = "none";
    }
  });
};

const userSignOut = async () => {
  await signOut(auth);
  Notiflix.Notify.success("You have signed out successfully!");
};

checkAuthState();

signUpButton.addEventListener("click", userSignUp);
signInButton.addEventListener("click", userSignIn);
signOutButton.addEventListener("click", userSignOut);

const openModal = () => {
  modal.style.display = "block";
};

const closeModalFunction = () => {
  modal.style.display = "none";
};

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModalFunction();
  }
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModalFunction();
  }
});

signInUpButton.addEventListener("click", openModal);
closeModal.addEventListener("click", closeModalFunction);

export { userSignUp, userSignIn, userSignOut, openModal, closeModalFunction };
