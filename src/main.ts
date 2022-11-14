import { createApp } from 'vue'
import App from './App.vue'
import '@/frontend/mixins/global.scss'
import { createPinia } from 'pinia'
import components from "@/frontend/pages/components/ui-kit";
// import components from "../src/pages/components/ui-kit";


const pinia = createPinia();

const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component)
});



app.use(pinia);

app.mount('#app');
