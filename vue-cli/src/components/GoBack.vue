<template>
<div>
    <button class="btn btn-warning" @click="goBack">Go Back</button>
</div>
</template>
<script>
export default {
    methods: {
        goBack(){
            console.log('click');
            return this.$router.go(-1);
        }
    },
}
</script>