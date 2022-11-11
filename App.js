import React, { useState,useEffect } from 'react'
import {  Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Hy from './gamescomponent/Hy';

export default function App() {
const total=3;
pick=""
const [score, setscore] = useState(0);
const [handle,sethandle]=useState(false);

const imagee=[{id:"1",image:require("./imagee/nig.png")},
              {id:"2",image:require("./imagee/uk.png")},
              {id:"3",image:require("./imagee/gh.png")}];
const image1=["helo","hy","yes"]
const butt=()=>{
  for(i=0;i<=image1.length;i++){
if(image1[i]===null|| image1[i]===""){
//console.log(image1[i]+1)
console.log(image1[i])
alert(++image1)
//alert("hryt")
return(handle)
  }else{
    alert(image1[i]++)
    //alert("rth")  
    console.log(image1[i]++)
    return(handle)
   // alert(image1[i]+1)
  
  }
}
    sethandle(!handle)
}
const image2={image1:require("./imagee/nig.png"),
             image2:require("./imagee/uk.png"),
             image3:require("./imagee/uk.png"),
             image:require("./imagee/uk.png")};

              
    const handlequest=()=>{
         
//const picked=""
      imagee.forEach((item)=>{return(
console.log(item))
      })
      //pick=picked
      //console.log({pick})
    
      for(i=0;i<imagee.length;i++){
          if(imagee[i].image===null||imagee[i].image===""){
            alert("yeah")
          return(handle)
          }
          if(eval(imagee.image+i)===null||eval(imagee.image+i==="")){
            alert("you missed")
            console.log(i)
          return(handle)
          }else{
            console.log(i)
          alert("clicked")
          return(handle)
       
          }

          console.log(imagee[i].id,imagee[i].image)
          total=+imagee[i]++
          console.log(total)
        }
         sethandle(!handle)
       // console.log(image++)
      //  console.log(iscore++)
        //console.log(score)
        
     
    
    /*  if(image===null || image===""){
        alert("yeah")
        return(handle)
      }else{
        alert("clicked")
        return(handle)
      }*/
         
  
    }
    useEffect(() => {
      
    console.log(image1)
    })

              return (
   <View>
     <ScrollView>
       <Hy  handle={handle} handl={()=>{handlequest()}} ques={imagee}/>
       {image1.map((item)=>{return(
         <Button key={item} title={item} onPress={()=>{butt()}}/>
       )})}

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
              <Button onPress={()=>{console.log("ty")}} title="submit"/>
     
      </View>
      <View>
      {pick}
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
