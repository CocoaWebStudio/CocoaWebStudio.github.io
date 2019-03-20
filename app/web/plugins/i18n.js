import en from 'vee-validate/dist/locale/en'
import es from 'vee-validate/dist/locale/es'
import { Validator } from 'vee-validate/dist/vee-validate.minimal.esm.js'
export default function({ app }) {
  // Loading languages for Vee

  Validator.localize('en', en)
  Validator.localize('es', es)

  // Localizing the app when user refresh or access a localized link
  Validator.localize(app.i18n.loadedLanguages[0])

  // beforeLanguageSwitch called right before setting a new locale
  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    Validator.localize(newLocale)
  }
}
