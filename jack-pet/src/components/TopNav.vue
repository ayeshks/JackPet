<script>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import firebaseConfig from '@/firebaseConfig';
import { ref } from 'vue';

const auth = getAuth(firebaseConfig);

export default {
  name: 'TopNav',
  setup() {
    const isLoggedIn = ref(false);
    const isShowMenu = ref(false); // Add this line to define and initialize isShowMenu

    const user = ref('');

    const handleSignOut = () => {
      signOut(auth)
        .then(() => {
          isLoggedIn.value = false; // Use isLoggedIn.value instead of this.isLoggedIn
        })
        .catch((error) => {
          console.log(error);
        });
    };

    onAuthStateChanged(auth, (userData) => {
      if (userData) {
        isLoggedIn.value = true;
        user.value = userData.displayName;
        // userEmail.value = userData.email; // userEmail is not defined in your code
        // userPhoto.value = userData.photoURL; // userPhoto is not defined in your code
      } else {
        isLoggedIn.value = false;
      }
    });

    return {
      isLoggedIn,
      isShowMenu, // Add isShowMenu to the return object
      handleSignOut,
      user
    };
  }
};
</script>
<template>
  <div class="navbar bg-gradient-to-r from-dark-nav to-light-nav">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <img src="hum-mob.png" class="w-10 h-10">
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gradient-to-r from-dark-nav to-light-nav rounded-box w-52 text-white">
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/rescue">Rescue</a></li>
        <li><a href="/donation">Donation</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
    <a href="/"><img src="logo.png" class="lg:w-14 lg:h-14 w-10 h-10"></a> <span class="lg:text-2xl font-semibold text-white"> Jack Pet</span> 
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 text-white">
      <li><a href="/">Home</a></li>
      <li><a href="/shop">Shop</a></li>
      <li><a href="/rescue">Rescue</a></li>
      <li><a href="/donation">Donation</a></li>
      <li><a href="/about">About Us</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <div v-if="isLoggedIn" >
      <button @click="handleSignOut" type="button"  class="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
    </div>
    <div v-else>
      <a href="/login">
        <button type="button"  class="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
      </a>
    </div>
  </div>
</div>
</template>