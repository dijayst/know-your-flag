
import { Image, Text, View, StyleSheet,Button,TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function Questio({countri}) {
    return (
        <View>
              
  <ScrollView>
    {countri.map((item)=>{return(<View key={item.id}><Image source={item.image} style={styles.imagearray} /></View>)})}
  </ScrollView>

            </View>
        )
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