import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import MyDonationScreen from '../screens/MyDonationScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';
import MyRecivedBooksScreen from '../screens/MyRecivedBooksScreen';
import {Icon} from 'react-native-elements'
export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions:{
      drawerIcon:<Icon name="home" type="fontawesome5"/>
    }
    },
  MyDonations : {
    screen : MyDonationScreen,
    navigationOptions:{
      drawerIcon:<Icon name="gift" type="font-awesome"/>,
      drawerLabel:"My Donations"
    }
  },
  Notification : {
    screen : NotificationScreen,
    navigationOptions:{
      drawerIcon:<Icon name="bell" type="font-awesome"/>,
      drawerLabel:"Notifications"
    }
  },
  MyRecievedBooks:{
    screen:MyRecivedBooksScreen,
    navigationOptions:{
      drawerIcon:<Icon name="gift" type="font-awesome"/>,
      drawerLabel:"My Recived Books"
    }
  },
  Setting : {
    screen : SettingScreen,
    navigationOptions:{
      drawerIcon:<Icon name="settings" type="fontawesome5"/>,
      drawerLabel:"Settings"
    }
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
