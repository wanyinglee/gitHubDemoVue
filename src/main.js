// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueMarkdown from 'vue-markdown'
import BaseButton from './components/base-components/BaseButton.vue'
import BaseInput from './components/base-components/BaseInput.vue'
import BaseNav from './components/base-components/BaseNav.vue'

Vue.config.productionTip = false
Vue.component('base-input', BaseInput)
Vue.component('base-nav', BaseNav)
Vue.component('base-button', BaseButton)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { 
    App,
    VueMarkdown
  },
  template: '<App/>'
})
