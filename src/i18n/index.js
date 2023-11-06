import { createI18n } from 'vue-i18n'
import en from './common/en_us.json'

const messages = {
  en,
}

export const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})
