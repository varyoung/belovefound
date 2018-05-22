// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Entry from './entry'
import router from './router'

Vue.config.productionTip = false

// 引入bootstrap
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Entry },
  template: '<Entry/>'
})
