import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

import ShoppingCartIcon from '../components/ShoppingCartIcon';
import styles1 from '../constants/styling';

import { icons, SIZES, images, COLORS } from '../constants';
export default function ChooseSym({ navigation }) {
  const header = (
    <View style={styles.rowFlex1}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          source={icons.close}
          resizeMode="contain"
          style={{
            tintColor: COLORS.white,
            width: 25,
            height: 25,
          }}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>Scan Result</Text>
      <Image
        source={images.logo}
        style={{
          width: 90,
          height: 50,
        }}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      {header}
      <View style={styles.centerFlex}>
        <Image
          source={icons.ic_round}
          resizeMode="contain"
          style={{
            width: SIZES.width * 0.36,
            height: SIZES.width * 0.36,
          }}
        />
      </View>
      <View style={styles.centerFlex}>
        <Text
          style={{
            width: SIZES.width * 0.7,
            color: 'black',
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 10,
          }}>
          Warning
        </Text>
        <Text
          style={{
            width: SIZES.width * 0.7,
            color: COLORS.thrid,
            fontSize: 16,
            textAlign: 'center',
          }}>
          Voluptate amet ad exercitation eu sit dolor et esse excepteur
          consequat consectetur.
        </Text>
        <TouchableOpacity
          style={styles1.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('PossibleCauses')}>
          <Text style={styles1.buttonTextStyle}>Meal Plan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles1.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('PossibleCauses')}>
          <Text style={styles1.buttonTextStyle}>workout Plan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centerFlex: {
    marginTop: SIZES.height * 0.1,
    alignItems: 'center',
  },
  rowFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
  rowFlex1: {
    backgroundColor: COLORS.primary,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
  },
  container: {
    flex: 1,
  },
  headerText: {
    color: COLORS.white,
    fontSize: 15,
    width: SIZES.width * 0.5,
    textAlign: 'center',
  },
});
