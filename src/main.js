import { createApp } from 'vue'
import App from './App.vue';
import { application as firebaseApp } from '@/firebase/instance.js';

/* Your Configuration */
import router from '@/routes/index.js';
import store from '@/vuex/store.js';

/* Styles Global */
import '@/assets/styles/tailwindcss/index.css';
import "element-plus/dist/index.css";

const implementApp = createApp(App);

implementApp.use(store);
implementApp.use(router);
implementApp.provide('FirebaseAppplication', firebaseApp).mount('#app')
