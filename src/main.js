import { createApp } from 'vue'
import App from './App.vue';
import { application as firebaseApp } from '@/firebase/instance.js';

/* Your Configuration */
import router from '@/routes/index.js';

/* Styles Global */
import '@/assets/styles/tailwindcss/index.css';
import "element-plus/dist/index.css";

const implementApp = createApp(App);

implementApp.provide('FirebaseAppplication', firebaseApp).use(router).mount('#app')
