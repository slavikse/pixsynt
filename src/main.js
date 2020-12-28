import Vue from 'vue';

import store from './store';
import router from './router';

import './styles';
import './configure';

import App from './App.vue';

new Vue({
  name: 'Root',
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
