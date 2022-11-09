import React, { useState,useEffect } from 'react'
import { Alert, Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function App() {
const total=3;
const [score, setscore] = useState(0);
const [handle,sethandle]=useState(false);
const image={image1:require("./imagee/nig.png"),
             image2:require("./imagee/uk.png"),
             image3:require("./imagee/gh.png")};
const image1={image1:require("./imagee/nig.png"),
             image2:require("./imagee/uk.png"),
             image3:require("./imagee/uk.png"),
             image:require("./imagee/uk.png")};
const image2={image1:require("./imagee/nig.png"),
             image2:require("./imagee/uk.png"),
             image3:require("./imagee/uk.png"),
             image:require("./imagee/uk.png")};

    const handlequest=()=>{
      for(i=1;i<total;i++){
        /*  if(image.image1===null||image.image1===""){
            alert("yeah")
          return(handle)
          }*/
          if(eval(image.image+i)===null||eval(image.image+i==="")){
            alert("you missed")
            console.log(i)
          return(handle)
          }else{
            console.log(i)
          alert("clicked")
          return(handle)
       
          }
          iimage++
        }
        console.log(image++)
      //  console.log(iscore++)
        //console.log(score)
        /*
     

      sethandle(!handle)      
      if(image===null || image===""){
        alert("yeah")
        return(handle)
      }else{
        alert("clicked")
        return(handle)
      }*/
         
  
    }
             useEffect(() => {
               console.log(image)
             })     
  return (
   <View>
     <ScrollView>
     <View>
       <Text>Guess the country</Text>
       <Button title='click me' onPress={()=>{alert("welcome")}}  />

       <Button title='click me' onPress={()=>{console.log("welcome")}} />
       <TextInput placeholder="hehf"/>
     </View>
     <View>
       
       <Text>
         Nigeria
       </Text>
       <TextInput source={image.image1} style={styles.imagearray} />
       <TouchableOpacity onPress={()=>{handlequest()}} style={handle?styles.typog:styles.typo}>
       <Image source={image.image1}  style={styles.imagearray}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>{handlequest()}} style={handle?styles.typog:styles.typo}>
       <Image source={image.image2}  style={styles.imagearray}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>{handlequest()}} style={handle?styles.typog:styles.typo}>
       <Image source={image.image3}  style={styles.imagearray}/>
       </TouchableOpacity>
       <Button onPress={()=>{console.log("ty")}} title="submit"/>
       <Text>
         Tap the flag of Nigeria
       </Text>
       <Image source={require("./imagee/uk.png")}/>
       <Image source={require("./imagee/nig.png")}/>
       <Image source={require("./imagee/russia.jpg")}/>
       <Text>
       Tap the flag of morroco
       </Text>
       <Image source={require("./imagee/gh.png")}/>
       <Image source={require("./imagee/morro.jpg")}/>
       <Image source={require("./imagee/us.webp")}/>
       <Text>
       Tap the flag of Russia
       </Text>
       <Image source={require("./imagee/russia.jpg")}/>
       <Image source={require("./imagee/nig.png")}/>
       <Image source={require("./imagee/uk.png")}/>
     </View>
     </ScrollView>
   </View>
  )
}


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

// sethandle(!handle)      