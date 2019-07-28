<template>
    <div>
        test1
    </div>
</template>

<script>
    export default {
        name: "test1",
        beforeCreate(){
            console.info("test1_beforeCreate")
        },
        created(){
            console.info("test1_created")
        },
        beforeMount(){
            console.info("test1_beforeMount")
        },
        mounted(){
            console.info("test1_mounted")
        },
        beforeUpdate() {
            console.info("test1_beforeUpdate")
        },
        updated() {
            console.info("test1_updated")
        },
        beforeDestroy() {
            console.info("test1_beforeDestroy")
        },
        destroyed() {
            console.info("test1_destroyed")
        }
    }
</script>

<style scoped>

</style>