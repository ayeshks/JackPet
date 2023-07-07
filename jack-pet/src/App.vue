<script setup>
import { RouterLink, RouterView } from 'vue-router';
import TopNav from './components/TopNav.vue';
import Footer from './components/Footer.vue';




</script>

<template>
  <div class="bg-gray-800">
  <TopNav/> 
 <RouterView />  
  <Footer/>
  
  </div>
   
</template>

<style scoped>

</style>
