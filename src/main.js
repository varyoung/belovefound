// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Entry from 'src/Entry'
import router from 'src/router'

Vue.config.productionTip = false

// 引入iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

require("./resource/css/global.css");

// 引入iconfont
import "./resource/iconfont/iconfont.css"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Entry },
  template: '<Entry/>'
})
