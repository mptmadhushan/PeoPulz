import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import LoginScreen from '../screens/LogIn';
import Register from '../screens/Register';
import OnBoarding from '../screens/OnBoarding';
import BottomNavigator from './BottomNavigation/BottomNavigator';
import ChooseSym from '../screens/ChooseSym';
import CustomerReq from '../screens/CustomerReq';
import Estimate from '../screens/Estimate';
import Symptoms from '../screens/Symptoms';
import ItemDetails from '../screens/ItemDetails';
import ContactUs from '../screens/ContactUs';
import ScanFail from '../screens/ScanFail';
import MyItems from '../screens/MyItems';
import MyDetails from '../screens/MyDetails';
import Contact from '../screens/Contact';
import GlobalCovid from '../screens/GlobalCovid';
import RelatedFactor from '../screens/RelatedFactor';
import PossibleCauses from '../screens/PossibleCauses';
import MedicalReport from '../screens/MedicalReport';
import ShoppingCartIcon from '../components/ShoppingCartIcon';

export const ScreenNames = {
  Estimate: 'Estimate',
  GlobalCovid: 'GlobalCovid',
  Contact: 'Contact',
  Login: 'Login',
  OnBoarding: 'OnBoarding',
  Register: 'Register',
  Home: 'Home',
  MyItems: 'MyItems',
  MyDetails: 'MyDetails',
  ItemDetails: 'ItemDetails',
  RelatedFactor: 'RelatedFactor',
  ContactUs: 'ContactUs',
  ScanFail: 'ScanFail',
  ChooseSym: 'ChooseSym',
  CustomerReq: 'CustomerReq',
  Items: 'Items',
  Symptoms: 'Symptoms',
  MedicalReport: 'MedicalReport',
  Profile: 'Profile',
  PossibleCauses: 'PossibleCauses',
};

export const { Navigator, Screen } = createStackNavigator();

export default function MainStackNavigator() {
  const userAuthToken = useSelector(state => state.auth.token);

  return (
    <Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
      }}>
      {/* {!userAuthToken || userAuthToken === '' ? (
        <Screen name={ScreenNames.OnBoarding} component={LoginScreen} />
      ) : ( */}
      {/* <> */}
      <Screen name={ScreenNames.Login} component={LoginScreen} />
      <Screen
        name={ScreenNames.Home}
        component={BottomNavigator}
        options={{ headerShown: false }}
      />
      <Screen
        name={ScreenNames.OnBoarding}
        component={OnBoarding}
        options={{ headerShown: false }}
      />
      <Screen
        name={ScreenNames.RelatedFactor}
        component={RelatedFactor}
        options={{ headerShown: false }}
      />
      <Screen
        name={ScreenNames.GlobalCovid}
        component={GlobalCovid}
        options={{ headerShown: false }}
      />
      <Screen
        name={ScreenNames.MyItems}
        component={MyItems}
        options={{ headerShown: false }}
      />
      <Screen
        name={ScreenNames.MyDetails}
        component={MyDetails}
        options={{ headerShown: false }}
      />
      <Screen
        name={ScreenNames.Register}
        component={Register}
        options={{ headerShown: false }}
      />
      <Screen
        name={ScreenNames.ItemDetails}
        component={ItemDetails}
        options={{ headerShown: false }}
      />
      <Screen
        name={ScreenNames.ContactUs}
        component={ContactUs}
        options={{ headerShown: false }}
      />
      <Screen
        name={ScreenNames.ScanFail}
        component={ScanFail}
        options={{ headerShown: false }}
      />
      <Screen
        name={ScreenNames.ChooseSym}
        component={ChooseSym}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name={ScreenNames.Contact}
        component={Contact}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name={ScreenNames.PossibleCauses}
        component={PossibleCauses}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name={ScreenNames.CustomerReq}
        component={CustomerReq}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name={ScreenNames.MedicalReport}
        component={MedicalReport}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name={ScreenNames.Symptoms}
        component={Symptoms}
        options={{
          headerShown: false,
        }}
      />
      {/* </> */}
      {/* )} */}
    </Navigator>
  );
}
