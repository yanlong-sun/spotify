import { createApp } from 'vue'
import router from '@/router/index'
import { i18n } from '@/i18n/index'
import HomePage from '@/HomePage'

const app = createApp(HomePage)
app.use(router)
app.use(i18n)
app.mount('#app')
