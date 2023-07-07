<template>
  <div class="Home">
  <HeroSection/>
  <Products/> 
  <Tips/>
  <rescueCard/>
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue'
import Products from '../components/products.vue'
import Tips from '../components/Tips.vue'
import  rescueCard from '../components/rescueCard.vue'
  export default {
      name:"Home",
      components: {
        HeroSection,
        Products,
        Tips, 
        rescueCard,
      }
      
  }
</script>