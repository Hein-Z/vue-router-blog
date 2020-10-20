<template>
    
    <ul class="nav nav-tabs navbar fixed-top bg-white pb-0">
     <router-link to="/" class="nav-item" tag="li" ><a class="nav-link" active-class="active">Home</a></router-link>
     <router-link :to="{name:'detail', params:{id:indexInc(index)}}" class="nav-item" tag="li" v-for="(destination,index) in destinations" :key="destination.name"><a class="nav-link" active-class="active">{{destination.name}}</a></router-link>
   </ul>
    
</template>
<script>
import store from '../store.js';
export default {
  data() {
    return {
      destinations: store.destinations
    }
  },
  methods: {
    indexInc: function (index) {
      console.log('here');
      return index+1
    }
  }
}
    

</script>
<style lang="css" scope>

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.nav li.vue-tag-active{
  border: 1px  solid green;
  border-radius: 4px;
  border-bottom: 0;
  box-shadow: -1px -1px 3px rgba(255, 255, 255, 0.3);
}
</style>