import {createStore, combineReducers} from 'redux';
import DebitCardInfoReducer from '../Reducer/DebitCardInFoReducer';

const apprReducer = combineReducers({DebitCardInfo: DebitCardInfoReducer});

const appStore = createStore(apprReducer);

export default appStore;
