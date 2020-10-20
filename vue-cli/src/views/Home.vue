<template>
<div class="home">
<h1 class="text-center pt-4" style="color:#42b983">All Destination</h1>
    <div class="destination">
        
        <div class="destination__link--text" v-for="destination in destinations" :key="destination.name">
            <router-link :to="{name:'detail', params:{id:destination.id}}" class="nav-item" tag="li" ><a class="nav-link" active-class="active">{{destination.name}}</a></router-link>
        <figure class="destination__link--figure">
            <router-link :to="{name:'detail', params:{id:destination.id}}"><img class="destination__link--image" :src="require(`../assets/${destination.image}`)" alt="destination.name"></router-link>
        </figure>
        </div></div>
    </div>
</template>
<script>

import store from '../store';
export default {
    data() {
        return {
            destinations:store.destinations
        }
    },
}
</script>
<style lang="scss" scope>
    .destination{
        display: flex;
justify-content: space-around;
        &__link--image{
            width: 120px;
        }
    }



</style>

