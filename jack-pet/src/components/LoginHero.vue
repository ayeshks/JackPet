<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'


export default {
  name: 'RegisterForm',
  data() {
    return {
      email: '',
      password: '',
      router: useRouter()
    }
  },
  methods: {
    register() {
      createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((data) => {
          console.log('Logged in')
          console.log(data);
          this.router.push('/')
        })
        .catch((error) => {
          console.log(error.code)
          alert('Sorry you could not sign up' + error.message)
        })
    }
  }
}
</script>

<template>

  <form>
  <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Login now!</h1>
      <p class="py-6">Get in touch with us effortlessly through our contact form. We value your message and will respond promptly. Contact us now!</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
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
          <button class="btn bg-red-btn" @click.prevent="register">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
</form>
</template>
