import React, { useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  Image,
  Platform,
  TextInput,
  Keyboard,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';
import { useSelector } from 'react-redux';
import { CheckBox } from 'react-native-elements';

import Button from '../components/Button';

import { images, SIZES, COLORS } from '../constants';
import { getOffers } from '../api/offersAPI';
import SelectDropdown from 'react-native-select-dropdown';
const dropData = ['data1', 'data2', 'data3', 'data4'];
export default function Home({ navigation }) {
  const [offers, setOffers] = useState([]);
  const userAuthToken = useSelector(state => state.auth.token);

  useEffect(() => {
    const data = [
      {
        id: 1,
        name: 'item1',
        price: 100,
        image: 'https://picsum.photos/200/300',
      },
      {
        id: 2,
        name: 'item2',
        price: 400,
        image: 'https://picsum.photos/200/300',
      },
      {
        id: 3,
        name: 'item3',
        price: 340,
        image: 'https://picsum.photos/200/300',
      },
    ];
    setOffers(data);
  }, []);

  const showToast = message => {
    Toast.showWithGravity(message, Toast.SHORT, Toast.TOP);
  };
  const ButtonSub = (
    <View style={styles.centerFlex}>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonTextStyle}>Submit your detail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonTextStyle}>What to do next</Text>
      </TouchableOpacity>
    </View>
  );
  const menu = (
    <View style={styles.centerFlex}>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('GlobalCovid')}>
        <Text style={styles.buttonTextStyle}>Global Covid Update</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.centerFlex}>
        <Text style={styles.buttonTextStyleReg}>Covid Notifier</Text>
        <Text style={styles.TextStyleRg}>NO Exposure Detected</Text>
        <Image
          source={images.radar}
          style={{
            width: SIZES.width * 0.8,
            height: SIZES.width * 0.8,
          }}
        />
        <Text style={styles.buttonTextStyleReg}>Covid Notifier Is Active</Text>
        <Text style={{ textAlign: 'center' }}>
          Nulla dolor ad minim do cupidatat aute excepteur et labore deserunt
          laborum et aliquip. Veniam do amet nisi mollit quis consequat ipsum
          mollit dolore dolor nulla. Id enim cillum nulla cillum officia
          cupidatat occaecat tempor labore consectetur eu. Consequat eiusmod
          minim laboris aliqua et aliquip labore ad. Qui esse exercitation est
          eu enim officia elit cupidatat laborum excepteur sint. Dolor mollit ea
          ut exercitation ad proident labore aliquip aliqua aliqua amet ipsum
          pariatur non.
        </Text>

        {menu}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  banner: {
    marginTop: -30,
    backgroundColor: COLORS.primary,
    width: SIZES.width * 0.8,
    height: 40,
    overflow: 'hidden',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
    // flex: 1,
    alignItems: 'center',
  },
  centerFlex: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },

  centerFlex2: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  offerText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  rowFlex: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: SIZES.width,
    alignContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  buttonTextStyleReg: {
    color: COLORS.third,
    fontSize: 20,
    paddingVertical: 7,
    fontWeight: 'bold',
  },
  buttonTextStyle: {
    color: COLORS.white,
    fontSize: 20,
    paddingVertical: 7,
    fontWeight: 'bold',
  },
  TextStyleRg: {
    color: COLORS.third,
    fontSize: 15,
    width: SIZES.width * 0.4,
    paddingVertical: 7,
    fontWeight: 'bold',
  },
  buttonStyle: {
    backgroundColor:  COLORS.secondary,
    borderWidth: 0,
    color: COLORS.white,
    height: 50,
    width: 230,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },

  inputStyle: {
    flex: 1,
    width: SIZES.width * 0.3,
    color: COLORS.third,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: COLORS.darkgray,
    borderWidth: 1,
    borderRadius: 30,
    marginHorizontal: 20,
    margin: 5,
  },
});
