<template>
<section class="experience-details py-5">
    <h1 class="title">Experience</h1>
    <h2 class="title experience-details__title">
        {{experience.name}}
    </h2>
    <div class="experience-details__content-box">
        <img class="experience-details__image img-thumbnail" :src="require(`../assets/${experience.image}`)" :alt="experience.name">
        <div class="experience-details__text">{{experience.description}}</div>
    </div>
</section>
</template>

<script>
import store from '../store.js'
export default {
    props: {
        id: {
            type: Number,
            require: true
        },
        experienceSlug: {
            type: String,
            require: true
        }
    },
    computed: {
        destination() {
            return store.destinations.find(
                destination => destination.id == this.id
            )
        },
        experience() {
            return this.destination.experiences.find(
                experience => experience.slug == this.experienceSlug
            )
        }
    },
}
</script>

<style lang="scss" scoped>
.experience-details {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content 1fr;
    text-align: center;

    &__title {
        justify-self: start;
        margin: 20px;
    }

    &__content-box {
        display: block;
        text-align: justify;
    }

    &__image {
        width: 40%;
        float: left;
        margin: 20px;
        margin-top: 0;
    }

    &__text {
        color: #42b983;
    }

}
</style>
