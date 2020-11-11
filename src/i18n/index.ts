/** @format */

import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'
import langEN from 'I18n/en'
import langCN from 'I18n/zh'

i18n
    // load translation using http -> see /public/locales
    // learn more: https://github.com/i18next/i18next-http-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        resources: {
            en: {
                translation: langEN,
            },
            zh: {
                translation: langCN,
            },
        },
        fallbackLng: 'en', // LanguageDetector优先级高于此设置
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    })

export default i18n
