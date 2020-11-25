import { createApp } from 'vue'
import App from './App.vue'

import './design/index.scss'

import { setupAntd } from './setup/antdv'
import { setupRouter } from './setup/Router'
import { setupStore } from './setup/Store'

const app = createApp(App)

setupAntd(app)
setupRouter(app)
setupStore(app)

app.mount('#app')
