import { LANG_CHNG } from '../actions/languageActions';

const defaultLang = 'EN';

const languageReducer = (state = defaultLang, action) => {
    switch(action.type){
        case LANG_CHNG: 
            return action.payload;
        default: 
            return state;
    }
};

export default languageReducer;