import React from 'react'
import { StyleSheet, Platform, Image, Text, View,Button } from 'react-native'
import firebase from 'react-native-firebase';

export default class Main extends React.Component {
  state = { currentUser: null }


  componentWillMount(){
    var config = {
      apiKey: "AIzaSyB8G-6VZsUMUxxJfdShW1rASUYqv_O-Zqo",
      authDomain: "wahsahalat-e0340.firebaseapp.com",
      databaseURL: "https://wahsahalat-e0340.firebaseio.com",
      projectId: "wahsahalat-e0340",
      storageBucket: "wahsahalat-e0340.appspot.com",
      messagingSenderId: "469763873745"
    };
    firebase.initializeApp(config);
  }

  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }
  render() {
    const { currentUser } = this.state
    return (
      <View style={styles.container}>
      <Text>
      Hi {currentUser && currentUser.email}!
      </Text>

      <Button
      title="Creer Sujet"
      onPress={() => this.props.navigation.navigate('AjoutSujet')}/>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
