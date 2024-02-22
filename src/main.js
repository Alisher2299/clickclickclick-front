import Vue3Toastify from 'vue3-toastify';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import './assets/main.css';

const app = createApp(App);

app
  .use(router)
  .use(Vue3Toastify);

app.mount('#app');
