import React from 'react'
import { StyleSheet, TextInput, Image, Text, View, Button} from 'react-native'

import firebase from 'react-native-firebase';


export default class AjoutSujet extends React.Component{

  state = { titre:'',description:'',currentUser:null,id:''};
  //ajout des donnes dans firebase
  addData=()=>{
    var dateActuel = new Date();

    console.log(this.state.currentUser)
    var config = {
      apiKey: "AIzaSyB8G-6VZsUMUxxJfdShW1rASUYqv_O-Zqo",
      authDomain: "wahsahalat-e0340.firebaseapp.com",
      databaseURL: "https://wahsahalat-e0340.firebaseio.com",
      projectId: "wahsahalat-e0340",
      storageBucket: "wahsahalat-e0340.appspot.com",
      messagingSenderId: "469763873745"
    };
    firebase.initializeApp(config);
    firebase.database().ref(this.state.titre).set(
      {
        titre:this.state.titre,
        description:this.state.description,
        nbreP:25,
        nbN:10,
        dateCreation:dateActuel.getDate(),
        auteur:this.state.currentUser.email,
        n:this.state.currentUser.uid

      }
    ).then(() => {
      console.log("OK ça marche ");
    }).catch((err) => {
      console.log(err);
    })
    firebase.database().ref().child('sujet').once('value',(data)=>{
      console.log(data.toJSON());
    })
  }

  componentWillMount(){
    const _currentUser = firebase.auth().currentUser;
    this.setState({currentUser:_currentUser});
 }
  render(){

    const currentUser = firebase.auth().currentUser

    return(
      <View style={styles.container}>
      <Text>Titre </Text>

      <TextInput
      placeholder = "Votre titre ici"
      onChangeText = {titre =>this.setState({titre})}
      value={this.state.titre}
      />

      <Text>Description :</Text>
      <TextInput
      placeholder = "Votre description ici"
      editable = {true}
      maxLength = {40}
      onChangeText = {description => this.setState({description})}
      />

      <Button
      style={{width: 50, height: 50, backgroundColor: 'steelblue'}}
      title="Creer"
      onPress = {this.addData}
      />
      <Button
      style={{width: 50, height: 50, backgroundColor: 'powderblue'}}
      title="Voir Liste"
      onPress ={()=>this.props.navigation.navigate('ListSujet')}
      />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: 'space-around',

  }
})
