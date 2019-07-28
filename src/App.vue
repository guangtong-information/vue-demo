<!--
a、package.json 的dependencies加"vue-router": "^3.0.7",
b、命令行：npm install 或者 npm i
c、main.js文件添加
	import VueRouter from "vue-router";
	Vue.use(VueRouter);
-->
<template>
  <div id="app">
    <div>页头</div><br/>
    <router-view></router-view><br/>
    <div>页尾</div>
  </div>
</template>
<script>
  import test from './components/test.vue'
  import test1 from './components/test1.vue'
  // import test2 from './components/test2.vue'
  import VueRouter from "vue-router";
  const router = new VueRouter({
    routes: [
      // 动态路径参数 以冒号开头
      { path: '/test', component: test },
      { path: '/1', component: test1 },
      { path: '/2', component:  resolve => require(['./components/test2.vue'], resolve) },
    ]
  });
  export default {
    name: 'app',
    router: router,
    components: {
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
