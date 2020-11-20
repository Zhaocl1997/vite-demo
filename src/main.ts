import { createApp } from 'vue'
import App from './App.vue'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import { setupStore } from './store'

import './index.css'

import router from './router'

const app = createApp(App)

app.use(Antd)
app.use(router)

setupStore(app)

app.mount('#app')
