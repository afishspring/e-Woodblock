import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import * as Elicons from '@element-plus/icons-vue'
import router from './router/index'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
for (const name in Elicons) {
  app.component(name, Elicons[name]);
}

app.mount('#app')