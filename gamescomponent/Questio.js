import React, { useState,useEffect } from 'react'
import {  Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Questio() {
  
  return (
        <View>
              
       {Object.keys().map((key)=>{return(
          <TouchableOpacity onPress={()=>{handlequest()}} style={handle?styles.typog:styles.typo}>
           <Image source={props.ques[key]} style={styles.imagearray} />
           </TouchableOpacity>
       )})}
            </View>
        )
}


/*
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
    
borderRadius:5,
marginTop:24,
padding:30,
  }

})
