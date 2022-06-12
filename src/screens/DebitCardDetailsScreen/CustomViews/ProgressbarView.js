import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const ProgressBarView = () => {
  const WeeklySpendingLimit = useSelector(
    state => state.DebitCardInfo.weeklySpendinglimit,
  );
  var spendAmount = 3450;

  return WeeklySpendingLimit != 0 ? (
    <View style={style.containerStyle}>
      <View style={style.headerContainerStyle}>
        <Text>{'Debit Card spending limit'}</Text>
        <Text style={{color: '#00dc50'}}>
          {`$ ${spendAmount}`}
          <Text
            style={{color: '#757575'}}>{` | $ ${WeeklySpendingLimit}`}</Text>
        </Text>
      </View>
      {getProgressView(spendAmount, WeeklySpendingLimit)}
    </View>
  ) : (
    false
  );
};

const getProgressView = (totalSpend, spendingLimit = '') => {
  let formatedSpendingLimitValue = spendingLimit.replace(',', '');
  let spendingLimitValue = parseInt(formatedSpendingLimitValue);

  const specdingPercentage =
    totalSpend & spendingLimitValue
      ? (totalSpend / spendingLimitValue) * 100
      : 0;

  let progressinPercentage = specdingPercentage + '%';

  return (
    <View style={style.progressViewContainerStyle}>
      <View style={[style.progressBarStyle, {width: progressinPercentage}]} />
    </View>
  );
};

const style = StyleSheet.create({
  headerContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerStyle: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  debitCardTextStyle: {color: 'black'},
  progressViewContainerStyle: {
    width: '100%',
    marginTop: 8,
    backgroundColor: '#dcf7e6',
    height: 8,
    borderRadius: 8,
  },
  progressBarStyle: {
    width: '30%',
    backgroundColor: '#00dc50',
    height: 8,
    borderRadius: 8,
  },
});

export default ProgressBarView;
