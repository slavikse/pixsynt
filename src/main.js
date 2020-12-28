import Vue from 'vue';

import './styles';
import App from './App.vue';

new Vue({
  name: 'Root',
  render: (h) => h(App),
}).$mount('#app');
