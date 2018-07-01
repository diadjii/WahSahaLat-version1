import React ,{Component} from 'react'
import { StyleSheet, TextInput, Image, Text, View, Button, SectionList, StatusBar} from 'react-native'



export default class Barre extends Component{


  render(){
  return (
      <View>
        <StatusBar
          backgroundColor="coral"
          barStyle="light-content"
        />
        <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>
          {this.props.title}
        </Text>
        </View>
      </View>
    )
  }
}

const styles = {
  actionColor:"#3cb371"
}
