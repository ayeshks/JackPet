<template>

    <productHero/>
    <productCollection/>
    
</template>

<script>
import productCollection from '../shop/productCollection.vue';
import productHero from '../shop/productHeo.vue'
    export default {
        name:"Shop",
        components: {
            productHero,
            productCollection,
  

            
        }
        
    }
</script>