import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './router';
Vue.use(VueRouter);

const router = new VueRouter({
  linkExactActiveClass:'vue-tag-active',
  mode:'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if(to.hash){
      return {selector:to.hash};
    }else{
      return ;
    }
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
