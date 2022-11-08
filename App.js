import React, { useState,useEffect } from 'react'
import { Alert, Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function App() {
const total=3;
const [score, setscore] = useState(0);
const image=[{id:1,image:require("./imagee/nig.png")},
                                    {id:2,image:require("./imagee/uk.png")},
                                    {id:3,image:require("./imagee/uk.png")},
                                    {id:4,image:require("./imagee/uk.png")}];
                                    const [handl, sethandl] = useState("")
             const handlequest=(e)=>{
               sethandl(event.target.value)
               console.log(handl)
  //Alert(image[3]);
  console.log("helob")

             }                  
             useEffect(() => {
               console.log(image[2])
             })     
  return (
   <View>
     <View>
       <Text>Guess the country</Text>
       <Button title='click me' onPress={()=>{alert("welcome")}} />

       <TextInput placeholder="hehf" value={handl} onChangeText={(val)=>sethandl(val)}/>
     </View>
     <View>
       <Text>
         Nigeria
       </Text>
       <FlatList
       data={image}
       keyExtractor={(item)=>item.id}
       renderItem={({item})=>(<TouchableOpacity onPressIn={()=>(handlequest)}>
        <Image source={item.image} 
       style={styles.imagearray}/>
        </TouchableOpacity>)}
       />
       <Button onPressIn={()=>console.log("ty")} title="submit"/>
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

  }

})