// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import {simplei18n, SET_LANG} from './directive/simplei18n.js';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  directives :{
    simplei18n : simplei18n, 
    SET_LANG : SET_LANG
  },
  template: '<App/>'
})
