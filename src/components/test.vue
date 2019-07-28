<template>
    <div>
        test, Hi!
        <input v-model="myfrom.a" v-test><br/>
        <input v-model="myfrom.b"><br/>
        <input v-model="myfrom.c"><br/>
        <input type="button" value="提交" @click="rsp" >
        <input type="button" value="修改"
               @click="xg">
        <input v-model="testinput">

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "test",
        data(){
            return {
                myfrom:{
                  a:"",
                  b:"",
                  c:""
                },
                testinput: ""
            }
        },
        methods:{
            init:function () {
                this.testinput ="123123";
            },
            rsp:function () {
                alert(JSON.stringify(this.myfrom));
                axios({
                    method: 'get',
                    url: `/api/test`, //8181, 8888
                    params: this.myfrom
                }).then(res => {
                 console.info(res)
                });
            },
            xg:function () {
                // 模拟数据
                let obj={a:"123",b:"456",c:"789"};
                this.myfrom =  obj;
            }
        },
        watch:{
            myfrom: function (oldval) {
                console.info(JSON.stringify(oldval))
            }
        },
        beforeCreate(){
            console.info("beforeCreate")
        },
        created(){
            console.info("created")
        },
        beforeMount(){
            console.info("beforeMount")
        },
        mounted(){
            this.init();
            console.info("mounted")
        },
        beforeUpdate() {
            console.info("beforeUpdate")
        },
        updated() {
            console.info("updated")
        },
        beforeDestroy() {
            console.info("beforeDestroy")
        },
        destroyed() {
            console.info("destroyed")
        }
    }
</script>

<style scoped>

</style>