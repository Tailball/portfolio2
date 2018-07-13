export const LANG_CHNG = 'language:change';

export const ChangeLanguage = (lang) => {
    return {
        type: LANG_CHNG,
        payload: lang
    };
};