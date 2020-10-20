<template>
<div>
    <section class="destination">
        <h1 class="title destination__title">{{destination.name}}</h1>
        <div class="destination__detail">
            <img class="destination__detail-image img-thumbnail" :src="require(`../assets/${destination.image}`)" :alt="destination.name">
            <div class="destination__detail-text">{{destination.description}}</div>
        </div>
    </section>
    <go-back class='text-right'></go-back>
    <section class="experience" id="experience">
        <h1 class="title experience__title">Top experience in {{destination.name}}</h1>
        <div class="experience__cards cards">
            <div class="experience__card card" v-for="experience in destination.experiences" :key="experience.slug">
                <router-link :to="{
                    name:'experieceDetail',
                    params:{experienceSlug:experience.slug},
                    hash:'#experience' 
                 }" class="experience__card-link">
                    <img class="experience__card-image " :src="require(`../assets/${experience.image}`)" :alt="experience.name">
                    <div class="experience__card-name">{{experience.name}}</div>
                </router-link>
            </div>
        </div>
    </section>
    <router-view :key="$route.path"></router-view>
</div>
</template>

<script>
import store from '../store.js'
import GoBack from '../components/GoBack.vue'

export default {
    data() {
        return {
            destinationId: this.$route.params.id
        }
    },
    // watch: {
    //     '$route'(to,from){
    //         this.destinationId=to.params.id
    //     }
    // },
    components:{
        GoBack,
    },
    computed: {
        destination() {
            return store.destinations.find(
                destination => destination.id == this.destinationId
            )
        }
    },
}
</script>

<style lang="scss" scoped>
.destination {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
    text-align: center;

    &__detail {
        display: block;
        text-align: justify;
    }

    &__detail-image {
        width: 40%;
        float: left;
        margin: 20px;
        margin-top: 0;
    }

    &__detail-text {
        color: #42b983;
    }

}

.experience {
    text-align: center;

    &__cards {
        display: flex;
    }

    &__card {
        padding: 10px 20px;
        margin: 0 5px;
        position: relative;
        cursor: pointer;
        box-sizing: border-box;

        &:hover &-name {
            opacity: 1;
        }

        &:hover &-image {
            filter: blur(1px) grayscale(100%);
        }
    }

    &__card-link {
        display: contents;
    }

    &__card-image {
        max-height: 200px;
    }

    &__card-name {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 25px;
        font-weight: bolder;
        text-decoration: none;
        opacity: 0;
        transition: all 0.4s;
    }

}
</style>
