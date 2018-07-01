import React from 'react';
import {Text, StyleSheet,TouchableOpacity} from 'react-native';

const Button =({onPress,children})=>{
  return(
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}


const styles=StyleSheet.create({
  button:{
    marginTop:10,
    margin:20,
    width:'100%',
    backgroundColor:'#00acef',
    borderRadius:4,
    alignItems:'center',
  },
  text:{
    color:'white',
    fontWeight:'700',
    fontSize:18,
  }

});


export {Button}
