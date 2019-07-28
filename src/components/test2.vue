<template>
    <div>
        test2
    </div>
</template>

<script>
    export default {
        name: "test2",
        beforeCreate(){
            console.info("test2_beforeCreate")
        },
        created(){
            console.info("test2_created")
        },
        beforeMount(){
            console.info("test2_beforeMount")
        },
        mounted(){
            console.info("test2_mounted")
        },
        beforeUpdate() {
            console.info("test2_beforeUpdate")
        },
        updated() {
            console.info("test2_updated")
        },
        beforeDestroy() {
            console.info("test2_beforeDestroy")
        },
        destroyed() {
            console.info("test2_destroyed")
        }
    }
</script>

<style scoped>

</style>