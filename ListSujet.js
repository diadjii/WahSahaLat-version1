import React from 'react';
import { StyleSheet, TextInput, Image, Text, View, Button, FlatList,StatusBar} from 'react-native'

import firebase from 'react-native-firebase';
import Barre from './Barre'
import Sujet from './Sujet';

export default class ListSujet extends React.Component{
  state = { sujets:[]};
  _renderItem = (snap,item) =>{
    snap.forEach((child) =>{

      item.push({
        key:child.key,
        titre:child.val().titre,
        description:child.val().description,
        auteur:child.val().auteur
      });
    })
  }

  componentWillMount(){
    firebase.database().ref().on('value',(data)=>{
      var items=[]
      this._renderItem(data,items);
      items = items.reverse();
      this.setState({sujets:items})
    })
  }

  render(){
    return(
      <View style={styles.container}>
      <View style={styles.header}>
        <Barre  title="Test Menu"/>
      </View>
      <FlatList
      data={this.state.sujets}
      renderItem={({item})=> <Sujet item={item}/>}
      />
      </View>
    )
  }
}
// <StatusBar
// backgroundColor="blue"
// barStyle="light-ceontent"
// />
// <SectionList
// sections={this.state.sujets}
// renderSectionHeader={ ({section}) => <Text style={styles.SectionHeaderStyle}> { section.title } </Text> }
// renderItem={ ({item}) => <Text style={styles.SectionListItemStyle} onPress={this.GetSectionListItem.bind(this, item)}> { item } </Text> }
// keyExtractor={ (item, index) => index }
// />

const styles = StyleSheet.create({
  container: {
    flex: 1,
       flexDirection: 'row',
       justifyContent: 'center',

  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  header:{
    textAlign: "center",
  }
})
