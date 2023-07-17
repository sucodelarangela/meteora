import App from './App.vue';

// Service Worker
import { registerSW } from "virtual:pwa-register";

if ("serviceWorker" in navigator) {
  // && !/localhost/.test(window.location)) {
  registerSW();
}

// Store
import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Routes
import router from './router';

// Styles
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './assets/styles/base.scss';

// Utils
import filters from './utils/filters';

const app = createApp(App);

app.provide('$f', filters);

app.use(router);
app.use(createPinia());

app.mount('#app');
