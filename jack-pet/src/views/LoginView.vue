<template>
  <div>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Login now!</h1>
          <p class="py-6">Get in touch with us effortlessly through our contact form. We value your message and will respond promptly. Contact us now!</p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <form>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="text" v-model="email" placeholder="email" class="input input-bordered" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input type="text" v-model="password" placeholder="password" class="input input-bordered" />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn bg-red-btn">Login</button>
              </div>
            </form>
            <div class="form-control mt-6">
              <button class="btn bg-red-btn" @click="handleSignInGoogle">Login with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import firebaseConfig from '@/firebaseConfig';

import { useRouter } from 'vue-router';

const provider = new GoogleAuthProvider();

firebaseConfig;

export default {
  name: 'Login',
  data() {
    return {
      router: useRouter(),
      user: '',
      isLoggedIn: false,
    };
  },
  methods: {
    handleSignInGoogle() {
      signInWithPopup(getAuth(), provider)
        .then((result) => {
          console.log(result.user);
          this.isLoggedIn = true;
          this.router.push('/');
        })
        .catch((error) => {
          alert('Signup Failed' + error.message);
        });
    },
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
