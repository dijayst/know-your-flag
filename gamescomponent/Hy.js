import React from 'react'

import { Image, Text, View, StyleSheet,Button,TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function Hy({ques,handl,handle}) {
    return (
        <View>
          <Text>Am not giving up</Text>
        {ques.map((item)=>{return(
          <TouchableOpacity key={item.id} onPress={handl(item.id)} style={handle?styles.typog:styles.typo}>
          <Image source={item.image} style={styles.imagearray} />
          </TouchableOpacity>)})}
            </View>
        )
}


/*
     
{Object.keys(ques).map((key)=>{return(
          <TouchableOpacity onPress={handl} style={handle?styles.typog:styles.typo}>
           <Image source={ques[key]} style={styles.imagearray} />
           </TouchableOpacity>
       )})}



const styles =StyleSheet.create({
    container:{
      backgroundColor:'yellow',
      flex:1,
    paddingHorizontal:20
    },
    body:{
      backgroundColor:'pink',
      padding:40,
      marginTop:5,
      fontSize:20,
  
    },
    imagearray:{
  height:40,
  width:40,
  borderRadius:5,
  marginTop:24,
  padding:30,
  
    },
    bold:{
      fontWeight:'bold',
      backgroundColor:'white',
      borderRadius:12,
      width:150,
      height:30
  
    }
  })*/
  
const styles=StyleSheet.create({
  container:{
    backgroundColor:'yellow',
    flex:1,
  paddingHorizontal:20
  },

  body:{
    backgroundColor:'pink',
    padding:40,
    marginTop:5,
    fontSize:20,

  },
  imagearray:{
height:40,
width:40,
justifyContent:"center",
borderRadius:5,
marginTop:-29.5,
padding:30,

  },
  bold:{
    fontWeight:'bold',
    backgroundColor:'white',
    borderRadius:12,
    width:150,
    height:30

  },
  typog:{
    backgroundColor:"red",
    width:45,
    height:45,
borderRadius:5,
marginTop:24,
padding:30,
  },
  typo:{
    backgroundColor:"green",
    width:45,
    height:45,
justifyContent:"center",
borderRadius:5,
marginTop:24,
padding:30,
  }

})
