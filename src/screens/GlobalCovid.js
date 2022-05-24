import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Toast from 'react-native-simple-toast';

import DoneModal from '../components/DoneModal';
import ItemDetais from '../components/detailsMsg';
import Item from '../components/Item';

import { removeItemFromCart as removeItemFromCartActionCreator } from '../redux/cartItemsSlice';
import { SIZES } from '../constants';
import styles from '../constants/styling';
import { checkout } from '../api/checkoutAPI';

function GlobalCovid({ navigation }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartItems.value);
  const userAuth = useSelector(state => state.auth.token);
  const [modalVisible, setModalVisible] = useState(false);

  const checkOut = () => {
    setModalVisible(true);

    var result = cartItems.map(function (a) {
      return a.productId;
    });

    checkoutOrder(result);
  };
  const checkoutOrder = result => {
    const payload = {
      items: [
        {
          productId: result[0],
        },
      ],
    };
    checkout(payload)
      .then(response => {
        if (response.error || !response.data.token) {
          showToast(response.error);
          return;
        }
        const { data } = response;
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const showToast = message => {
    Toast.showWithGravity(message, Toast.SHORT, Toast.TOP);
  };
  const getSum = items => {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
      sum += items[i].price;
    }
    return sum;
  };

  const removeItemFromCart = item =>
    dispatch(removeItemFromCartActionCreator(item));

  return (
    <View style={styles.container}>
      <View style={styles.rowFlex1}>
        <Text style={styles.headerText}>Global Covid Update</Text>
      </View>
      <View>
        <View style={styles.rowFlex2}>
          <ItemDetais msg={'Country'} />
          <ItemDetais msg={'New'} />
          <ItemDetais msg={'Total'} />
        </View>
        <View style={styles.rowFlex2}>
          <ItemDetais msg={'Europe'} />
          <ItemDetais msg={'05'} />
          <ItemDetais msg={'25'} />
        </View>
        <View style={styles.rowFlex2}>
          <ItemDetais msg={'Africa'} />
          <ItemDetais msg={'05'} />
          <ItemDetais msg={'25'} />
        </View>
        <View style={styles.rowFlex2}>
          <ItemDetais msg={'Asia'} />
          <ItemDetais msg={'05'} />
          <ItemDetais msg={'25'} />
        </View>
      </View>

      <View style={styles.rowFlex1}>
        <Text style={styles.headerText}>Covid Notifier</Text>
      </View>
      <View style={styles.centerFlex}>
        <TouchableOpacity style={styles.buttonStyleCovi} activeOpacity={0.5}>
          <Text style={styles.buttonTextStyle}>
            What do you do if your exposed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyleCovi} activeOpacity={0.5}>
          <Text style={styles.buttonTextStyle}>How it works</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyleCovi} activeOpacity={0.5}>
          <Text style={styles.buttonTextStyle}>Help</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyleCovi}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Privacy')}>
          <Text style={styles.buttonTextStyle}>Privacy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default GlobalCovid;
