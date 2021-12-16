import { createApp } from 'vue'
import App from './App.vue'

import router from './routes'   //  routes/index.js가져오기

const app = createApp(App);

app.use(router);
app.mount('#app');
