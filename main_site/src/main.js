// Core vue components
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

// Custom components
import Home from './components/home.vue'
import Skills from './components/skills.vue'
import About from './components/about.vue'
import Work from './components/work.vue'

// The Store
import { store } from '../store/index.js'

// My App
import App from './App.vue'

// Font awesome imports
import { library } from '@fortawesome/fontawesome-svg-core'

import { faRecycle } from '@fortawesome/fontawesome-free-solid'
library.add(faRecycle);

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon);

// Vue Config
Vue.config.productionTip = false;
Vue.config.runtimeCompiler = true;
Vue.config.devtools = true;
Vue.use(Vuex);
Vue.use(VueRouter);

// vue-router Config
const routes = [
  { path: '/', component: Home },
  { path: '/skills', component: Skills },
  { path: '/about', component: About },
  { path: '/work', component: Work },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// Start Vue App
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
