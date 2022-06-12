import {
  WEEKLY_SPENDING_LIMITS,
  WEEKLY_SPENDING_LIMIT_AT_SELECT,
} from '../Constant/Constant';

export const updateDebitCardWeeklyLimit = weeklylimitAmmount => {
  return {
    type: WEEKLY_SPENDING_LIMITS,
    payload: weeklylimitAmmount,
  };
};

export const updateTmpWeeklySpendingValue = tempValue => {
  return {
    type: WEEKLY_SPENDING_LIMIT_AT_SELECT,
    payload: tempValue,
  };
};
