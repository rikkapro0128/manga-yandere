import { createApp } from 'vue'
import App from './App.vue'

/* Your Configuration */
import router from '@/routes/index.js';

/* Styles Global */
import '@/assets/styles/tailwindcss/index.css';

createApp(App).use(router).mount('#app')
