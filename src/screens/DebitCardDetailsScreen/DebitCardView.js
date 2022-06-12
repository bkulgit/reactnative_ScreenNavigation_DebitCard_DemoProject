import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DebitCardView = props => {
  const {
    userName = 'User Name',
    debitCardNumber = '0000   0000   0000   0000',
    expiryDate = 'Thru : 00/00',
    cvv = 'cvv : 000 ',
  } = props;

  const onLayout = event => {
    const {x, y, height, width} = event.nativeEvent.layout;
    props.setDebitCardHeight(height);
  };

  return (
    <View style={style.debitCardView} onLayout={onLayout}>
      <View style={style.cardNameAndIConView}>
        <Icon name={'aperture'} size={22} color={'white'} />
        <Text style={style.cardName}>{'aspire'}</Text>
      </View>
      <Text style={style.userName}>{userName}</Text>
      <Text style={style.debitCardNumber}>{debitCardNumber}</Text>
      <View style={style.creditCardMoreInfoText}>
        <Text style={style.expiryDate}>{expiryDate}</Text>
        <Text style={style.cvvText}>{`CVV: ${cvv}`}</Text>
      </View>
      <View style={style.visaTextContainer}>
        <Text style={style.visaTextStyle}>{'VISA'}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  debitCardView: {
    width: '100%',
    backgroundColor: '#00dc50',
    borderRadius: 10,
    paddingVertical: 15,
    paddingLeft: 15,
    zIndex: 10,
  },
  userName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: Dimensions.get('window').height * 0.03,
  },
  debitCardNumber: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    marginTop: 20,
  },
  expiryDate: {
    color: 'white',
    marginTop: 10,
    fontSize: 14,
  },
  cvvText: {
    color: 'white',
    marginTop: 10,
    marginLeft: 20,
    fontSize: 14,
  },
  creditCardMoreInfoText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardNameAndIConView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cardName: {
    paddingRight: 20,
    paddingLeft: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlignVertical: 'center',
  },
  visaTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: 10,
    paddingRight: 20,
  },
  visaTextStyle: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'white',
  },
});

export default DebitCardView;
