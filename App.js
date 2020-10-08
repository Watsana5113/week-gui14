import React from 'react'
import { View,Text,Image } from 'react-native'

const App=()=>{
  return(
    <View>
      <Image
       style={{width:'100%',height:150}}
       source={require('./images/aom.jpg')} 
       />
       <Image
       style={{width:'100%,height:350'}}
       source={{uri}}
       />
    </View>
  )
}
export default App;