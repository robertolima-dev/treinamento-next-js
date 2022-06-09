export const getLanguage = () => {
    const isServer = () => typeof window === 'undefined'
    if(isServer()) return null
    return window.localStorage.getItem('language')
}