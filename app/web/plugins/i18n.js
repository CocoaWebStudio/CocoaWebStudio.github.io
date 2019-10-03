import en from 'vee-validate/dist/locale/en.json'
import es from 'vee-validate/dist/locale/es.json'
import fr from 'vee-validate/dist/locale/fr.json'
import { localize } from 'vee-validate/'
export default function({ app }) {
  // Loading languages for Vee
  localize({ en, es, fr })

  // Localizing the app when user refresh or access a localized link
  localize(app.i18n.loadedLanguages[0])

  // beforeLanguageSwitch called right before setting a new locale
  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    localize(newLocale)
  }
}
