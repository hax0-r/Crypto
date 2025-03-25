import i18n from 'i18next'
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
        en: {
            translation: {
                mainHeading:{
                    line1:"Crypto-trading",
                    line2:"with bots and smart trades",
                },
                signUp: "Sign Up Now"
            },
        },
        ur: {
            translation: {
                mainHeading:{
                    line1:"کرپٹو ٹریڈنگ",
                    line2:"بوٹس اور سمارٹ ٹریڈز کے ساتھ",
                },
                signUp: "ابھی سائن اپ کریں",
            },
        },
    },
})

// i18n.changeLanguage("fr");

export default i18n;