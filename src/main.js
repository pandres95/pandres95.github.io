import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
  faLinkedinIn,
  faGithub,
  faGitlab
} from '@fortawesome/free-brands-svg-icons'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import store from './store'

import './registerServiceWorker'

library.add(
  faCompactDisc,
  faFacebookSquare, faTwitterSquare, faInstagram, faLinkedinIn,
  faGithub, faGitlab);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueAnalytics, {
  id: 'UA-106396384-2',
  checkDuplicatedScript: true
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app');
