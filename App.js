import React, { useState,useEffect } from 'react'
import {  Alert, Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Hy from './gamescomponent/Hy';
import LinearGradient from 'react-native-linear-gradient';

//import {createStackNavigator} from  '@react-navigation/stack'

//const AuthStack= createStackNavigator();
export default function App() {
  


const [handle,sethandle]=useState(false);

const imagee=[{name:"select the flag of Nigeria",options:[
  {image:require("./imagee/uk.png"),iscorrect:false},
  {image:require("./imagee/nig.png"),iscorrect:true},
  {image:require("./imagee/gh.png"),iscorrect:false}]},
  
  {name:"select the flag of Us",options:[
  {image:require("./imagee/us.webp"),iscorrect:true},
  {image:require("./imagee/nig.png"),iscorrect:false},
{image:require("./imagee/russia.jpg"),iscorrect:false}]},

{name:"select the flag of russia",options:[
  {image:require("./imagee/us.webp"),iscorrect:false},
  {image:require("./imagee/nig.png"),iscorrect:false},
{image:require("./imagee/russia.jpg"),iscorrect:true}]}]
             

const [score,setscore]=useState(0)
 const [imageeIndex,setimageeIndex]=useState(0)
 const handleindex=(iscorrect)=>{
   if(iscorrect===true){
setscore(score+1)
console.log("correct answer")

   } else{
    console.log("wrong answer")
    imagee
    }
    
   const nextquestion=imageeIndex+1
  if(nextquestion<imagee.length){
    setimageeIndex(nextquestion)
  }else{
    alert( + score+1)
    setimageeIndex(imageeIndex)
  }
  
  
  }

              return (
              
   <View style={styles.container}>
     <Text  style={{color:"black",marginTop:65,fontWeight:"bold",fontSize:30,alignSelf:"center"}}>Guess the country</Text>
       <View style={{backgroundColor:"coral",opacity:.6,alignItems:"center",marginTop:60,height:319,borderRadius:5,}}>
      
      {/* <Hy  handle={handle} handl={handlequest} ques={imagee}/>
      
       <Button title='click me' onPress={()=>{pressHandle()}} />
      */}
      
      <Text style={{marginLeft:20}}>question:{imageeIndex+1}/{imagee.length}</Text>
 
      <Text style={{color:"black",fontSize:20}}>{imagee[imageeIndex].name}</Text>
      {imagee[imageeIndex].options.map((item,index)=>{return(
          <TouchableOpacity key={item} onPress={()=>handleindex(item.iscorrect)} style={styles.typo}>
          <Image source={item.image} style={styles.imagearray} />
          </TouchableOpacity>)})}
       </View>
        <Text style={{color:"black",fontSize:20}}>Score: {score}</Text>
       
      
      </View>
  )
}


const styles=StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,
  paddingHorizontal:20,
  color:"black",
  },

  body:{
    backgroundColor:'white',
    padding:40,
    marginTop:5,
    fontSize:20,

  },
  imagearray:{
height:60,
width:120,
borderRadius:25,
marginTop:-29,
//marginLeft:-19,
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
    width:145,
    height:45,
borderRadius:5,
marginTop:24,
padding:30,
  },
  typo:{
   // backgroundColor:"green",
    width:145,
    height:45,
    
borderRadius:5,
marginTop:24,
padding:30,
  }

})
/*<View>
      
       <Button title='submitqu' onPress={()=>{nextquest()}}  />

       <Button title='click me' onPress={()=>{hello()}} />
       <TextInput placeholder="hehf"/>
     </View>
     */