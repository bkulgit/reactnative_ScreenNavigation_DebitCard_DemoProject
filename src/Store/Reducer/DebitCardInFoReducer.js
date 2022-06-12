import {
  UPDATE_DEBIT_CARD_IMFORMATION,
  WEEKLY_SPENDING_LIMITS,
  WEEKLY_SPENDING_LIMIT_AT_SELECT,
} from '../Constant/Constant';

const initialState = {
  weeklySpendinglimit: 0,
  weeklySpendingLimitTemp: 5000,
  debitCardInfo: {
    userName: 'Mark Henrry',
    cardNumber: '5647   3411   2413   2020',
    expiryDate: 'thru: 12/20',
    cvv: '456',
  },
};

const DebitCardInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEEKLY_SPENDING_LIMITS:
      return {
        ...state,
        weeklySpendinglimit: action.payload,
      };
    case WEEKLY_SPENDING_LIMIT_AT_SELECT:
      return {
        ...state,
        weeklySpendingLimitTemp: action.payload,
      };
    case UPDATE_DEBIT_CARD_IMFORMATION:
      return {
        ...state,
        debitCardInfo: action.payload,
      };
    default:
      return state;
  }
};

export default DebitCardInfoReducer;
