import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
  faLinkedinIn,
  faGithub,
  faGitlab
} from '@fortawesome/free-brands-svg-icons'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import store from './store'

import './registerServiceWorker'

library.add(
  faPlay, faPause,
  faFacebookSquare, faTwitterSquare, faInstagram, faLinkedinIn,
  faGithub, faGitlab);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app');
