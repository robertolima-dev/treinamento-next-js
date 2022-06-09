import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLanguage } from './language'

const resources = {
    en: {
        translation: {
            
        }
    },
    pt: {
        translation: {
            
        }
    },
    es: {
        translation: {
            
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: getLanguage() ?? 'pt',
        interpolation: {
            escapeValue: false
        },
        react: {
            // https://react.i18next.com/latest/trans-component#trans-props
            transSupportBasicHtmlNodes: true,
            transKeepBasicHtmlNodesFor: ["br", "strong", "b", "i"],
        }
    });

export default i18n;