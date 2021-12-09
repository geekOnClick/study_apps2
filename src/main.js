import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import components from '@/components/Posts_components/UI'
import router from '@/router/router';
import store from '@/store'

const app = createApp(App);
components.forEach(component => {
    app.component(component.name, component)
});
app
.use(router)
.use(store)
.mount('#app');
