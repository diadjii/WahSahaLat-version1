import React from 'react';
import {ActivityIndicator, View, Text,StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';

import { StackNavigator} from 'react-navigation';

import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'
import AjoutSujet from './AjoutSujet'
import ListSujet from './ListSujet'

const App = StackNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main,
    AjoutSujet,
    ListSujet
  },
  {
    initialRouteName: 'Login'
  }
)


export default App
