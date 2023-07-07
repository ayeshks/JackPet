import './index.css'
import './assets/scss/dog.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import firebase from "./firebaseConfig.json"
//import "firebase/compat/auth"
//import "firebase/compat/firestore"
//  Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
  // apiKey: "AIzaSyCk53sFk2pQxPF6wwabv0gLhkgTLUMYCNE",
  // authDomain: "jackpet-c8906.firebaseapp.com",
  // projectId: "jackpet-c8906",
//  storageBucket: "jackpet-c8906.appspot.com",
  // messagingSenderId: "319609863333",
  // appId: "1:319609863333:web:11d126fd1ebad9e785214c"
// };

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
