<template>
    <HeroRes/>
    <Rescue/>
    
</template>

<script>
import Rescue from '../components/Rescue.vue';
import HeroRes from '../components/HeroRes.vue';
    export default {
        name:"LoginPet",
        components: {
            Rescue,
            HeroRes,
        }
        
    }
</script>