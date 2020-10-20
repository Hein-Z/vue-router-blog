<template>
<div class="container-fluid"> 
    <app-naviation ></app-naviation>
     <router-view :key="$route.path" class="mt-5 pt-5"></router-view>
</div> 
</template>

<script>
import store from './store.js';
import Naviation from './components/Naviation.vue';
export default {
  components: {appNaviation:Naviation}
}
</script>

<style lang="css">

h1, h2 {
  font-weight: normal;
}

.container-fluid{
  overflow: hidden;
}
</style>

