import React from 'react';
import { StyleSheet, Text, View, Button,} from 'react-native'

export default class Sujet extends React.Component{


  render(){
    const subject= this.props.item
    return(
      <View style={styles.container}>
        <View >
          <Text style={{fontSize: 20,fontWeight: 'bold',color:"blue"}}>{subject.titre}</Text>
        </View>
        <View>
          <Text>Auteur : {subject.auteur}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <Button style={{width: 50, height: 50, backgroundColor: 'powderblue'}}
        title="Qui" />
          <Button style={{width: 50, height: 50, backgroundColor: 'powderblue'}}
          title="Non" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
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
})
