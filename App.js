import React, { useState,useEffect } from 'react'
import {  Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Hy from './gamescomponent/Hy';
import LinearGradient from 'react-native-linear-gradient';

//import {createStackNavigator} from  '@react-navigation/stack'

//const AuthStack= createStackNavigator();
export default function App() {
  const [name1, setname1] = useState([
    {name: 'ebun ', id:'1'},
    {name: 'dushen', id:'2'},
    {name: 'sally', id:'3'},
    {name: 'dami', id:'4'},
    {name: 'ayo', id:5},
    {name: 'ebun ', id:'6'},
    {name: 'dushen', id:'7'},
    {name: 'sally', id:'8'},
    {name: 'dami', id:'9'}
  ]);
 
const total=3;

const [score,setscore]=useState(0)
const handle=false;

const imagee=[{id:"1",image:require("./imagee/uk.png")},
              {id:"2",image:require("./imagee/nig.png")},
              {id:"3",image:require("./imagee/gh.png")}];
const image2=[{id:"1",image:require("./imagee/nig.png")},
             {id:"2",image:require("./imagee/uk.png")},
             {id:"3",image3:require("./imagee/uk.png")}]

  const pressHandle=()=>{  
      //navigation.navigate('Hy')
 // navigation.push('Contact')
}

             /*
             const nextquest=()=>{
              imagee.filter((item)=>{return(
              if(item.image !=handlequest||item.image===""){
                alert("you missed question one")
              
              }
              )
            })
             }*/
      const anwser=[imagee[1],"cat"]
           //  console.log(anwser[0])
    const handlequest=(id)=>{
     let arr=imagee.filter((item)=>{
       if(item.id!=id){
       setscore(score+1)
     }

  }) 
  console.log(arr);
   // setscore(score+1)
  //  if(id===anwser[0]){  setscore(score+1)}
   // return handle
console.log(id)
//console.log(imagee[1])
     // e.preventDefault();
      //console.log(e.target.entry)
     //   item.image==image)
//console.log(event.target)
//console.log(imagee.findIndex(item))
  // console.log(index)
   //alert("hey")
     
    }

const handlename=(id)=>{
  
  setname1((prevname)=>{
    return prevname.find(person=>{ if(person.name==="dami"){
      console.log("yeah")
    }else{console.log("cant find")}})
  })
  //alert("yyeah")
  console.log(name1)
}

              return (
              
   <View style={styles.container}>
     
     <Text  style={{color:"grey",marginTop:65,fontSize:30,alignSelf:"center"}}>Guess the country</Text>
       <View style={{backgroundColor:"#fffffe",opacity:.6,alignItems:"center",marginTop:65,height:300,borderRadius:5,}}>
       <Text style={{color:"black",fontSize:20,fontWeight:"bold"}}>
         Nigeria
       </Text>
      
      {/* <Hy  handle={handle} handl={handlequest} ques={imagee}/>
      
       <Button title='click me' onPress={()=>{pressHandle()}} />
      */}
      {imagee.map((item,index)=>{return(
          <TouchableOpacity key={item.id} onPress={()=>handlequest(item.id)} style={styles.typo}>
          <Image source={item.image} style={styles.imagearray} />
          </TouchableOpacity>)})}
       </View>
        <Text style={{color:"grey",fontSize:20}}>Score: {score}</Text>
 
      
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