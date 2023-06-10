import Home from '@/view/Home.vue'
import History from '@/view/History.vue'
import Setting from '@/view/Setting.vue'
import Help from '@/view/Help.vue'
import Store from '@/view/Store.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'history',
    path: '/history',
    component: History
  },
  {
    name: 'setting',
    path: '/setting',
    component: Setting
  },
  {
    name: 'help',
    path: '/help',
    component: Help
  },
  {
    name: 'store',
    path: '/store',
    component: Store
  },
];
export default routes
