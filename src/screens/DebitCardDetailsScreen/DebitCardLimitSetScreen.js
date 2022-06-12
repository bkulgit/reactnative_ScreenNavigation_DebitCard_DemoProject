import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {
  updateDebitCardWeeklyLimit,
  updateTmpWeeklySpendingValue,
} from '../../Store/Actions/DebitCardinfoActions';

const DebitCardlimitSetScreen = props => {
  const {navigation} = props;

  const tempWeeklyLimit = useSelector(
    state => state.DebitCardInfo.weeklySpendingLimitTemp,
  );
  const dispatch = useDispatch();

  return (
    <View style={styles.containerstyle}>
      <View style={styles.headerView}>
        <Icon
          name={'chevron-back-outline'}
          size={22}
          color={'white'}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Icon name={'aperture'} size={22} color={'white'} />
      </View>

      <Text style={styles.spendingLimitTitle}>{'Spending Limit'}</Text>

      <View style={styles.spendingLimitViewContainer}>
        <View style={{flexDirection: 'row'}}>
          <Icon name={'speedometer-outline'} size={18} color={'gray'} />
          <Text style={{marginLeft: 10, color: 'black'}}>
            {'Set a weekly debit card spending limit'}
          </Text>
        </View>

        <View style={styles.balanceView}>
          <Text style={styles.textwithboxBackground}>{'$'}</Text>
          <Text style={styles.availableBalacetext}>{tempWeeklyLimit}</Text>
        </View>

        <View style={styles.deviderView} />
        <Text
          style={{
            marginTop: 5,
            color: '#c8c8c8',
            fontSize: 12,
          }}>
          {'Here weekly means the last 7 days - not the calender week'}
        </Text>

        <WeeklyLimitSetoption
          setWeeklyLimit={value => {
            dispatch(updateTmpWeeklySpendingValue(value));
          }}
        />

        <View style={styles.saveBtnContainerView}>
          <TouchableOpacity
            style={styles.saveBtnViewStyle}
            activeOpacity={1}
            onPress={() => {
              dispatch(updateDebitCardWeeklyLimit(tempWeeklyLimit));
              navigation.goBack();
            }}>
            <Text style={styles.saveBtnTextStyle}>{'Save'}</Text>
          </TouchableOpacity>

          <View style={styles.deviderView} />
        </View>
      </View>
    </View>
  );
};

const WeeklyLimitSetoption = props => {
  let limit = ['5,000', '10,000', '20,000'];
  return (
    <View style={{flexDirection: 'row', marginTop: 30}}>
      {limit.map(item => {
        return (
          <Text
            onPress={() => {
              props.setWeeklyLimit(item);
            }}
            style={styles.limitOptionTextStyle}
            key={item}>
            {item}
          </Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  containerstyle: {
    height: Dimensions.get('window').height,
    backgroundColor: '#0b5f6d',
  },
  headerView: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  spendingLimitTitle: {
    marginTop: 30,
    paddingLeft: 20,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  spendingLimitViewContainer: {
    marginTop: 30,
    paddingTop: 20,
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  balanceView: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  textwithboxBackground: {
    backgroundColor: '#00dc50',
    paddingHorizontal: 8,
    borderRadius: 3,
    paddingVertical: 1,
  },
  availableBalacetext: {
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  deviderView: {
    width: '100%',
    height: 1,
    backgroundColor: '#c8c8c8',
    marginTop: 15,
  },
  limitOptionTextStyle: {
    color: '#00dc50',
    marginRight: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#dcf7e6',
    borderRadius: 5,
  },
  saveBtnViewStyle: {
    width: Dimensions.get('window').width * 0.6,
    paddingVertical: 15,
    backgroundColor: '#00dc50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  saveBtnTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  saveBtnContainerView: {
    width: '100%',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height * 0.4,
  },
});
export default DebitCardlimitSetScreen;
