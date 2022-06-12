import React from 'react';
import {View, Text} from 'react-native';
import TitleAndSubtitleView from './CustomViews/TiteAndSubtitleView';
import {useSelector, useDispatch} from 'react-redux';
import {updateDebitCardWeeklyLimit} from '../../Store/Actions/DebitCardinfoActions';

const DebitCardFunctionView = props => {
  const WeeklySpendingLimit = useSelector(
    state => state.DebitCardInfo.weeklySpendinglimit,
  );

  const dispatch = useDispatch();

  const gotoDebitCardSetScreen = () => {
    if (WeeklySpendingLimit) {
      dispatch(updateDebitCardWeeklyLimit(0));
    } else {
      props.navigation.navigate('debitCardlimitScreen');
    }
  };

  return (
    <View>
      <TitleAndSubtitleView
        titile={'Top-up Account'}
        subtitle={'Deposit money to your account to use with card'}
        icon={'arrow-up'}
      />
      <TitleAndSubtitleView
        titile={'Weekly spending limit'}
        subtitle={
          WeeklySpendingLimit != 0
            ? `your weekly spending limit is $ ${WeeklySpendingLimit}`
            : `You haven't set any spending limit on card`
        }
        showSwitchView={true}
        icon={'speedometer-outline'}
        ratioButtonClickListner={gotoDebitCardSetScreen}
        switchEnable={WeeklySpendingLimit != 0 ? true : false}
      />
      <TitleAndSubtitleView
        titile={'Freeze card'}
        subtitle={'your debit card is currently active'}
        showSwitchView={true}
        icon={'pause-circle-outline'}
      />
      <TitleAndSubtitleView
        titile={'Get a new card'}
        subtitle={'This deactivites your current debit card'}
        icon={'card-outline'}
      />
      <TitleAndSubtitleView
        titile={'Deactivated card'}
        subtitle={'your previously deactivited cards'}
        icon={'stop-circle-outline'}
      />
    </View>
  );
};

export default DebitCardFunctionView;
