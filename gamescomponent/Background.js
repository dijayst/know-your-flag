/*import React from 'react'
import { StyleSheet, Text,Button ,View } from 'react-native'
import {print} from './Vari'


const Background = ({navigation}) => {
    
const [imgActive, setimgActive] = useState(0)
const handleimage=(nativeEvent)=>{
if(nativeEvent){
  const slide=Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
  if(slide != imgActive){
    setimgActive(slide);
  }
}
}


const [handle,sethandle]=useState(false);

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
        <View>
            
     
<FlatList 
pagingEnabled
horizontal
showsHorizontalScrollIndicator={false}
keyExtractor={(item)=>item.id}
data={print}
style={styles.imagev}
 renderItem={({item})=>{return(<TouchableOpacity>
   <Image source={item.image}/>
 </TouchableOpacity>)}}/>
 <Button onPress={()=>navigation.navigate(' Mapquest')} >lets play</Button>

 </View>
    )
}

export default Background

const styles = StyleSheet.create({})
*/
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Background = () => {
    return (
        <View>
            <Text>hjgjkhk</Text>
        </View>
    )
}

export default Background

const styles = StyleSheet.create({})
