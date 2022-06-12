import React, {useState} from 'react';
import {View, Text, Dimensions, ScrollView, StyleSheet} from 'react-native';
import DebitCardView from './DebitCardView';
import ProgressBarView from './CustomViews/ProgressbarView';
import DebitCardFunctionView from './DebitCardFunctionView';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

const DebitCardDetailCardView = props => {
  const [debitCardHeight, setDebitCardHeight] = useState(0);
  const debitCardInfo = useSelector(state => state.DebitCardInfo.debitCardInfo);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={style.containerView}>
      <View style={style.emptyView} />
      <View style={style.containerStyle}>
        <View style={style.debitCardContainerStyle}>
          <DebitCardView
            setDebitCardHeight={setDebitCardHeight}
            userName={debitCardInfo.userName}
            debitCardNumber={debitCardInfo.cardNumber}
            expiryDate={debitCardInfo.expiryDate}
            cvv={debitCardInfo.cvv}
          />
          <View style={style.hideCardOptionView}>
            <Icon
              name={'eye-off-outline'}
              size={18}
              color={'#00dc50'}
              style={{paddingVertical: 5, paddingLeft: 5}}
            />

            <Text style={style.hideCardNumberTectStyle}>
              {'Hide card number'}
            </Text>
          </View>
        </View>
        <View
          style={[
            style.DebitCardInfoBottomView,
            {
              paddingTop:
                debitCardHeight - Dimensions.get('window').width * 0.1,
            },
          ]}>
          <ProgressBarView />
          <DebitCardFunctionView {...props} />
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  containerView: {
    backgroundColor: 'transparent',
  },
  containerStyle: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 18,
  },
  debitCardContainerStyle: {
    position: 'absolute',
    top: -Dimensions.get('window').width * 0.1,
    left: 0,
    right: 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
  emptyView: {height: Dimensions.get('window').height * 0.3},
  DebitCardInfoBottomView: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: Dimensions.get('window').width * 0.3,
  },
  hideCardOptionView: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    top: -Dimensions.get('window').width * 0.06,
    marginRight: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    height: 40,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  hideCardNumberTectStyle: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    textAlignVertical: 'center',
    fontSize: 12,
    marginBottom: 10,
    color: '#00dc50',
  },
});
export default DebitCardDetailCardView;
