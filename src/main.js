import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
Vue.use(VueRouter)
Vue.config.productionTip = false

//, binding, vnode, oldVnode
Vue.directive("test",
    function (el) {
  el.addEventListener("input",function () {
    el.value=el.value.replace(/[^\d]/g,'')
  })
});


new Vue({
  render: h => h(App)
}).$mount('#app')
