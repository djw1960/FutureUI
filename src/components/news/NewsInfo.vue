<template>
    <div>
        <h1>this is newsinfo  for id {{id}}</h1>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                id:this.$route.params.id
            }
        },
        created:function(){
            console.log(this.$route.params.id);
        }
    }
</script>

<style scoped>

</style>