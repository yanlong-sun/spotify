import { createApp } from 'vue'
import router from '@/router/index'
import HomePage from '@/HomePage'

const app = createApp(HomePage)
app.use(router)
app.mount('#app')
