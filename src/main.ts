import { createApp } from 'vue';
import router from '~/router';
import store from '~/store';
import App from './App.vue';
import './App.scss';
import 'amfe-flexible';

const app = createApp(App);
app.use(router).use(store).mount('#app');
