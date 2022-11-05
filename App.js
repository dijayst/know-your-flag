import React, { useEffect, useState } from 'react';
import gh from "./imagee/gh.png"
import { Image, Text, View, StyleSheet,Button,TextInput, ScrollView, FlatList, TouchableOpacity, Alert } from 'react-native';
import Hy from './gamescomponent/Hy';
import Questio from './gamescomponent/Questio';
//import { Image } from 'react-native-svg/lib/typescript/ReactNativeSVG';
//import { Svg } from 'react-native-svg';
//import {Getsum} from './Getsum';
//import Quest1 from "./gamescomponent/Quest1";
//import Quest2 from "./gamescomponent/quest1";
//import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
//import Icon from 'react-native-vector-icons/FontAwesome';
//import {createBottomTabNavigator, createMaterTopTabNavigator} from  '@react-navigation/bottom-tabs'
//interface homeprops{name:string;color:string;size:number;}

//const AuthStack= createBottomTabNavigator();
export default function App() {
  /*const [name1, setname1] = useState([
    {name: 'ebun ', key:'1'},
    {name: 'dushen', key:'2'},
    {name: 'sally', key:'3'},
    {name: 'dami', key:'4'},
    {name: 'ayo', key:5},
    {name: 'ebun ', key:'6'},
    {name: 'dushen', key:'7'},
    {name: 'sally', key:'8'},
    {name: 'dami', key:'9'}
  ]);
  const pressHandler=(key)=>{
    console.log(key)
    setname1((prevname)=>{
      return(
        prevname.filter((person)=>person.key!=key)
      )
    })
  }
  /* */


  const [country7, setcountry7] = useState([[1,2,3],[4,5,6],[7,8,9]])
 const[questii,setquestii]=useState(false)
/*
  const country= [{id:1, image:require("./imagee/uk.png")},
    {id:2,image:require("./imagee/us.webp")},
    {id:3,image:require("./imagee/russia.jpg")},
    {id:4, image:require("./imagee/gh.png")},
    {id:5,image:require("./imagee/morro.jpg")},
    {id:6,image:require("./imagee/nig.png")}]
*/
/*
  const [country, setcountry] = useState(
    ["/imagee/uk.pn","./imagee/us.webp","./imagee/russia.jpg","./imagee/gh.png",
    "./imagee/morro.jpg",
    "./imagee/nig.png",
    "esther is my name",
    "esther"])
*/
    
  const [country, setcountry] = useState([
    {id:1, image:require("./imagee/uk.png")},
    {id:2,image:require("./imagee/us.webp")},
    {id:3,image:require("./imagee/russia.jpg")},
    {id:4, image:require("./imagee/gh.png")},
    {id:5,image:require("./imagee/morro.jpg")},
    {id:6,image:require("./imagee/nig.png")},
    {id:7,text:"esther is my name"}])
  
 /*
    const [country1, setcountry1] = useState([
      {id:1, image:require("./imagee/gh.png")},
      {id:2,image:require("./imagee/morro.jpg")},
      {id:3,image:require("./imagee/nig.png")}])
 
      const [country2, setcountry2] = useState([
        {id:1, image:require("./imagee/nig.png")},
        {id:2,image:require("./imagee/uk.png")},
        {id:3,image:require("./imagee/russia.jpg")}])*/
      
        const [score, setscore] = useState("")
    useEffect(() => {
   
   const uk=country[0]
   const us=country[1]
   const russia=country[2]
   const gh=country[3]
   const morroco=country[4]
   const nig=country[5]
   if(nig===country[5]){
     console.log("its nig")
   }else{}



   console.log("why nah")
   
  const ans1=country[2]
  console.log(ans1)
  },)

  const handlenig=(index)=>{
    
    let strings=Array.from(country)
strings[index]=questii ? Alert("correct Thats the correct flag score:"):Alert("failed, try again")
setcountry(strings);
setquestii(!questii);
console.log(questii)
/*
   const uk=country[0]
   const us=country[1]
   const russia=country[2]
   const gh=country[3]
   const morroco=country[4]
   const nig=country[5]
   if(nig===country[5])
   setcountry([{id:6,text:""}])*/
  }
  //const [ans,setans]=useState("")
  const countryans=()=>{

    setans("")
    if(ans==="Nig"){

    }
    setcountry()
    setcountry1()
    setcountry2()
  }

  //const quest={
   /* imgae:{
      "1":require("./image/gh.png"),
      "2":require("./image/nig.png"),
      "3":require("./image/uk.png"),
      "4":require("./image/russia.jpg"),
      "5":require("./image/us.webp"),
      "6":require("./image/morro.jpg")
    }
  
  }
  */
 
  const handlemorr=()=>{
    console.log("not nig")
  }
  const handleruss=()=>{
    console.log("its nig")
  }
 const flagnig="what color is nigeria flag"
//const [nig, setnig] = useState("")
 if(flagnig==="what color is nigeria flag"){
   handlemorr
 }else{
   handleruss
 }
  return (
    <View style={styles.container}>
        <Text>
    Guess the flag
  </Text>
 <View>
   <Text>Tap the flag of</Text><Text>Spain</Text>
  <Text>
    helo
  </Text>
  <View>
     </View>
  <Text>Score :{score}</Text>
  
  <Hy countr={country[6]} count={()=>handlenig(6)}/>
  <Hy countr={country[1]} count={()=>handlenig(1)}/>
  <Hy countr={country[2]} count={()=>handlenig(2)}/>

  </View>
  <View>
  <Hy countr={country[3]} count={()=>handlenig(3)}/>
  <Hy countr={country[4]} count={()=>handlenig(4)}/>
  <Hy countr={country[5]} count={()=>handlenig(5)}/>
  </View>
  <View>
  <Hy countr={country[4]} count={()=>handlenig(4)}/>
  <Hy countr={country[2]} count={()=>handlenig(2)}/>
  <Hy countr={country[1]} count={()=>handlenig(1)}/>
  </View>

  
  <ScrollView>
    {country.map((item)=>{return(<View key={item.id} >
      <Image source={item.image} onPress={()=>handlenig()} style={styles.imagearray} />
      </View>)})}
  </ScrollView>
{/*
<Questio countri={country2} />
     <Image source={require("./imagee/uk.png")}/>
<Hy countr={country1} count={countryans}/>*/}
  <Text>heloufryhh</Text>
   </View>
    );
}

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
})

/*
 <ScrollView>
{name.map((item)=>{
  return (
    <View key={item.key}>
<Text style={styles.body}>{item. name}</Text>
</View>
  )
})}
</ScrollView>


          <AuthStacck.Navigator>
      <AuthStacck.Screen  name="maincategory" component={Home}/>
          </AuthStacck.Navigator>
        
*/