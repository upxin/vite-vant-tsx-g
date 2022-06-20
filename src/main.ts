import { createApp } from 'vue';
import { MotionPlugin } from '@vueuse/motion';
import router from '@/router';
import store from '@/store';
import App from './App.vue';
import './App.scss';
import './style/custom.scss';

import 'amfe-flexible';

const app = createApp(App);
app.use(router).use(store).mount('#app');
app.use(MotionPlugin);
