import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import * as Elicons from '@element-plus/icons-vue'
import router from './router/index'
import { Popup } from 'vant'
import { ConfigProvider } from 'vant'
import { Field, Picker, Cell, Icon, Radio, RadioGroup ,CellGroup} from 'vant'
import 'bootstrap/dist/css/bootstrap.css'
import 'vant/lib/index.css'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(Popup)
app.use(ConfigProvider).use(Field).use(Picker).use(Cell).use(Icon).use(Radio).use(RadioGroup).use(CellGroup)
for (const name in Elicons) {
  app.component(name, Elicons[name]);
}
app.mount('#app')